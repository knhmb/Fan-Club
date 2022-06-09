<template>
  <section class="change-password">
    <div class="card">
      <el-row>
        <el-col :sm="24" :md="12">
          <h4>Change Password</h4>
        </el-col>
        <el-col :sm="24" :md="12">
          <Form />
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import Form from "../components/change-password/Form.vue";

export default {
  components: {
    Form,
  },
};
</script>

<style scoped>
.change-password {
  margin: 2rem 0;
  height: 100vh;
}

.change-password .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
}

.change-password .card h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 18px;
  line-height: 24px;
  color: #191919;
  font-variation-settings: "slnt" 0;
}

@media screen and (max-width: 991px) {
  .change-password .card h4 {
    margin-bottom: 2rem;
  }
}
</style>