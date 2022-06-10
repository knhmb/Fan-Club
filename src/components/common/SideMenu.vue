<template>
  <teleport to="body">
    <div class="side-menu">
      <div class="heading">
        <div class="logo-section">
          <img
            @click="navigate('/')"
            class="brand-logo"
            src="../../assets/brand-logo@2x.png"
            alt=""
          />
          <img
            @click="closeSideMenu"
            class="cross"
            src="../../assets/cross-20x20@2x.png"
            alt=""
          />
        </div>
        <el-input
          :prefix-icon="Search"
          placeholder="Search Creators and tags"
        ></el-input>
      </div>
      <div class="body-content">
        <ul>
          <li @click="navigate('/')">Home</li>
          <li @click="navigate('/notifications')">
            Notifications
            <div class="pill">24</div>
          </li>
          <li @click="navigate('/creator/profile')">Creator Profile</li>
        </ul>
        <div class="profile-settings">
          <div class="head">
            <h5>Profile setting</h5>
            <img src="../../assets/arrow-20x20@2x.png" alt="" class="arrow" />
          </div>
          <p @click="navigate('/profile-settings/profile-information')">
            Profile
          </p>
          <p @click="navigate('/profile-settings/change-password')">Password</p>
          <p @click="navigate('/profile-settings/subscription-plan')">
            Subscription plan history
          </p>
          <p @click="navigate('/profile-settings/product-history')">
            Product history
          </p>
        </div>
        <p class="settings">Language</p>
        <p class="settings">Help centre & FAQ</p>
        <p class="settings">Log out</p>
      </div>
    </div>
  </teleport>
</template>

<script>
import { Search } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      Search,
    };
  },
  methods: {
    closeSideMenu() {
      this.$emit("closeSideMenu", false);
    },
    navigate(path) {
      this.$router.push(path);
      this.closeSideMenu();
    },
  },
};
</script>

<style scoped>
.side-menu {
  background: #ffffff;
  border-radius: 4px;
  position: absolute;
  top: 0;
  width: 100%;
}

.side-menu .heading {
  padding: 1rem;
  border-bottom: 1px solid #cfdce6;
}

.side-menu .heading .logo-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.side-menu .heading img.brand-logo {
  width: 7rem;
}

.side-menu .heading img.cross {
  width: 1.5rem;
}

.side-menu :deep(.el-input .el-input__wrapper) {
  padding: 0.2rem 0.5rem 0.2rem 0.625rem;
  border-radius: 5rem;
  background-color: #ebf1f5;
}

.side-menu .body-content {
  padding: 1rem;
}

.side-menu .body-content ul {
  list-style: none;
}

.side-menu .body-content ul li {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 16px;
  line-height: 24px;
  color: #525e66;
  font-variation-settings: "slnt" 0;
  border-bottom: 1px solid #cfdce6;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.side-menu .body-content ul li .pill {
  background: rgba(226, 65, 66, 0.1);
  border-radius: 40px;
  padding: 0.2rem 0.5rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #e24142;
  width: fit-content;
  display: inline-block;
  margin-left: 0.5rem;
  vertical-align: middle;
}

.side-menu .body-content .profile-settings {
  border-bottom: 1px solid #cfdce6;
  padding-bottom: 1rem;
}

.side-menu .body-content .profile-settings .head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.side-menu .body-content .profile-settings .head h5 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 16px;
  line-height: 24px;
  color: #525e66;
  font-variation-settings: "slnt" 0;
}

.side-menu .body-content .profile-settings .head img.arrow {
  width: 1.5rem;
}

.side-menu .body-content .profile-settings p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #525e66;
  margin-bottom: 1rem;
  cursor: pointer;
}

.side-menu .body-content p.settings:first-of-type {
  margin-top: 1rem;
}

.side-menu .body-content p.settings {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 16px;
  line-height: 24px;
  color: #525e66;
  font-variation-settings: "slnt" 0;
  margin-bottom: 1rem;
  cursor: pointer;
}

.side-menu .body-content p.settings:not(:last-of-type) {
  border-bottom: 1px solid #cfdce6;
  padding-bottom: 1rem;
}
</style>