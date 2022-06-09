<template>
  <section class="product-history">
    <el-row :gutter="20">
      <el-col v-for="user in users" :key="user" :sm="12" :md="8">
        <div class="card">
          <div class="card-header">
            <img src="../assets/Ellipse-17-3.png" alt="" />
            <p class="name">{{ user.name }}</p>
          </div>
          <div class="card-body">
            <img class="body-img" :src="user.image" alt="" />
            <p class="product-name">Product name</p>
            <p class="description">
              Lorem ipsum dolor ametconsectetur adipiscing elitSemper erat lacus
            </p>
            <p class="price">
              HKD <span>78</span> <span class="quantity">x1</span>
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: "Wade Warren",
          image: require("../assets/product01@2x.jpg"),
        },
        {
          name: "Marvin McKinney",
          image: require("../assets/product02@2x.jpg"),
        },
        {
          name: "Cameron Williamson",
          image: require("../assets/product03@2x.jpg"),
        },
        {
          name: "Cameron Williamson",
          image: require("../assets/product03@2x.jpg"),
        },
        {
          name: "Wade Warren",
          image: require("../assets/product01@2x.jpg"),
        },
        {
          name: "Marvin McKinney",
          image: require("../assets/product02@2x.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.product-history {
  margin: 2rem 0;
}

.product-history .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.product-history img {
  width: 3rem;
  margin-right: 1rem;
}

.product-history .card-header {
  display: flex;
  align-items: center;
}

.product-history p.name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
  font-variation-settings: "slnt" 0;
}

.product-history .card-body {
  border: 1px solid #cfdce6;
  border-radius: 4px;
  padding: 0.7rem;
  margin-top: 1rem;
}

.product-history .card-body img.body-img {
  margin: 0;
  width: 100%;
  border-radius: 4px;
}

.product-history .card-body p.product-name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 16px;
  line-height: 24px;
  color: #191919;
  font-variation-settings: "slnt" 0;
  margin-top: 0.5rem;
}

.product-history .card-body p.price {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #191919;
}

.product-history .card-body p.price span {
  font-weight: 700;
}

.product-history .card-body p.price span.quantity {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #929292;
}

.product-history .card-body p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #616161;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
</style>