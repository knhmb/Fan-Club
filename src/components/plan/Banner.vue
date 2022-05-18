<template>
  <div class="banner">
    <img src="../../assets/creator01@2x.jpg" alt="" />
  </div>
  <base-container>
    <div class="personal-info">
      <h3>Ronald Richards</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget molestie
        mauris in turpis sed.
      </p>
    </div>
  </base-container>
  <div class="tab-section">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="Home" name="home">Home</el-tab-pane>
      <el-tab-pane label="Plan" name="plan"><plan-tab></plan-tab></el-tab-pane>
      <el-tab-pane label="Post" name="post">Post</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PlanTab from "../../components/plan/PlanTab.vue";

export default {
  components: {
    PlanTab,
  },
  data() {
    return {
      activeName: "plan",
    };
  },
};
</script>

<style>
.plan .banner {
  background-image: url("../../assets/creator-page-banner@2x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 60vh;
  width: 100%;
  position: relative;
}

.plan .banner img {
  border-radius: 100%;
  width: 5rem;
  border: 4px solid #ffffff;
  position: absolute;
  bottom: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  /* height: 2rem; */
}

.plan .personal-info {
  margin-top: 2rem;
  text-align: center;
}

.plan .personal-info h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #292929;
}

.plan .personal-info p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  font-feature-settings: "liga" off;
  color: #525252;
}

.plan .tab-section .el-tabs__nav-wrap.is-top {
  display: flex;
  justify-content: center;
}

.plan .tab-section .el-tabs__item {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  font-feature-settings: "liga" off;
  color: #292929;
}

.plan .tab-section .el-tabs__item.is-active {
  color: #0faaec;
}
</style>