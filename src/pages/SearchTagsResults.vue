<template>
  <section class="search-tags-results">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="17">
          <h5>#illustrator</h5>
          <div class="pill">
            <p>15 results</p>
          </div>
        </el-col>
        <el-col :sm="24" :md="17">
          <p>15 results for the tag #illustrator among all Creators' posts.</p>
        </el-col>
        <el-col :sm="24" :md="17">
          <Results />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import Results from "../components/search-tags-results/Results.vue";

export default {
  components: {
    Results,
  },
};
</script>

<style scoped>
.search-tags-results {
  padding: 2rem 0;
  background-color: #f0f6fa;
}

.search-tags-results .el-row {
  justify-content: center;
}

.search-tags-results .el-row .el-col:first-of-type {
  display: flex;
  align-items: center;
}

.search-tags-results h5 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 20px;
  line-height: 28px;
  color: #929292;
  font-variation-settings: "slnt" 0;
}

.search-tags-results .pill {
  background: rgba(207, 220, 230, 0.5);
  border-radius: 72px;
  padding: 0.2rem 0.5rem;
  margin-left: 0.5rem;
}

.search-tags-results .pill p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: #525e66;
  margin: 0;
}

.search-tags-results p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #616161;
  margin-top: 1rem;
}
</style>