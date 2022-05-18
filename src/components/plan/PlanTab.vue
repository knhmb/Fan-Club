<template>
  <div class="plan-tab">
    <base-container>
      <h3>Select a membership level</h3>
      <el-row>
        <el-col :sm="12" :md="6">
          <div class="plan-card">
            <p class="plan-name">Plan name - Level 1</p>
            <img src="../../assets/plan01@2x.jpg" alt="" />
            <p class="price">HKD 300</p>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<style scoped>
.plan-tab {
  padding: 3rem 0;
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
}

.plan-tab .plan-card {
  border: 1px solid #cfdce6;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

.plan-tab .plan-card p.plan-name {
  font-family: "PingFang HK";
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
}
</style>