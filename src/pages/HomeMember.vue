<template>
  <section class="home-member">
    <base-container>
      <el-row :gutter="20">
        <el-col :span="7" class="hidden-sm-and-down">
          <div class="card">
            <div class="img-content">
              <img src="../assets/Ellipse-17.png" alt="" />
              <p class="profile-name">Chan Tai Man</p>
            </div>
            <Supporting />
            <Following />
          </div>
        </el-col>
        <el-col :sm="24" :md="17">
          <right-section></right-section>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import Supporting from "../components/home-member/Supporting.vue";
import Following from "../components/home-member/Following.vue";
import RightSection from "../components/home-member/RightSection.vue";

export default {
  components: {
    Supporting,
    Following,
    RightSection,
  },
};
</script>

<style scoped>
.home-member {
  padding: 2rem 0;
  background-color: #f0f6fa;
}

.home-member .card {
  background: #ffffff;
  border-radius: 8px;
  /* border-bottom: 1px solid #cfdce6; */
}

.home-member .card .img-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}

.home-member .card .img-content img {
  width: 4rem;
}

.home-member .card .img-content p.profile-name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #292929;
  margin-top: 1rem;
}
</style>