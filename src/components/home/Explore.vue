<template>
  <section class="explore">
    <base-container>
      <h3>Explore creators</h3>
      <el-row>
        <el-col>
          <el-carousel
            trigger="click"
            :autoplay="false"
            pause-on-hover
            height="45px"
          >
            <el-carousel-item v-for="item in 4" :key="item">
              <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
              <el-row justify="space-between">
                <el-col :span="2">
                  <div class="pill">{{ item }}</div>
                </el-col>
                <el-col :span="2">
                  <div class="pill">{{ item }}</div>
                </el-col>
                <el-col :span="2">
                  <div class="pill">{{ item }}</div>
                </el-col>
                <el-col :span="2">
                  <div class="pill">{{ item }}</div>
                </el-col>
                <el-col :span="2">
                  <div class="pill">{{ item }}</div>
                </el-col>
                <el-col :span="2">
                  <div class="pill">{{ item }}</div>
                </el-col>
                <el-col :span="2">
                  <div class="pill">{{ item }}</div>
                </el-col>
                <el-col :span="2">
                  <div class="pill">{{ item }}</div>
                </el-col>
              </el-row>
              <!-- <div class="pill">{{ item }}</div>
              <div class="pill">{{ item }}</div>
              <div class="pill">{{ item }}</div>
              <div class="pill">{{ item }}</div> -->
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style>
.explore {
  padding: 3rem 0;
}

.explore h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2.75rem;
  line-height: 3.25rem;
  letter-spacing: -0.02em;
  color: #292929;
  text-align: center;
}

.explore .pill {
  width: 106px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #cfdce6;
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.explore .el-carousel .el-carousel__item {
  display: flex;
  justify-content: center;
}
</style>