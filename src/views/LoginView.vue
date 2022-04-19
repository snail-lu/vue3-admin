<template>
  <div class="login-container">
    <div class="login-form-wrapper">
      <div class="title">系统登录</div>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="60px"
        class="login-form"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(loginFormRef)">登录</el-button>
          <el-button @click="resetForm(loginFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";

const loginFormRef = ref<FormInstance>();
const loginForm = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 6, max: 15, message: "用户名长度需要6~15个字符", trigger: "blur" },
  ],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: url("../assets/images/bg.jpeg") center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form-wrapper {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    padding: 40px;

    .title {
      font-size: 30px;
      text-align: center;
      margin-bottom: 40px;
    }
  }
}
</style>
