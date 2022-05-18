<template>
  <section class="explore">
    <base-container>
      <h3>Explore creators</h3>
      <carousel
        snap-align="center"
        :wrap-around="true"
        :breakpoints="breakpoints"
      >
        <slide v-for="slide in options" :key="slide">
          <!-- {{ slide }} -->
          <div class="pill">{{ slide }}</div>
        </slide>

        <template #addons>
          <navigation />
          <!-- <pagination /> -->
        </template>
      </carousel>
      <!-- <el-row> -->
      <carousel :breakpoints="breakpoints">
        <slide v-for="slide in data" :key="slide">
          <div class="card">
            <img src="../../assets/creator01@2x.jpg" alt="" />
            <div class="content">
              <p class="name">{{ slide.name }}</p>
              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                duis magna turpis ac urna, id iaculis semper platea.
              </p>
              <div class="subscribers">
                <img class="heart" src="../../assets/heart-small.svg" alt="" />
                <span>8078 Subscriber</span>
              </div>
            </div>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <!-- <pagination /> -->
        </template>
      </carousel>
      <!-- </el-row> -->
    </base-container>
  </section>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    // Pagination,
    Navigation,
  },
  data() {
    return {
      options: [
        "Writing",
        "Gaming",
        "Music",
        "Design",
        "Business",
        "Lifestyle",
        "Sports",
      ],
      data: [
        {
          name: "Ronald Richards",
        },
        {
          name: "Khaled",
        },
        {
          name: "Mohammed",
        },
        {
          name: "Hassan",
        },
        {
          name: "Tareq",
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
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>



<style>
.explore {
  padding: 3rem 0;
}

.explore .carousel {
  width: 100%;
}

.explore .carousel__slide {
  margin-right: 1rem;
}

.explore h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2.75rem;
  line-height: 3.25rem;
  letter-spacing: -0.02em;
  color: #292929;
  text-align: center;
  margin-bottom: 6rem;
}

.explore .pill {
  width: 106px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #cfdce6;
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #393939;
  transition: 0.2s ease-out;
}

.explore .pill:hover {
  background-color: #525e66;
  color: #fff;
}

.explore .carousel .carousel__prev,
.explore .carousel .carousel__next {
  background-color: #fff;
  border: 1px solid #c6c6c6;
}

.explore .carousel .carousel__icon {
  color: #6f6f6f;
}

.explore .card {
  margin-top: 2rem;
  /* margin-right: 1rem; */
  text-align: start;
  width: 100%;
}

.explore .card img {
  width: 100%;
  border-radius: 1rem;
}

.explore .card .content p.name {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #292929;
}

.explore .card .content p.desc {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #525252;
}

.explore .card .content .subscribers {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

.explore .card .content .subscribers span {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  font-feature-settings: "liga" off;
  color: #525252;
}

.explore .card .content img.heart {
  border-radius: none;
  width: 1rem;
  margin-right: 0.3rem;
}

.explore .el-col.hidden-background {
  /* background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%); */
  background-image: url("../../assets/more-bg@2x.jpg");
  /* background-repeat: no-repeat; */
  background-size: cover;
  height: 15vh;
  margin-top: 2rem;
  position: relative;
}

.explore .el-col.hidden-background .el-button {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background: #ff6285;
  box-shadow: 0px 8px 24px rgba(255, 98, 133, 0.2);
  border-radius: 80px;
  padding: 1.5rem 2.5rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
}
</style>