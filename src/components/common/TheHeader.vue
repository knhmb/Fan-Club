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
      </div>
      <div v-if="isMobileViewport" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </base-container>
  </header>
  <el-dialog custom-class="locale" v-model="dialogVisible">
    <div class="header">
      <p>Choose your language</p>
    </div>
    <div class="body">
      <div class="tab">
        <p>繁體中文</p>
      </div>
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

export default {
  data() {
    return {
      Search,
      isMobileViewport: false,
      window: {
        width: 0,
        height: 0,
      },
      dialogVisible: false,
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
  width: 20rem;
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
}

.el-dialog.locale .body .tab p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #525e66;
}
</style>