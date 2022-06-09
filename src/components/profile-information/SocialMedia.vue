<template>
  <div class="profile-social-media">
    <div class="card">
      <el-row>
        <el-col :span="12">
          <h4>Social Media</h4>
        </el-col>
        <el-col :span="12">
          <div class="box">
            <div class="social-media-platform">
              <img src="../../assets/facebook-color@2x.png" alt="" />
              <p>Facebook</p>
            </div>
            <el-button class="link">Link</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.profile-social-media {
  margin: 2rem 0;
}

.profile-social-media .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
}

.profile-social-media .card h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 18px;
  line-height: 24px;
  color: #191919;
  font-variation-settings: "slnt" 0;
}

.profile-social-media .box {
  background: #ffffff;

  border: 1px solid #cfdce6;
  border-radius: 8px;
  padding: 1rem;
}
.profile-social-media .box,
.profile-social-media .box .social-media-platform {
  display: flex;
  align-items: center;
}

.profile-social-media .box {
  justify-content: space-between;
}

.profile-social-media .box img {
  width: 1.5rem;
}

.profile-social-media .box .social-media-platform p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
  margin-left: 0.5rem;
}

.profile-social-media .box .el-button.link {
  background: #0faaec;
  border-radius: 40px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  font-variation-settings: "slnt" 0;
}
</style>