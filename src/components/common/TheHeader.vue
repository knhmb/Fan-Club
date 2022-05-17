<template>
  <header class="header">
    <base-container>
      <img src="../../assets/brand-logo-with-text@2x.png" alt="" />
      <div v-if="!isMobileViewport" class="search-bar">
        <img class="language" src="../../assets/language.svg" alt="" />
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

.header .search-bar {
  display: flex;
  align-items: center;
}

.header .search-bar img.language {
  width: 2rem;
  background-color: #ebf1f5;
  padding: 0.5rem;
  border-radius: 5rem;
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
  font-family: "PingFang HK";
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
</style>