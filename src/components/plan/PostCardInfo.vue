<template>
  <div class="post-card-info">
    <el-row>
      <el-col :span="12">
        <img src="../../assets/creator01@2x.jpg" alt="" />
        <div class="content">
          <h5>Ronald Richards</h5>
          <p>2022-05-24 16:30</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="plan-name">
          <p>Plan name - Level 2</p>
        </div>
      </el-col>
      <el-col class="pills">
        <div class="pill">
          <p>Writing</p>
        </div>
        <div class="pill">
          <p>Podcast</p>
        </div>
        <div class="pill">
          <p>Music</p>
        </div>
      </el-col>
      <el-col>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Tincidunt
          fringilla eu lobortis aliquet mauris.
        </p>
      </el-col>
      <el-col class="plan-list">
        <div class="plan-list-content">
          <div class="left-section">
            <img src="../../assets/lock@2x.png" alt="" />
            <p>Pledge HKD 600/month or more to see this content</p>
          </div>
          <el-button>Plan list</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.post-card-info {
  margin-top: 1rem;
}

.post-card-info .el-row .el-col:first-of-type {
  display: flex;
  align-items: center;
}

.post-card-info img {
  width: 3rem;
  border: none;
  margin: 0;
}

.plan .post-card-info .el-row .el-col {
  text-align: start;
}

.plan .post-card-info .el-row .el-col:nth-of-type(2) {
  display: flex;
  justify-content: flex-end;
}

.post-card-info .content {
  margin-left: 0.5rem;
}

.post-card-info .content h5 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
}

.post-card-info .content p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #616161;
}

.post-card-info .plan-name {
  background: #f3f3f3;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
}

.post-card-info .plan-name p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #616161;
}

.post-card-info .el-col.pills {
  display: flex;
}

.post-card-info .pill {
  background: #ffffff;
  border: 1px solid #cfdce6;
  border-radius: 40px;
  padding: 0.3rem 1rem;
  width: fit-content;
  margin-top: 1rem;
}

.post-card-info .pill:nth-of-type(2) {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.post-card-info p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #191919;
  margin-top: 2rem;
}

.post-card-info .el-col.plan-list .plan-list-content {
  background: #f3f3f3;
  border-radius: 4px;
  padding: 0.5rem;
  margin-top: 1.5rem;
}

.post-card-info .el-col.plan-list .plan-list-content .left-section,
.post-card-info .el-col.plan-list .plan-list-content {
  display: flex;
  align-items: center;
}

.post-card-info .el-col.plan-list .plan-list-content {
  justify-content: space-between;
}

.post-card-info .el-col.plan-list .plan-list-content .left-section img {
  width: 1.5rem;
  border: none;
  border-radius: 0;
  margin-right: 0.5rem;
}

.post-card-info .el-col.plan-list .plan-list-content .left-section p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #616161;
}
.post-card-info .el-col.plan-list .plan-list-content .el-button {
  background: #0faaec;
  border-radius: 40px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  padding: 1rem;
}
</style>