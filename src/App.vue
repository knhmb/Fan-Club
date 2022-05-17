<template>
  <the-header></the-header>
  <Banner />
  <Promotion />
  <Explore />
</template>

<script>
import TheHeader from "./components/common/TheHeader.vue";
import Banner from "./components/home/Banner.vue";
import Promotion from "./components/home/Promotion.vue";
import Explore from "./components/home/Explore.vue";

export default {
  components: {
    TheHeader,
    Banner,
    Promotion,
    Explore,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
