<template>
  <div class="post-card-info">
    <el-row>
      <el-col :span="12">
        <img
          :class="{ 'avatar-hidden': hideAvatar }"
          src="../../assets/creator01@2x.jpg"
          class="post-img"
          alt=""
        />
        <div class="content">
          <h5 :class="{ 'avatar-hidden': hideAvatar }">Ronald Richards</h5>
          <p>2022-05-24 16:30</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="plan-name">
          <p v-if="!hideAvatar">Plan name - Level 2</p>
          <p v-else>Public</p>
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
      <el-col v-if="hideAvatar">
        <p class="hidden-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          fringilla eu lobortis aliquet mauris. Proin non, mauris tincidunt sed.
          Ante non, est eget justo. Nisl, fermentum tellus non id lacus.
          Felis...
        </p>
        <p class="read-more">Continue reading</p>
      </el-col>
      <el-col class="share-media" v-if="hideAvatar">
        <div class="icons">
          <img src="../../assets/like-outline-16x16@2x.png" alt="" />
          <img src="../../assets/share-20x20@2x.png" alt="" />
          <div class="icon-more-content">
            <img
              @click="displayMoreOptions"
              src="../../assets/more@2x.png"
              alt=""
            />
            <div v-if="showMoreOptions" class="more-options">
              <div class="option">
                <img src="../../assets/link@2x.png" alt="" />
                <p>Copy post link</p>
              </div>
              <div class="option">
                <img src="../../assets/facebook-color@2x.png" alt="" />
                <p>Facebook</p>
              </div>
              <div class="option">
                <img src="../../assets/twitter-color@2x.png" alt="" />
                <p>Twitter</p>
              </div>
            </div>
          </div>
        </div>
        <p class="likes">321 Like</p>
      </el-col>
      <el-col v-if="hideAvatar">
        <more-comments></more-comments>
      </el-col>
      <el-col class="plan-list" v-if="!hideAvatar">
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

<script>
import MoreComments from "./MoreComments.vue";

export default {
  props: ["hideAvatar"],
  components: {
    MoreComments,
  },
  data() {
    return {
      showMoreOptions: false,
    };
  },
  methods: {
    displayMoreOptions() {
      this.showMoreOptions = !this.showMoreOptions;
    },
  },
};
</script>

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
  border-radius: 100%;
}

.post-card-info img.avatar-hidden {
  display: none;
}

.plan .post-card-info .el-row .el-col {
  text-align: start;
}

.plan .post-card-info .el-row .el-col:nth-of-type(2) {
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

.post-card-info .content h5.avatar-hidden {
  display: none;
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
  width: fit-content;
  margin-left: auto;
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

.post-card-info .pill p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #525e66;
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

.post-card-info p.hidden-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #191919;
  margin: 1rem 0;

  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}

.post-card-info p.hidden-text::after {
  content: "";
  position: absolute;
  background: linear-gradient(
    0deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.5) 51.56%,
    rgba(217, 217, 217, 0) 100%,
    rgba(255, 255, 255, 0) 100%
  );
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
}

.post-card-info p.read-more {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0faaec;
  cursor: pointer;
  margin-top: 0.5rem;
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

.post-card-info .share-media {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.post-card-info .icons {
  position: relative;
}

.post-card-info .icons img {
  width: 1.3rem;
  cursor: pointer;
}

.post-card-info .icons img:nth-of-type(2) {
  margin: 0 1.5rem;
}

.post-card-info p.likes {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #616161;
  font-variation-settings: "slnt" 0;
}

.post-card-info .icon-more-content {
  display: inline-block;
  /* position: relative; */
}

.post-card-info .icon-more-content .more-options {
  background: #ffffff;
  box-shadow: 0px 2px 6px -4px rgba(16, 24, 41, 0.1),
    0px 10px 15px -3px rgba(16, 24, 41, 0.1);
  border-radius: 4px;
  padding: 1rem;
  position: absolute;
  left: 50%;
  min-width: 11rem;
  top: 1.7rem;
  z-index: 1;
  transform: translateX(-50%);
}

.post-card-info .icon-more-content .more-options {
  display: flex;
  flex-direction: column;
}

.post-card-info .icon-more-content .more-options .option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.post-card-info .icon-more-content .more-options .option:nth-of-type(2) {
  margin: 1.5rem 0;
}

.post-card-info .icon-more-content .more-options .option img {
  width: 1.2rem;
  margin-right: 0.5rem;
}

.post-card-info .icon-more-content .more-options .option p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #525e66;
  font-variation-settings: "slnt" 0;
}

@media screen and (max-width: 715px) {
  /* .post-card-info img.post-img,
  .post-card-info h5 {
    display: none;
  } */

  .post-card-info .content h5 {
    font-size: 12px;
  }

  .post-card-info .content p {
    font-size: 10px;
  }

  .post-card-info .el-col.plan-list .plan-list-content .left-section p {
    padding-right: 0.2rem;
  }
}
</style>