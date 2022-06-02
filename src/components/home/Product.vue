<template>
  <section class="featured-products">
    <base-container>
      <h3>Featured Product</h3>
      <el-row :gutter="20">
        <el-col :sm="12" :md="6">
          <div class="card">
            <img src="../../assets/product01@2x.jpg" alt="" />
            <div class="content">
              <h5>Product name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="price"><span>HKD</span>78</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="12" :md="6">
          <div class="card">
            <img src="../../assets/product02@2x.jpg" alt="" />
            <div class="content">
              <h5>Product name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="price"><span>HKD</span>78</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="12" :md="6">
          <div class="card">
            <img src="../../assets/product03@2x.jpg" alt="" />
            <div class="content">
              <h5>Product name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="price"><span>HKD</span>78</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="12" :md="6">
          <div class="card">
            <img src="../../assets/product04@2x.jpg" alt="" />
            <div class="content">
              <h5>Product name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="price"><span>HKD</span>78</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="12" :md="6">
          <div class="card">
            <img src="../../assets/product04@2x.jpg" alt="" />
            <div class="content">
              <h5>Product name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="price"><span>HKD</span>78</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="12" :md="6">
          <div class="card">
            <img src="../../assets/product03@2x.jpg" alt="" />
            <div class="content">
              <h5>Product name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="price"><span>HKD</span>78</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="12" :md="6">
          <div class="card">
            <img src="../../assets/product02@2x.jpg" alt="" />
            <div class="content">
              <h5>Product name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="price"><span>HKD</span>78</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="12" :md="6">
          <div class="card">
            <img src="../../assets/product01@2x.jpg" alt="" />
            <div class="content">
              <h5>Product name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="price"><span>HKD</span>78</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.featured-products {
  padding: 3rem 0;
}

.featured-products h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #292929;
  text-align: center;
  margin-bottom: 4rem;
}

.featured-products .el-col {
  margin-bottom: 1.5rem;
}

.featured-products img {
  width: 100%;
  border-radius: 1rem;
}

.featured-products h5 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}

.featured-products p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #525252;
  margin-top: 0.5rem;
}

.featured-products .price {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #292929;
  margin-top: 1rem;
}

.featured-products .price span {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
</style>