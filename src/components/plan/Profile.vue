<template>
  <section class="creator-profile">
    <base-container>
      <el-row :gutter="20">
        <el-col :sm="24" :md="17">
          <div class="card">
            <Carousel :breakpoints="breakpoints">
              <Slide v-for="post in posts" :key="post">
                <img :src="post.img" alt="" />
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
            <div class="post-content">
              <p class="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                Tincidunt fringilla eu lobortis aliquet mauris.
              </p>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt fringilla eu lobortis aliquet mauris. Proin non,
                mauris tincidunt sed. Ante non, est eget justo. Nisl, fermentum
                tellus non id lacus. Felis in pretium cras massa nunc velit,
                faucibus fringilla nec. Sollicitudin commodo faucibus faucibus
                nunc ridiculus sodales purus eu. Cras lacus scelerisque nibh
                tellus odio fusce proin aliquam nisl. Viverra quam tellus tempus
                viverra sit. Viverra aenean cursus vulputate elit, fringilla.
                Sollicitudin sit ut duis laoreet nunc cras. Nascetur at aliquet
                faucibus nulla enim, dui, urna urna. Aliquet eget ut ante
                pharetra.
              </p>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt fringilla eu lobortis aliquet mauris. Proin non,
                mauris tincidunt sed. Ante non, est eget justo. Nisl, fermentum
                tellus non id lacus. Felis in pretium cras massa nunc velit,
                faucibus fringilla nec. Sollicitudin commodo faucibus faucibus
                nunc ridiculus sodales purus eu. Cras lacus scelerisque nibh
                tellus odio fusce proin aliquam nisl. Viverra quam tellus tempus
                viverra sit. Viverra aenean cursus vulputate elit, fringilla.
                Sollicitudin sit ut duis laoreet nunc cras. Nascetur at aliquet
                faucibus nulla enim, dui, urna urna. Aliquet eget ut ante
                pharetra.
              </p>
              <div class="social-media">
                <el-row>
                  <el-col :xs="12" :sm="6" :md="6">
                    <div class="pill">
                      <img src="../../assets/discord-color@2x.png" alt="" />
                      <p>Discord</p>
                    </div>
                  </el-col>
                  <el-col :xs="12" :sm="6" :md="6">
                    <div class="pill">
                      <img src="../../assets/twitter-color@2x.png" alt="" />
                      <p>Twitter</p>
                    </div>
                  </el-col>
                  <el-col :xs="12" :sm="6" :md="6">
                    <div class="pill">
                      <img src="../../assets/facebook-color@2x.png" alt="" />
                      <p>Facebook</p>
                    </div>
                  </el-col>
                  <el-col :xs="12" :sm="6" :md="6">
                    <div class="pill">
                      <img src="../../assets/instagram-color@2x.png" alt="" />
                      <p>Instagram</p>
                    </div>
                  </el-col>
                </el-row>
                <!-- <div class="pill">
                  <img src="../../assets/discord-color@2x.png" alt="" />
                  <p>Discord</p>
                </div>
                <div class="pill">
                  <img src="../../assets/twitter-color@2x.png" alt="" />
                  <p>Twitter</p>
                </div>
                <div class="pill">
                  <img src="../../assets/facebook-color@2x.png" alt="" />
                  <p>Facebook</p>
                </div>
                <div class="pill">
                  <img src="../../assets/instagram-color@2x.png" alt="" />
                  <p>Instagram</p>
                </div> -->
              </div>
            </div>
          </div>
          <profile-post-card></profile-post-card>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="7">
          <profile-right-section></profile-right-section>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import ProfilePostCard from "./ProfilePostCard.vue";
import ProfileRightSection from "./ProfileRightSection.vue";

export default {
  components: {
    Carousel,
    Navigation,
    Slide,
    ProfilePostCard,
    ProfileRightSection,
  },
  data() {
    return {
      posts: [
        {
          img: require("../../assets/creator-post-img01@2x.jpg"),
        },
        {
          img: require("../../assets/creator-post-img02@2x.jpg"),
        },
        {
          img: require("../../assets/creator-post-img03@2x.jpg"),
        },
        {
          img: require("../../assets/creator-post-img04@2x.jpg"),
        },
      ],
      breakpoints: {
        // 700px and up
        300: {
          itemsToShow: 2.5,
          snapAlign: "start",
        },
        // 1024 and up
        1024: {
          itemsToShow: 2.5,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>

<style scoped>
.creator-profile {
  /* background-color: #cfdce6; */
  background-color: #f0f6fa;
}

.creator-profile .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem 2rem;
}

.creator-profile .carousel :deep(.carousel__prev--in-active),
.creator-profile .carousel :deep(.carousel__next--in-active) {
  display: none;
}

.creator-profile .carousel :deep(.carousel__prev),
.creator-profile .carousel :deep(.carousel__next) {
  background: linear-gradient(
    270deg,
    rgba(25, 25, 25, 0.4) 0%,
    rgba(25, 25, 25, 0.24) 50%,
    rgba(25, 25, 25, 0) 100%
  );
  border-radius: 0;
  height: 100%;
}

.creator-profile .carousel :deep(.carousel__slide) {
  margin-right: 0.7rem;
}

.creator-profile .card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.creator-profile .post-content {
  margin-top: 1.5rem;
}

.creator-profile .post-content p.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #191919;
  margin-bottom: 1.5rem;
}

.creator-profile .post-content p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #191919;
  margin-bottom: 1rem;
}

.creator-profile .social-media {
  margin-top: 1.5rem;
  padding-top: 1rem;
  /* display: flex;
  align-items: center; */
  border-top: 1px solid #cfdce6;
}

.creator-profile .social-media .pill {
  background: #ebf1f5;
  border-radius: 40px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  width: fit-content;
  /* margin-right: 1rem; */
  margin-bottom: 1rem;
}

.creator-profile .social-media .pill img {
  width: 1.3rem;
  margin-right: 0.5rem;
}

.creator-profile .social-media .pill p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
}
</style>