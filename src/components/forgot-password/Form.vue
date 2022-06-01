<template>
  <div class="forgot-password-form">
    <el-form label-position="top">
      <el-row>
        <el-col>
          <el-form-item label="Username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="Email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-button>Reset Password</el-button>
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
        email: "",
      },
    };
  },
};
</script>

<style scoped>
.forgot-password .forgot-password-form :deep(.el-form-item__label) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #292929;
}

.forgot-password .forgot-password-form :deep(.el-input .el-input__wrapper) {
  background: #ebf1f5;
  border-radius: 16px;
  padding: 0.2rem 1rem;
}

.forgot-password .forgot-password-form .el-button {
  background: #0faaec;
  border-radius: 16px;
  padding: 1.3rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #f6ffee;
  width: 100%;
  /* margin-top: 1rem; */
}
</style>