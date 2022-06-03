<template>
  <div class="post-card">
    <el-row :gutter="20">
      <el-col :sm="24" :md="17">
        <!-- ========================================= First Card ========================================= -->
        <div class="card" v-if="$route.path !== '/creator/post/post-detail'">
          <img src="../../assets/creator-post-img01@2x.jpg" alt="" />
          <Carousel :wrap-around="true" :breakpoints="breakpoints">
            <Slide v-for="img in imgs" :key="img">
              <img class="slider-img" :src="img.img" alt="" />
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
          <div class="post-card-content">
            <post-card-info></post-card-info>
          </div>
        </div>
        <!-- ========================================= Second Card ========================================= -->

        <div class="card" v-if="$route.path !== '/creator/post/post-detail'">
          <div class="background-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Tincidunt
              fringilla eu lobortis aliquet mauris.
            </p>
          </div>
          <!-- <img src="../../assets/creator-post-img01@2x.jpg" alt="" /> -->
          <!-- <Carousel :wrap-around="true" :breakpoints="breakpoints">
            <Slide v-for="img in imgs" :key="img">
              <img class="slider-img" :src="img.img" alt="" />
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel> -->
          <div class="post-card-content">
            <post-card-info></post-card-info>
          </div>
        </div>
        <!-- ========================================= Third Card ========================================= -->
        <div class="card" v-if="$route.path !== '/creator/post/post-detail'">
          <img src="../../assets/creator-post-img01@2x.jpg" alt="" />
          <!-- <Carousel :wrap-around="true" :breakpoints="breakpoints">
            <Slide v-for="img in imgs" :key="img">
              <img class="slider-img" :src="img.img" alt="" />
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel> -->
          <div class="post-card-content">
            <post-card-info :hide-avatar="true"></post-card-info>
          </div>
        </div>
        <!-- ========================================= Fourth Card ========================================= -->

        <div class="card" v-if="$route.path !== '/creator/post/post-detail'">
          <div class="background-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Tincidunt
              fringilla eu lobortis aliquet mauris.
            </p>
          </div>
          <div class="post-card-content">
            <post-card-info :hide-avatar="true"></post-card-info>
          </div>
        </div>
        <router-view></router-view>
      </el-col>
      <el-col class="hidden-sm-and-down" :span="7">
        <popular-posts></popular-posts>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import PostCardInfo from "./PostCardInfo.vue";
import PopularPosts from "./PopularPosts.vue";

export default {
  components: {
    Carousel,
    Navigation,
    Slide,
    PostCardInfo,
    PopularPosts,
  },
  data() {
    return {
      imgs: [
        {
          img: require("../../assets/creator-post-img02@2x.jpg"),
        },
        {
          img: require("../../assets/creator-post-img03@2x.jpg"),
        },
        {
          img: require("../../assets/creator-post-img04@2x.jpg"),
        },
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
        {
          img: require("../../assets/creator-post-img01@2x.jpg"),
        },
      ],
      breakpoints: {
        // 700px and up
        300: {
          itemsToShow: 4.5,
          snapAlign: "start",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4.5,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>

<style scoped>
.post-card {
  /* margin-top: 2rem; */
}

.post-card .card {
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.post-card .card .background-content {
  background: linear-gradient(76.94deg, #88bff6 0%, #c8a8f1 100%);
  padding: 1rem 5rem;
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px 8px 0 0;
}

.post-card .card .background-content p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #191919;
}

.post-card .card img {
  width: 100%;
  border-radius: 8px 8px 0 0;
  border: none;
}

.post-card .card img.slider-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.post-card .carousel :deep(.carousel__slide) {
  margin-right: 0.3rem;
}

.post-card .carousel :deep(.carousel__prev),
.post-card .carousel :deep(.carousel__next) {
  display: none;
}

.post-card .post-card-content {
  padding: 1rem 3rem;
}

@media screen and (max-width: 715px) {
  .post-card .post-card-content {
    padding: 1rem 1rem;
  }
}
</style>