<template>
  <div class="profile-social-media">
    <div class="card">
      <el-row>
        <el-col :sm="24" :md="12">
          <h4>Social Media</h4>
        </el-col>
        <el-col :sm="24" :md="12">
          <div class="box">
            <div class="social-media-platform">
              <img src="../../assets/facebook-color@2x.png" alt="" />
              <p>Facebook</p>
            </div>
            <el-button class="link">Link</el-button>
          </div>
          <div class="box">
            <div class="social-media-platform">
              <img src="../../assets/instagram-color@2x.png" alt="" />
              <p>Instagram</p>
            </div>
            <el-button class="link">Link</el-button>
          </div>
          <div class="box">
            <div class="social-media-platform">
              <img src="../../assets/youtube-color@2x.png" alt="" />
              <p>Youtube</p>
            </div>
            <el-button class="link">Link</el-button>
          </div>
          <div class="box">
            <div class="social-media-platform">
              <img src="../../assets/twitter-color@2x.png" alt="" />
              <div class="content">
                <p>Twitter</p>
                <p class="link">https://twitter.com/chantaiman</p>
              </div>
            </div>
            <el-button class="unlink">Unlink</el-button>
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
  margin-bottom: 1.5rem;
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

.profile-social-media .box .el-button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #313131;
  font-variation-settings: "slnt" 0;
}

.profile-social-media .box .el-button.link {
  background: #0faaec;
  border-radius: 40px;
  color: #ffffff;
}

.profile-social-media .box .el-button.unlink {
  background: #ffffff;
  border: 1px solid #525e66;
  border-radius: 40px;
}

.profile-social-media .box .content p.link {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #929292;
}

@media screen and (max-width: 991px) {
  .profile-social-media .card h4 {
    margin-bottom: 2rem;
  }
}
</style>