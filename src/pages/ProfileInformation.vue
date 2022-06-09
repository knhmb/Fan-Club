<template>
  <section class="profile-information">
    <div class="card">
      <el-row>
        <el-col :span="12">
          <h4>Profile Information</h4>
        </el-col>
        <el-col :span="12">
          <p class="avatar">Avatar</p>
          <div class="change-avatar">
            <img src="../assets/avatar-1.png" alt="" />
            <el-button>Change</el-button>
          </div>
          <Form />
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import Form from "../components/profile-information/Form.vue";

export default {
  components: {
    Form,
  },
};
</script>

<style scoped>
.profile-information {
  margin: 2rem 0;
}

.profile-information .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
}

.profile-information .card h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 18px;
  line-height: 24px;
  color: #191919;
  font-variation-settings: "slnt" 0;
}

.profile-information p.avatar {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
  margin-bottom: 1rem;
}

.profile-information .change-avatar {
  display: flex;
  align-items: center;
}

.profile-information .change-avatar img {
  width: 4rem;
}

.profile-information .change-avatar .el-button {
  background: linear-gradient(
      0deg,
      rgba(15, 170, 236, 0.15),
      rgba(15, 170, 236, 0.15)
    ),
    #ffffff;
  border-radius: 40px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #0faaec;
  font-variation-settings: "slnt" 0;
  margin-left: 1rem;
}
</style>