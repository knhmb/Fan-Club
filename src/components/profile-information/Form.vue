<template>
  <div class="profile-information-form">
    <el-form label-position="top">
      <el-form-item label="Username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Nickname">
        <el-input v-model="ruleForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="Gender">
        <el-radio-group v-model="ruleForm.gender">
          <el-radio label="Male" />
          <el-radio label="Female" />
          <el-radio label="Not specify" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Birthday">
        <el-date-picker
          v-model="ruleForm.birthday"
          type="date"
          placeholder="Pick a day"
        />
      </el-form-item>
      <el-form-item label="Birthday">
        <el-input
          type="textarea"
          v-model="ruleForm.birthdayComment"
          rows="7"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "Chan Tai Man",
        email: "chantaiman@gmail.com",
        nickname: "Chan Tai Man",
        gender: "Male",
        birthday: "1980-12-12",
        birthdayComment: "",
      },
    };
  },
};
</script>

<style scoped>
.profile-information-form {
  margin: 2rem 0;
}

.profile-information-form :deep(.el-form .el-form-item__label) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
}

.profile-information-form :deep(.el-form .el-input) {
  width: 100%;
}

.profile-information-form :deep(.el-form .el-input .el-input__wrapper) {
  background: #ebf1f5;
  border-radius: 10px;
  padding: 0.2rem 1rem;
  position: relative;
}

.profile-information-form :deep(.el-form .el-textarea .el-textarea__inner) {
  background: #ebf1f5;
  border-radius: 10px;
}

.profile-information-form :deep(.el-form .el-input .el-input__prefix) {
  position: absolute;
  right: 0;
}

.profile-information-form :deep(.el-radio .el-radio__label) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #292929;
}

.profile-information-form .el-button {
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