<template>
  <div class="post-card">
    <el-row>
      <el-col :span="18">
        <div class="card">
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import PostCardInfo from "./PostCardInfo.vue";

export default {
  components: {
    Carousel,
    Navigation,
    Slide,
    PostCardInfo,
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
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
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
  margin-top: 2rem;
}

.post-card .card {
  background: #ffffff;
  border-radius: 8px;
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
  padding: 1rem 4rem;
}
</style>