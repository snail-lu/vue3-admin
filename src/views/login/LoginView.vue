<template>
    <div class="login-container">
        <div class="login-form-wrapper">
            <h1 class="title">欢迎登录</h1>
            <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="login-form">
                <el-form-item label="" prop="username">
                    <el-input placeholder="用户名" v-model="loginForm.username">
                        <template #prepend>
                            <el-button icon="User" />
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input placeholder="密码" v-model="loginForm.password" type="password" show-password>
                        <template #prepend>
                            <el-button icon="Unlock" />
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        class="login-btn"
                        @click="submitForm(loginFormRef)"
                        :disabled="submiting"
                        >{{ submiting ? '登录中...' : '登录' }}</el-button
                    >
                    <!-- <el-button class="reset-btn" @click="resetForm(loginFormRef)">重置</el-button> -->
                </el-form-item>
            </el-form>
            <div class="tips">提示：用户名为admin或guest，密码为123456</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { FormInstance, ElMessage } from 'element-plus';
import { LoginFormDto } from '../../types/login';
import { login } from '@/api/user';
import { Md5 } from 'ts-md5';

// 路由示例
const router = useRouter();
// 表单ref及数据
const loginFormRef = ref<FormInstance>();
const loginForm = reactive<LoginFormDto>({
    username: 'admin',
    password: '123456'
});

// 表单校验规则
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '用户名长度需要3~10个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, message: '密码至少需要6个字符', trigger: 'blur' }
    ]
};

// 登录用户信息保存
const store = useStore();
const setLoginUserInfo = (userInfo: object) => store.commit('setUserInfo', { userInfo });

let submiting = ref(false);
// 表单提交
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    submiting.value = true;
    await formEl.validate((valid) => {
        if (valid) {
            login({ ...loginForm, password: Md5.hashStr(loginForm.password) }).then(
                (res) => {
                    if (res && res.success) {
                        setLoginUserInfo(res.result);
                        ElMessage.success('登录成功~');
                        router.push({ path: '/' });
                    }
                    submiting.value = false;
                },
                (err) => {
                    ElMessage.error('登录失败，请检查用户名或密码');
                    submiting.value = false;
                }
            );
        }
    });
};

// 表单重置
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>

<style lang="scss" scoped>
.login-container {
    width: 100%;
    height: 100%;
    background: url('../../assets/images/bg.jpeg') center no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-form-wrapper {
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 5px;
        padding: 20px 50px;

        .login-form {
            width: 260px;
        }

        .title {
            text-align: center;
            margin-bottom: 40px;
        }

        .login-btn,
        .reset-btn {
            width: 100%;
        }

        .reset-btn {
            margin-left: 0;
            margin-top: 10px;
        }
    }

    .tips {
        width: 260px;
        font-size: 12px;
        color: #666;
        user-select: none;
    }
}
</style>
