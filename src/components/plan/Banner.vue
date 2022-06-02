<template>
  <div class="banner">
    <!-- <img src="../../assets/creator01@2x.jpg" alt="" /> -->
  </div>
  <base-container>
    <el-row>
      <el-col :xs="24" :sm="3" :md="3">
        <img class="avatar" src="../../assets/creator01@2x.jpg" alt="" />
      </el-col>
      <el-col :sm="18" :md="9">
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
      <el-col :sm="24" :md="12">
        <el-button class="follow-me" :icon="Plus">Follow</el-button>
        <el-button class="become-a-fan"
          ><img src="../../assets/become-fan@2x.png" alt="" /> Become a
          Fan</el-button
        >
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
    <base-container>
      <ul>
        <li
          @click="setTabOption('home')"
          :class="{ 'is-active': tabOption === 'home' }"
        >
          Home
        </li>
        <li
          @click="setTabOption('plan')"
          :class="{ 'is-active': tabOption === 'plan' }"
        >
          Plan
        </li>
        <li
          @click="setTabOption('post')"
          :class="{ 'is-active': tabOption === 'post' }"
        >
          Post
        </li>
        <li
          @click="setTabOption('product')"
          :class="{ 'is-active': tabOption === 'product' }"
        >
          Product
        </li>
      </ul>
    </base-container>
    <!-- <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="Home" name="home">Home</el-tab-pane>
      <el-tab-pane label="Plan" name="plan"><plan-tab></plan-tab></el-tab-pane>
      <el-tab-pane label="Post" name="post">Post</el-tab-pane>
    </el-tabs> -->
  </div>
  <plan-tab v-if="tabOption === 'plan'"></plan-tab>
  <product v-if="tabOption === 'product'"></product>
  <Post v-if="tabOption === 'post'" />
  <Profile v-if="tabOption === 'home'" />
</template>

<script>
import PlanTab from "../../components/plan/PlanTab.vue";
import Product from "../../components/plan/Product.vue";
import Post from "../../components/plan/Post.vue";
import Profile from "./Profile.vue";
import { Plus } from "@element-plus/icons-vue";

export default {
  components: {
    PlanTab,
    Product,
    Post,
    Profile,
  },
  data() {
    return {
      activeName: "plan",
      Plus,
      tabOption: "home",
    };
  },
  methods: {
    setTabOption(option) {
      this.tabOption = option;
    },
  },
};
</script>

<style scoped>
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
  font-family: "Inter";
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

.plan .el-button {
  padding: 1.2rem 2rem;
  border-radius: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  font-variation-settings: "slnt" 0;
}

.plan .el-button.follow-me {
  background: linear-gradient(
      0deg,
      rgba(15, 170, 236, 0.15),
      rgba(15, 170, 236, 0.15)
    ),
    #ffffff;

  color: #0faaec;
}

.plan .el-button.follow-me .el-icon {
  color: #0faaec;
  margin-right: 0.5rem;
}

.plan .el-button.become-a-fan {
  background: #0faaec;
  color: #fff;
}

.plan .el-button.become-a-fan img {
  width: 1.2rem;
  border-radius: 0;
  border: none;
  margin-right: 0.5rem;
}

.plan .tab-section {
  border-bottom: 1px solid #cfdce6;
  padding-bottom: 0.7rem;
  margin-top: 1rem;
  /* margin-bottom: 2rem; */
}

.plan .tab-section .container {
  padding-top: 0;
  padding-bottom: 0;
}

.plan .tab-section ul {
  display: flex;
  list-style-type: none;
}

.plan .tab-section ul li {
  margin-right: 4rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #292929;
  font-variation-settings: "slnt" 0;
  position: relative;
  cursor: pointer;
  transition: 0.2s ease-out;
  /* width: 3rem; */
}

.plan .tab-section ul li:hover {
  color: #0faaec;
}

.plan .tab-section ul li.is-active {
  color: #0faaec;
}

.plan .tab-section ul li.is-active::after {
  content: "";
  position: absolute;
  width: 150%;
  height: 3px;
  background: #0faaec;
  left: 50%;
  transform: translateX(-50%);
  /* left: -50%; */
  /* transform: translateX(15%); */
  bottom: -0.7rem;
}

.plan .tab-section .el-tabs__nav-wrap.is-top {
  display: flex;
  justify-content: center;
}

.plan .tab-section .el-tabs__item {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  font-feature-settings: "liga" off;
  color: #292929;
}

.plan .tab-section .el-tabs__item.is-active {
  color: #0faaec;
}

@media screen and (max-width: 991px) {
  .plan .el-button {
    margin-top: 1rem;
  }
}

@media screen and (max-width: 767px) {
  .plan img.avatar {
    width: 7rem;
    margin: auto;
    display: block;
  }

  .plan .el-col:nth-of-type(2) {
    text-align: center;
  }

  .plan .subscribers-content {
    margin: 1rem auto;
  }
}

@media screen and (max-width: 385px) {
  .plan .el-button {
    margin: 0;
  }

  .plan .el-button.follow-me {
    margin-right: 0.5rem;
  }
}
</style>