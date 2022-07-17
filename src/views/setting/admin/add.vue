<template>
    <div class="root">
        <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <el-form-item label="管理员名称" prop="username">
                <el-input v-model="form.username" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="管理员等级" prop="adminLevel">
                <el-select v-model="form.adminLevel" placeholder="请选择" style="width: 300px">
                    <el-option label="管理员" value="1"></el-option>
                    <el-option label="超级管理员" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="onCancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { addAdmin, getAdminDetail } from './api/index';
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
                email: '',
                adminLevel: ''
            },
            rules: {
                username: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
                password: [
                    { required: true, message: '请输入', trigger: 'blur' },
                    { min: 6, message: '长度在 6 个字符以上', trigger: 'blur' }
                ],
                email: [{ required: true, message: '请选择日期', trigger: 'blur' }],
                adminLevel: [{ required: true, message: '请选择等级', trigger: 'change' }]
            }
        };
    },
    created() {
        const { query } = this.$route;
        if (query && query.id) {
            this.adminId = query.id;
        }
    },
    methods: {
        async onSubmit() {
            try {
                await this.$refs.form.validate();
                await addAdmin(this.form);
                this.$message.success('创建成功');
                this.onCancel();
            } catch (e) {
                console.log(e);
            }
        },

        onCancel() {
            this.$router.back();
        }
    }
};
</script>
