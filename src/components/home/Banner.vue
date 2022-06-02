<template>
  <section class="banner">
    <base-container>
      <el-row>
        <el-col :sm="12" :md="12">
          <h3>Lorem ipsum dolor sit amet consectetur</h3>
          <p>
            Let your most passionate fans support your creative work via monthly
            membership.
          </p>
          <el-button>Get Started</el-button>
        </el-col>
        <el-col :sm="12" :md="11">
          <img src="../../assets/hero-creator@2x.jpg" alt="" />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.banner {
  background-color: #f3f9fe;
  padding: 3rem 0 0rem 0;
}

.banner h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2.625rem;
  line-height: 3.1875rem;
  letter-spacing: -0.02em;
  color: #0faaec;
}

.banner p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 2rem;
  font-feature-settings: "liga" off;
  color: #393939;
  margin: 1rem 0;
}

.banner .el-button {
  background: #0faaec;
  border-radius: 5rem;
  padding: 1.2rem 2.5rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #ffffff;
}

.banner img {
  width: 100%;
  box-shadow: 0px 24px 240px rgba(15, 170, 236, 0.12);
  border-radius: 8rem 8rem 8rem 10.625rem;
  margin-bottom: -5.5rem;
}

@media screen and (max-width: 767px) {
  .banner img {
    margin-top: 2rem;
  }
}
</style>