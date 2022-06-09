<template>
  <div class="change-password-form">
    <el-form label-position="top">
      <el-form-item label="Old Password">
        <el-input type="password" v-model="ruleForm.oldPassword"></el-input>
      </el-form-item>
      <el-form-item label="New Password">
        <el-input type="password" v-model="ruleForm.newPassword"></el-input>
      </el-form-item>
      <el-form-item label="Confirm Password">
        <el-input type="password" v-model="ruleForm.confirmPassword"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
};
</script>

<style scoped>
.change-password-form :deep(.el-form .el-form-item__label) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
}

.change-password-form :deep(.el-form .el-input) {
  width: 100%;
}

.change-password-form :deep(.el-form .el-input .el-input__wrapper) {
  background: #ebf1f5;
  border-radius: 10px;
  padding: 0.2rem 1rem;
  position: relative;
}

.change-password-form .el-button {
  background: #0faaec;
  border-radius: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  font-variation-settings: "slnt" 0;
  padding: 1.5rem 2.5rem;
}
</style>