<template>
  <div class="login-form">
    <el-form label-position="top">
      <el-row>
        <el-col>
          <el-form-item label="Username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="Password">
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <p class="forgot-password">Forgot Password?</p>
        </el-col>
        <el-col>
          <el-button>Sign up with email</el-button>
        </el-col>
        <el-col>
          <el-divider content-position="center">or</el-divider>
        </el-col>
        <el-col>
          <el-button class="facebook"
            ><img src="../../assets/facebook-origin.svg" alt="" /> Continus with
            Facebook</el-button
          >
        </el-col>
        <el-col>
          <el-button class="google"
            ><img src="../../assets/google-origin.svg" alt="" /> Continus with
            Google</el-button
          >
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style>
.login .login-form .el-form-item__label {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #292929;
}

.login .login-form .el-input .el-input__wrapper {
  background: #ebf1f5;
  border-radius: 16px;
  padding: 0.2rem 1rem;
}

.login .login-form p.forgot-password {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  font-feature-settings: "liga" off;
  color: #0faaec;
  cursor: pointer;
}

.login .login-form p.forgot-password:hover {
  text-decoration: underline;
}

.login .login-form .el-button {
  background: #0faaec;
  border-radius: 16px;
  padding: 1.3rem;
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #f6ffee;
  width: 100%;
  margin-top: 1rem;
}

.login .login-form .el-divider__text {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  font-feature-settings: "liga" off;
  color: #6f6f6f;
}

.login .login-form .el-button.facebook,
.login .login-form .el-button.google {
  background: #ffffff;
  border: 1px solid #525e66;
  border-radius: 16px;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #292929;
  margin: 0;
  position: relative;
  margin-bottom: 1rem;
  white-space: normal;
}

.login .login-form .el-button img {
  position: absolute;
  left: 0.7rem;
}
</style>