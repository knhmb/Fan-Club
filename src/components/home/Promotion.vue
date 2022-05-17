<template>
  <section class="promotion">
    <base-container>
      <el-row :gutter="15">
        <el-col :sm="24" :md="8">
          <img src="../../assets/promotion@2x.jpg" alt="" />
        </el-col>
        <el-col :sm="24" :md="8">
          <img src="../../assets/promotion@2x.jpg" alt="" />
        </el-col>
        <el-col :sm="24" :md="8">
          <img src="../../assets/promotion@2x.jpg" alt="" />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.promotion {
  padding: 8rem 0 3rem 0;
}

.promotion img {
  width: 100%;
  border-radius: 0.5rem;
}
</style>