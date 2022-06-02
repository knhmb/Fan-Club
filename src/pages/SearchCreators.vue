<template>
  <section class="search-creators">
    <base-container>
      <h5>Search results for “illustrator”</h5>
      <div class="tab-content">
        <div
          @click="setTabOption('creators')"
          class="single-tab"
          :class="{ 'is-active': tabOption === 'creators' }"
        >
          <p>Creators</p>
          <div class="pill">
            <p>12 results</p>
          </div>
        </div>

        <div
          @click="setTabOption('tags')"
          class="single-tab"
          :class="{ 'is-active': tabOption === 'tags' }"
        >
          <p>Tags</p>
          <div class="pill">
            <p>8 results</p>
          </div>
        </div>
      </div>
      <Creators v-if="tabOption === 'creators'" />
      <Tags v-if="tabOption === 'tags'" />
    </base-container>
  </section>
</template>

<script>
import Creators from "../components/search-creators/Creators.vue";
import Tags from "../components/search-creators/Tags.vue";

export default {
  components: {
    Creators,
    Tags,
  },
  data() {
    return {
      tabOption: "creators",
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
.search-creators {
  background-color: #f0f6fa;
  padding: 2rem 0;
}

.search-creators h5 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 20px;
  line-height: 28px;
  color: #929292;
  font-variation-settings: "slnt" 0;
  margin-bottom: 2rem;
}

.search-creators .tab-content {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(207, 220, 230, 0.5);
  padding-bottom: 1rem;
  padding-left: 1rem;
}

.search-creators .single-tab {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.search-creators .single-tab.is-active::after {
  content: "";
  position: absolute;
  left: calc(50% - 1rem);
  bottom: -1rem;
  background: #0faaec;
  width: 100%;
  height: 3px;
  transform: translateX(-50%);
}

.search-creators .single-tab.is-active p {
  color: #0faaec;
}

.search-creators .single-tab.is-active .pill p {
  color: #525e66;
}

.search-creators .tab-content p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #525e66;
  font-variation-settings: "slnt" 0;
}

.search-creators .tab-content .pill {
  background: rgba(207, 220, 230, 0.5);
  border-radius: 72px;
  padding: 0.1rem 0.6rem;
  margin-left: 0.5rem;
}

.search-creators .tab-content .pill:first-of-type {
  margin-right: 3rem;
}

.search-creators .tab-content .pill p {
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
}

@media screen and (max-width: 385px) {
  .search-creators .tab-content .pill {
    padding: 0.1rem 0.3rem;
  }
}
</style>