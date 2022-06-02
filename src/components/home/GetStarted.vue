<template>
  <section class="get-started">
    <base-container>
      <h3>Let's get started now!</h3>
      <el-button>Become Member</el-button>
    </base-container>
  </section>
</template>

<style scoped>
.get-started {
  padding: 6rem 0 3rem 0;
  background-image: url("../../assets/hero@2x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
}

.get-started h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #292929;
  margin-bottom: 2rem;
}

.get-started .el-button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #ffffff;

  background: #0faaec;
  border-radius: 80px;
  padding: 1.5rem 1.25rem;
}
</style>