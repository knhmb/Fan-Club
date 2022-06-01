<template>
  <div class="banner">
    <!-- <img src="../../assets/creator01@2x.jpg" alt="" /> -->
  </div>
  <base-container>
    <el-row>
      <el-col :span="3">
        <img src="../../assets/creator01@2x.jpg" alt="" />
      </el-col>
      <el-col :span="9">
        <div class="personal-info">
          <h3>Ronald Richards</h3>
          <p>
            Creating lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Eget molestie mauris in turpis sed.
          </p>
        </div>
        <div class="subscribers-content">
          <p>
            <img src="../../assets/fans-outline-16x16@2x.png" alt="" />
            8078 Subscriber
          </p>
        </div>
      </el-col>
      <el-col :span="12">
        <el-button class="follow-me">Follow</el-button>
      </el-col>
    </el-row>
  </base-container>

  <!-- <base-container>
    <div class="personal-info">
      <h3>Ronald Richards</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget molestie
        mauris in turpis sed.
      </p>
    </div>
  </base-container> -->
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

.plan .el-row {
  align-items: center;
}

.plan .el-row .el-col:last-of-type {
  text-align: end;
}

.plan img {
  border-radius: 100%;
  width: 100%;
  border: 4px solid #ffffff;
}

.plan .personal-info {
  margin-left: 1rem;
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
  /* text-align: center; */
  font-feature-settings: "liga" off;
  color: #525252;
}

.plan .subscribers-content {
  background: #ebf1f5;
  border-radius: 40px;
  padding: 0.5rem 1rem;
  width: fit-content;
  margin-top: 0.5rem;
  margin-left: 1rem;
}

.plan .subscribers-content p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #525e66;
  font-variation-settings: "slnt" 0;
  display: flex;
  align-items: center;
}

.plan .subscribers-content img {
  border: none;
  border-radius: 0;
  width: 1.1rem;
  margin-right: 0.5rem;
}

.plan .el-button.follow-me {
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