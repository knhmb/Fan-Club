<template>
  <div class="home-member-right-section">
    <div class="tabs-content">
      <div class="all-tabs">
        <div
          @click="setIsActive('all posts')"
          :class="{ 'is-active': currentOption === 'all posts' }"
          class="tab"
        >
          <p>All Posts</p>
        </div>
        <div
          @click="setIsActive('fans posts')"
          :class="{ 'is-active': currentOption === 'fans posts' }"
          class="tab"
        >
          <p @click="setIsActive('fans posts')">Fans Only Posts</p>
        </div>
      </div>

      <el-select
        class="hidden-sm-and-down"
        :model-value="`Showing: ${value}`"
        placeholder="Select"
      >
        <el-option />
      </el-select>
    </div>
    <all-posts v-if="currentOption === 'all posts'"></all-posts>
  </div>
</template>

<script>
import AllPosts from "./AllPosts.vue";

export default {
  components: {
    AllPosts,
  },
  data() {
    return {
      value: "All Creators",
      currentOption: "all posts",
    };
  },
  methods: {
    setIsActive(option) {
      this.currentOption = option;
    },
  },
};
</script>

<style scoped>
.home-member-right-section .tabs-content {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #cfdce6;
  display: flex;
  justify-content: space-between;
}

.home-member-right-section .tabs-content div.tab {
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: relative;
  width: fit-content;
}

.home-member-right-section .tabs-content .all-tabs {
  display: flex;
  align-items: center;
  position: relative;
}

.home-member-right-section .tabs-content p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #525e66;
  font-variation-settings: "slnt" 0;
  cursor: pointer;
  position: relative;
}

.home-member-right-section .tabs-content div.tab.is-active::after {
  content: "";
  position: absolute;
  background-color: #0faaec;
  width: 100%;
  left: 0;
  bottom: -1rem;
  height: 3px;
}

.home-member-right-section .tabs-content div.tab.is-active p {
  color: #0faaec;
}

@media screen and (max-width: 991px) {
  .home-member-right-section .tabs-content div.tab.is-active::after {
    bottom: -0.5rem;
  }
}
</style>