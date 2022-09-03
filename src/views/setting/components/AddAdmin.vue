<template>
    <el-dialog v-model="visible" :title="title" width="400px" center>
        <el-form ref="formRef" :model="form" label-width="100px" :rules="rules">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" class="w-200" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" class="w-200" />
            </el-form-item>
            <el-form-item label="角色">
                <el-select v-model="form.role" class="w-200">
                    <el-option label="管理员" :value="1" />
                    <el-option label="运营者" :value="2" />
                    <el-option label="开发者" :value="3" />
                </el-select>
            </el-form-item>
            <el-form-item label="启用状态">
                <el-select v-model="form.status" class="w-200">
                    <el-option label="启用" :value="1" />
                    <el-option label="停用" :value="0" />
                </el-select>
            </el-form-item>
            <div class="tips">提示：初始密码为123456</div>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="onCancel">取消</el-button>
                <el-button type="primary" @click="onConfirm(formRef)">保存</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Md5 } from 'ts-md5';
import { addAdmin, updateAdmin } from '@/api/setting';
import type { FormInstance, FormRules } from 'element-plus';

const formRef = ref<FormInstance>();
const form = ref({
    username: '',
    email: '',
    password: Md5.hashStr('123456'),
    role: 2,
    status: 1
});
const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 5, message: '长度不可小于5', trigger: 'blur' }
    ],
    email: [
        {
            required: true,
            message: '请输入邮箱',
            trigger: 'change'
        },
        {
            type: 'email',
            message: '请输入正确的邮箱格式',
            trigger: ['blur', 'change']
        }
    ]
});

const emit = defineEmits(['confirm', 'cancel']);

// 取消操作
const onCancel = () => {
    hide();
    emit('confirm', false);
};

// 保存操作
const onConfirm = async (formEl: FormInstance) => {
    let valid = await formEl.validate();
    if (!valid) return false;

    let res = null;
    if (form.value.id) {
        res = await updateAdmin(form.value);
    } else {
        res = await addAdmin(form.value);
    }
    if (res && res.result) {
        hide();
        emit('confirm', true);
    }
};

const visible = ref(false);
const title = ref('新增管理员');
// 显示组件
const show = (data: object) => {
    visible.value = true;
    if (data) {
        title.value = '编辑管理员';
        form.value = data;
    } else {
        form.value = {
            username: '',
            email: '',
            password: Md5.hashStr('123456'),
            role: 2,
            status: 1
        };
    }
};

// 隐藏组件
const hide = () => {
    visible.value = false;
};

defineExpose({
    show,
    hide
});
</script>

<style lang="scss" scoped>
.w-200 {
    width: 200px;
}

.tips {
    color: #999;
    margin-left: 62px;
    font-size: 12px;
}
</style>
