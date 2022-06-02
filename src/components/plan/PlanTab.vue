<template>
  <div class="plan-tab">
    <base-container>
      <!-- <h3>Select a membership level</h3> -->
      <el-row :gutter="20">
        <el-col :sm="12" :md="8">
          <div class="plan-card">
            <p class="plan-name">Plan name - Level 1</p>
            <img src="../../assets/plan01@2x.jpg" alt="" />
            <p class="price">HKD 300</p>
            <p>PER MONTH</p>
            <el-button>Join</el-button>
            <p class="save">or save 10% if you pay annually</p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque vel varius ac massa iaculis arcu lorem enim. Mi ut
              neque egestas nunc. Platea et amet mauris, at ultricies
              pellentesque lectus in. Tellus nulla ultricies nulla natoque lorem
              porttitor. Elementum elementum enim mi nunc scelerisque ridiculus
              venenatis. Habitasse pulvinar vel senectus
            </p>
            <p class="show-more">Show more</p>
            <!-- <div class="hide-text">jhdkfhjsd</div> -->
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="plan-card">
            <p class="plan-name">Plan name - Level 2</p>
            <img src="../../assets/plan02@2x.jpg" alt="" />
            <p class="price">HKD 600</p>
            <p>PER MONTH</p>
            <el-button>Join</el-button>
            <p class="save">or save 10% if you pay annually</p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque vel varius ac massa iaculis arcu lorem enim. Mi ut
              neque egestas nunc. Platea et amet mauris, at ultricies
              pellentesque lectus in. Tellus nulla ultricies nulla natoque lorem
              porttitor. Elementum elementum enim mi nunc scelerisque ridiculus
              venenatis. Habitasse pulvinar vel senectus
            </p>
            <p class="show-more">Show more</p>
            <!-- <div class="hide-text">jhdkfhjsd</div> -->
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="plan-card">
            <p class="plan-name">Plan name - Level 3</p>
            <img src="../../assets/plan03@2x.jpg" alt="" />
            <p class="price">HKD 900</p>
            <p>PER MONTH</p>
            <el-button>Join</el-button>
            <p class="save">or save 10% if you pay annually</p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque vel varius ac massa iaculis arcu lorem enim. Mi ut
              neque egestas nunc. Platea et amet mauris, at ultricies
              pellentesque lectus in. Tellus nulla ultricies nulla natoque lorem
              porttitor. Elementum elementum enim mi nunc scelerisque ridiculus
              venenatis. Habitasse pulvinar vel senectus
            </p>
            <p class="show-more">Show more</p>
            <!-- <div class="hide-text">jhdkfhjsd</div> -->
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="plan-card">
            <p class="plan-name">Plan name - Level 4</p>
            <img src="../../assets/plan04@2x.jpg" alt="" />
            <p class="price">HKD 1500</p>
            <p>PER MONTH</p>
            <el-button>Join</el-button>
            <p class="save">or save 10% if you pay annually</p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque vel varius ac massa iaculis arcu lorem enim. Mi ut
              neque egestas nunc. Platea et amet mauris, at ultricies
              pellentesque lectus in. Tellus nulla ultricies nulla natoque lorem
              porttitor. Elementum elementum enim mi nunc scelerisque ridiculus
              venenatis. Habitasse pulvinar vel senectus
            </p>
            <p class="show-more">Show more</p>
            <!-- <div class="hide-text">jhdkfhjsd</div> -->
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="plan-card">
            <p class="plan-name">Plan name - Level 5</p>
            <img src="../../assets/plan05@2x.jpg" alt="" />
            <p class="price">HKD 2000</p>
            <p>PER MONTH</p>
            <el-button>Join</el-button>
            <p class="save">or save 10% if you pay annually</p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque vel varius ac massa iaculis arcu lorem enim. Mi ut
              neque egestas nunc. Platea et amet mauris, at ultricies
              pellentesque lectus in. Tellus nulla ultricies nulla natoque lorem
              porttitor. Elementum elementum enim mi nunc scelerisque ridiculus
              venenatis. Habitasse pulvinar vel senectus
            </p>
            <p class="show-more">Show more</p>
            <!-- <div class="hide-text">jhdkfhjsd</div> -->
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="plan-card">
            <p class="plan-name">Plan name - Level 6</p>
            <img src="../../assets/plan06@2x.jpg" alt="" />
            <p class="price">HKD 4000</p>
            <p>PER MONTH</p>
            <el-button>Join</el-button>
            <p class="save">or save 10% if you pay annually</p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque vel varius ac massa iaculis arcu lorem enim. Mi ut
              neque egestas nunc. Platea et amet mauris, at ultricies
              pellentesque lectus in. Tellus nulla ultricies nulla natoque lorem
              porttitor. Elementum elementum enim mi nunc scelerisque ridiculus
              venenatis. Habitasse pulvinar vel senectus
            </p>
            <p class="show-more">Show more</p>
            <!-- <div class="hide-text">jhdkfhjsd</div> -->
          </div>
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<style scoped>
.plan-tab {
  padding: 1rem 0;
  background-color: #cfdce6;
  /* margin-top: 1rem; */
}

.plan-tab .el-col {
  margin-bottom: 1rem;
}

.plan-tab h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #292929;
  text-align: center;
  margin-bottom: 5rem;
}

.plan-tab .plan-card {
  border: 1px solid #cfdce6;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background: #fff;
}

.plan-tab .plan-card p.plan-name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #292929;
  margin-bottom: 1rem;
}

.plan-tab .plan-card img {
  width: 100%;
  border-radius: 8px;
}

.plan-tab .plan-card p.price {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  font-feature-settings: "liga" off;
  color: #292929;
  margin: 0.5rem 0;
}

.plan-tab .plan-card p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  font-feature-settings: "liga" off;
  color: #6f6f6f;
}

.plan-tab .plan-card .el-button {
  background: #0faaec;
  border-radius: 80px;
  width: 60%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #ffffff;
  padding: 1.2rem;
  margin-top: 0.5rem;
}

.plan-tab .plan-card p.save {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #0faaec;
  text-decoration: underline;
  margin-top: 0.5rem;
}

.plan-tab .plan-card p.description {
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  margin-top: 1rem;
}

.plan-tab .plan-card p.description:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(
    0deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.5) 51.56%,
    rgba(217, 217, 217, 0) 100%,
    rgba(255, 255, 255, 0) 100%
  );
}

.plan-tab .plan-card p.show-more {
  background: none;
  border: none;
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #0faaec;
  border-bottom: 1px solid #0faaec;
  border-radius: 0;
  width: fit-content;
  margin: 0 auto;
}

.plan-tab .plan-card p.show-more:hover {
  cursor: pointer;
}
</style>