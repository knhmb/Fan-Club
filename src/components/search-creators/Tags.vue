<template>
  <div class="tags-tab">
    <el-row :gutter="20">
      <el-col v-for="name in names" :key="name" :xs="24" :sm="12">
        <div class="card">
          <p>{{ name }}</p>
          <div class="pill">
            <p>15 results</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: [
        "illustrator",
        "illustrator_12",
        "illustrator_123131",
        "1231_illustrator",
        "illustrator_creator",
        "illustrator_study",
        "illustratorscheme",
        "illustrator_online",
      ],
    };
  },
};
</script>

<style scoped>
.tags-tab {
  margin-top: 1.5rem;
}

.tags-tab .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.tags-tab .card p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #0faaec;
}

.tags-tab .card .pill {
  background: rgba(207, 220, 230, 0.5);
  border-radius: 72px;
  padding: 0.2rem 0.6rem;
}

.tags-tab .card .pill p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: #525e66;
}
</style>