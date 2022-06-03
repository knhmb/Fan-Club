<template>
  <div class="post-card-info-detail">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus
          urna consectetur sed enim eget fames morbi ut. Quis pretium vel, eget
          magna hendrerit. Enim iaculis morbi feugiat diam, non id bibendum
          vulputate suscipit. Pulvinar ut nunc gravida et quis ac pharetra.
          Suspendisse aliquam tristique non mi. Non tellus libero sed
          ullamcorper suspendisse. Pulvinar tellus et mi mi. Adipiscing sed quam
          sed massa elementum. At non amet morbi quam nullam pharetra sapien. Mi
          faucibus condimentum mi sapien enim. Netus maecenas fermentum amet,
          viverra nullam elementum nulla. Sed adipiscing porttitor morbi
          imperdiet felis tempor commodo, curabitur nullam. Sit risus a risus
          urna dignissim viverra.
        </p>
        <p class="hidden-text">
          Mattis ultricies varius nisl eu amet aliquet. Aliquet tellus, fusce
          accumsan, luctus mollis. Ultrices fermentum pellentesque amet nunc.
          Interdum in nulla quam mattis ac ultrices. Diam eu urna lectus et
          posuere vitae arcu diam scelerisque. Sed sagittis, dui interdum et eu
          pharetra in eget vitae. Turpis ac, sed rhoncus sem eu in mattis nisl.
          A, dis at ultricies lacus nisl interdum. Est fermentum, vitae sit
          pellentesque porta. Placerat bibendum et pretium lorem eget tellus,
          vel senectus ac. Vel pulvinar ac condimentum turpis diam. Imperdiet
          morbi magna pulvinar pharetra nunc scelerisque adipiscing amet.
          Sollicitudin venenatis curabitur in morbi viverra at sed. Risus
          pellentesque ullamcorper at ullamcorper. Scelerisque parturient velit
          pellentesque donec convallis ut et maecenas.
        </p>
        <p class="hidden-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus
          urna consectetur sed enim eget fames morbi ut. Quis pretium vel, eget
          magna hendrerit. Enim iaculis morbi feugiat diam, non id bibendum
          vulputate suscipit. Pulvinar ut nunc gravida et quis ac pharetra.
          Suspendisse aliquam tristique non mi. Non tellus libero sed
          ullamcorper suspendisse. Pulvinar tellus et mi mi. Adipiscing sed quam
          sed massa elementum. At non amet morbi quam nullam pharetra sapien. Mi
          faucibus condimentum mi sapien enim. Netus maecenas fermentum amet,
          viverra nullam elementum nulla. Sed adipiscing porttitor morbi
          imperdiet felis tempor commodo, curabitur nullam. Sit risus a risus
          urna dignissim viverra.
        </p>
        <!-- <p class="read-more">Continue reading</p> -->
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
.post-card-info-detail {
  margin-top: 1rem;
}

.post-card-info-detail .el-row .el-col:first-of-type {
  display: flex;
  align-items: center;
}

.post-card-info-detail img {
  width: 3rem;
  border: none;
  margin: 0;
  border-radius: 100%;
}

.post-card-info-detail img.avatar-hidden {
  display: none;
}

.plan .post-card-info-detail .el-row .el-col {
  text-align: start;
}

.plan .post-card-info-detail .el-row .el-col:nth-of-type(2) {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.post-card-info-detail .content {
  margin-left: 0.5rem;
}

.post-card-info-detail .content h5 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
}

.post-card-info-detail .content h5.avatar-hidden {
  display: none;
}

.post-card-info-detail .content p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #616161;
}

.post-card-info-detail .plan-name {
  background: #f3f3f3;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
  width: fit-content;
  margin-left: auto;
}

.post-card-info-detail .plan-name p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #616161;
}

.post-card-info-detail .el-col.pills {
  display: flex;
}

.post-card-info-detail .pill {
  background: #ffffff;
  border: 1px solid #cfdce6;
  border-radius: 40px;
  padding: 0.3rem 1rem;
  width: fit-content;
  margin-top: 1rem;
}

.post-card-info-detail .pill p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #525e66;
}

.post-card-info-detail .pill:nth-of-type(2) {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.post-card-info-detail p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #191919;
  margin-top: 2rem;
}

.post-card-info-detail p.hidden-text {
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

/* .post-card-info-detail p.hidden-text::after {
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
} */

/* .post-card-info-detail p.read-more {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0faaec;
  cursor: pointer;
  margin-top: 0.5rem;
} */

.post-card-info-detail .el-col.plan-list .plan-list-content {
  background: #f3f3f3;
  border-radius: 4px;
  padding: 0.5rem;
  margin-top: 1.5rem;
}

.post-card-info-detail .el-col.plan-list .plan-list-content .left-section,
.post-card-info-detail .el-col.plan-list .plan-list-content {
  display: flex;
  align-items: center;
}

.post-card-info-detail .el-col.plan-list .plan-list-content {
  justify-content: space-between;
}

.post-card-info-detail .el-col.plan-list .plan-list-content .left-section img {
  width: 1.5rem;
  border: none;
  border-radius: 0;
  margin-right: 0.5rem;
}

.post-card-info-detail .el-col.plan-list .plan-list-content .left-section p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #616161;
}
.post-card-info-detail .el-col.plan-list .plan-list-content .el-button {
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

.post-card-info-detail .share-media {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.post-card-info-detail .icons {
  position: relative;
}

.post-card-info-detail .icons img {
  width: 1.3rem;
  cursor: pointer;
}

.post-card-info-detail .icons img:nth-of-type(2) {
  margin: 0 1.5rem;
}

.post-card-info-detail p.likes {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #616161;
  font-variation-settings: "slnt" 0;
}

.post-card-info-detail .icon-more-content {
  display: inline-block;
  /* position: relative; */
}

.post-card-info-detail .icon-more-content .more-options {
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

.post-card-info-detail .icon-more-content .more-options {
  display: flex;
  flex-direction: column;
}

.post-card-info-detail .icon-more-content .more-options .option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.post-card-info-detail .icon-more-content .more-options .option:nth-of-type(2) {
  margin: 1.5rem 0;
}

.post-card-info-detail .icon-more-content .more-options .option img {
  width: 1.2rem;
  margin-right: 0.5rem;
}

.post-card-info-detail .icon-more-content .more-options .option p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #525e66;
  font-variation-settings: "slnt" 0;
}

@media screen and (max-width: 715px) {
  /* .post-card-info-detail img.post-img,
  .post-card-info-detail h5 {
    display: none;
  } */

  .post-card-info-detail .content h5 {
    font-size: 12px;
  }

  .post-card-info-detail .content p {
    font-size: 10px;
  }

  .post-card-info-detail .el-col.plan-list .plan-list-content .left-section p {
    padding-right: 0.2rem;
  }
}
</style>