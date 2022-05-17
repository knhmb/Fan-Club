<template>
  <the-header></the-header>
  <Banner />
  <Promotion />
  <Explore />
  <Featured />
  <Product />
  <get-started></get-started>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/common/TheHeader.vue";
import Banner from "./components/home/Banner.vue";
import Promotion from "./components/home/Promotion.vue";
import Explore from "./components/home/Explore.vue";
import Featured from "./components/home/Featured.vue";
import Product from "./components/home/Product.vue";
import GetStarted from "./components/home/GetStarted.vue";
import TheFooter from "./components/common/TheFooter.vue";

export default {
  components: {
    TheHeader,
    Banner,
    Promotion,
    Explore,
    Featured,
    Product,
    GetStarted,
    TheFooter,
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
