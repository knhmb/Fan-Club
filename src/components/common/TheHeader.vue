<template>
  <header class="header">
    <base-container>
      <img
        @click="$router.push('/')"
        class="company-logo"
        src="../../assets/brand-logo-with-text@2x.png"
        alt=""
      />
      <div v-if="!isMobileViewport" class="search-bar">
        <img
          @click="dialogVisible = true"
          class="language"
          src="../../assets/language.svg"
          alt=""
        />
        <el-input
          :prefix-icon="Search"
          placeholder="Search Creators and tags"
        ></el-input>
        <el-button>Become Member</el-button>
        <div class="notification-alerts">
          <img
            class="notification-icon"
            src="../../assets/notification-16x16@2x.png"
            alt=""
          />
          <div class="notification-alert"></div>
        </div>
        <div class="profile-avatar">
          <img
            @click="isProfileMenuVisible = !isProfileMenuVisible"
            class="member-avatar"
            src="../../assets/Ellipse-17.png"
            alt=""
          />
          <div v-if="isProfileMenuVisible" class="profile-menu">
            <p>Home</p>
            <p>Creator Profile</p>
            <p>Profile Setting</p>
            <p>Help centre & FAQ</p>
            <p>Log out</p>
          </div>
        </div>
      </div>
      <div
        @click="isSideMenuVisible = true"
        v-if="isMobileViewport"
        class="hamburger"
      >
        <span></span>
        <span></span>
        <span></span>
        <side-menu
          @closeSideMenu="isSideMenuVisible = $event"
          v-if="isSideMenuVisible"
        ></side-menu>
      </div>
    </base-container>
  </header>
  <el-dialog custom-class="locale" v-model="dialogVisible">
    <div class="header">
      <p>Choose your language</p>
    </div>
    <div class="body">
      <div
        @click="setLanguage('traditional')"
        :class="{ 'is-active': language === 'traditional' }"
        class="tab"
      >
        <p>繁體中文</p>
        <img src="../../assets/check-20x20@2x.png" alt="" />
      </div>
      <div
        @click="setLanguage('english')"
        :class="{ 'is-active': language === 'english' }"
        class="tab"
      >
        <p>English</p>
        <img src="../../assets/check-20x20@2x.png" alt="" />
      </div>
      <div
        @click="setLanguage('simplified')"
        :class="{ 'is-active': language === 'simplified' }"
        class="tab"
      >
        <p>日本語</p>
        <img src="../../assets/check-20x20@2x.png" alt="" />
      </div>
    </div>
    <div class="footer">
      <el-button @click="dialogVisible = false" class="cancel"
        >Cancel</el-button
      >
      <el-button @click="dialogVisible = false" class="save">Save</el-button>
    </div>
    <!-- <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template> -->
  </el-dialog>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import SideMenu from "./SideMenu.vue";

export default {
  components: {
    SideMenu,
  },
  data() {
    return {
      Search,
      isMobileViewport: false,
      window: {
        width: 0,
        height: 0,
      },
      dialogVisible: false,
      language: "english",
      isProfileMenuVisible: false,
      isSideMenuVisible: false,
    };
  },
  watch: {
    window: {
      deep: true,
      handler() {
        if (this.window.width <= 640) {
          this.isMobileViewport = true;
          console.log("same width");
        } else {
          this.isMobileViewport = false;
        }
      },
    },
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      console.log(this.window);
    },
    setLanguage(lang) {
      this.language = lang;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
.header {
  background-color: #fff;
  border-bottom: 1px solid rgba(207, 220, 229, 0.5);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header img {
  width: 6rem;
}

.header img.company-logo {
  cursor: pointer;
}

.header .search-bar {
  display: flex;
  align-items: center;
}

.header .search-bar img.language {
  width: 2rem;
  background-color: #ebf1f5;
  padding: 0.5rem;
  border-radius: 5rem;
  cursor: pointer;
}

.header .search-bar .notification-alerts {
  width: 1rem;
  position: relative;
  margin-left: 0.5rem;
}

.header .search-bar img.notification-icon {
  width: 100%;
}

.header .search-bar .notification-alert {
  position: absolute;
  background: #f03738;
  border: 2px solid #ffffff;
  right: 0;
  top: -1px;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
}

.header .search-bar .profile-avatar {
  margin-left: 0.5rem;
  position: relative;
}

.header .search-bar img.member-avatar {
  width: 2rem;
  cursor: pointer;
}

.header .search-bar .profile-avatar .profile-menu {
  background: #ffffff;
  box-shadow: 0px 2px 6px -4px rgba(16, 24, 41, 0.1),
    0px 10px 15px -3px rgba(16, 24, 41, 0.1);
  border-radius: 4px;
  position: absolute;
  padding: 1rem;
  left: -3rem;
  min-width: 12rem;
  z-index: 1;
  bottom: -14rem;
}

.header .search-bar .profile-avatar .profile-menu p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #525e66;
  font-variation-settings: "slnt" 0;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.header .search-bar .profile-avatar .profile-menu p:hover {
  padding-left: 0.3rem;
}

.header .search-bar .el-input {
  margin: 0 0.5rem;
  width: 20rem;
}

.header .search-bar .el-input .el-input__wrapper {
  padding: 0.2rem 0.5rem 0.2rem 0.625rem;
  border-radius: 5rem;
  background-color: #ebf1f5;
}

.header .search-bar .el-button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #ffffff;
  background: #0faaec;
  border-radius: 2.5rem;
  padding: 1.1rem 24px;
}

.header .hamburger span {
  width: 20px;
  height: 2px;
  background-color: #111;
  display: block;
  margin: 4px 0;
  border-radius: 6px;
}

.el-dialog.locale {
  width: 15rem;
}

.el-dialog.locale .el-dialog__headerbtn {
  display: none;
}

.el-dialog.locale .el-dialog__header,
.el-dialog.locale .el-dialog__body {
  padding: 0;
}

.el-dialog.locale .header,
.el-dialog.locale .body {
  padding: 1rem;
  border-bottom: 1px solid #cfdce6;
}

.el-dialog.locale .footer {
  padding: 1rem;
}

.el-dialog.locale .header p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #525e66;
  font-variation-settings: "slnt" 0;
}

.el-dialog.locale .body .tab {
  border: 1px solid #cfdce6;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.el-dialog.locale .body .tab.is-active {
  background: #525e66;
  border-color: #525e66;
}

.el-dialog.locale .body .tab:hover {
  background: #525e66;
  border-color: #525e66;
}

.el-dialog.locale .body .tab:hover p {
  color: #fff;
}

.el-dialog.locale .body .tab.is-active p {
  color: #fff;
}

.el-dialog.locale .body .tab p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #525e66;
}

.el-dialog.locale .body .tab img {
  width: 1.3rem;
  display: none;
}

.el-dialog.locale .body .tab.is-active img {
  display: block;
}

.el-dialog.locale .footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-dialog.locale .footer .el-button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  font-variation-settings: "slnt" 0;
  border-radius: 40px;
  padding: 0.5rem 1.5rem;
}

.el-dialog.locale .footer .el-button.cancel {
  background: linear-gradient(
      0deg,
      rgba(15, 170, 236, 0.15),
      rgba(15, 170, 236, 0.15)
    ),
    #ffffff;
  color: #0faaec;
}

.el-dialog.locale .footer .el-button.save {
  background: #0faaec;
  color: #fff;
}
</style>