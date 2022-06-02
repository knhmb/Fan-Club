<template>
  <div class="creator-post">
    <base-container>
      <el-row>
        <el-col class="hidden-sm-and-down" :span="21">
          <el-input
            v-model="input2"
            class="w-50 m-2"
            placeholder="Search posts"
            :prefix-icon="Search"
          />
        </el-col>
        <el-col class="sorting hidden-sm-and-down" :span="3">
          <el-select v-model="value" placeholder="Select">
            <el-option />
          </el-select>
          <img src="../../assets/sorting-20x20@2x.png" alt="" />
        </el-col>
      </el-row>
      <post-card></post-card>
    </base-container>
  </div>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import PostCard from "./PostCard.vue";

export default {
  components: {
    PostCard,
  },
  data() {
    return {
      Search,
      input2: "",
      value: "Newest",
    };
  },
};
</script>

<style scoped>
.creator-post {
  padding: 1rem 0;
  /* background-color: #cfdce6; */
  background-color: #f0f6fa;
}

.creator-post .el-input {
  width: 20rem;
}

.creator-post .el-select {
  width: 100%;
}

.creator-post .el-select :deep(.el-input__suffix) {
  display: none;
}

.creator-post .el-select :deep(.el-input__wrapper) {
  padding-left: 2.5rem;
}

.creator-post :deep(.el-input .el-input__wrapper) {
  background: #ffffff;
  border-radius: 8px;
}

.creator-post .el-col.sorting {
  position: relative;
}

.creator-post img {
  border: none;
  border-radius: 0;
  width: 1.5rem;
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>