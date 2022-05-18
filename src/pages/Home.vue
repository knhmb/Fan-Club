<template>
  <Banner />
  <Promotion />
  <Explore />
  <Featured />
  <Product />
  <get-started></get-started>
  <the-footer></the-footer>
</template>

<script>
import Banner from "../components/home/Banner.vue";
import Promotion from "../components/home/Promotion.vue";
import Explore from "../components/home/Explore.vue";
import Featured from "../components/home/Featured.vue";
import Product from "../components/home/Product.vue";
import GetStarted from "../components/home/GetStarted.vue";

export default {
  components: {
    Banner,
    Promotion,
    Explore,
    Featured,
    Product,
    GetStarted,
  },
};
</script>