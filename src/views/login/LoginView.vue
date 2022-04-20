<template>
  <div class="login-container">
    <div class="login-form-wrapper">
      <h1 class="title">系统登录</h1>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        class="login-form"
        status-icon
      >
        <el-form-item label="" prop="userName">
          <el-input placeholder="用户名" v-model="loginForm.userName">
            <template #prepend>
              <el-button icon="User" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input placeholder="密码" v-model="loginForm.password" type="password">
            <template #prepend>
              <el-button icon="Unlock" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="submitForm(loginFormRef)"
            >登录</el-button
          >
          <!-- <el-button class="reset-btn" @click="resetForm(loginFormRef)">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { FormInstance, ElMessage } from "element-plus";
import { LoginFormDto } from "../../types/login";
import { useRouter } from "vue-router";
import "element-plus/es/components/message/style/css";
import { login } from "./api/index";

// 路由示例
const router = useRouter();
// 表单ref及数据
const loginFormRef = ref<FormInstance>();
const loginForm = reactive<LoginFormDto>({
  userName: "",
  password: "",
});

// 表单校验规则
const rules = {
  userName: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 10, message: "用户名长度需要3~10个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, message: "密码至少需要6个字符", trigger: "blur" },
  ],
};

// 表单提交
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      login(loginForm).then((res) => {
        ElMessage.success("登录成功~");
        router.push({ path: "/" });
      });
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
  background: url("../../assets/images/bg.jpeg") center no-repeat;
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
}
</style>
