<template>
  <div class="creator-product">
    <base-container>
      <el-row :gutter="20">
        <el-col v-for="prod in products" :key="prod" :sm="12" :md="6">
          <div class="card">
            <img :src="prod.img" alt="" />
            <div class="content">
              <h5>Product name</h5>
              <p>
                Lorem ipsum dolor ametconsectetur adipiscing elitSemper erat
                lacus
              </p>
              <p class="price">HKD <span>78</span></p>
            </div>
          </div>
        </el-col>
        <el-col class="hidden-sm-and-up">
          <el-button>Load more</el-button>
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          img: require("../../assets/product01@2x.jpg"),
        },
        {
          img: require("../../assets/product02@2x.jpg"),
        },
        {
          img: require("../../assets/product03@2x.jpg"),
        },
        {
          img: require("../../assets/product04@2x.jpg"),
        },
        {
          img: require("../../assets/product04@2x.jpg"),
        },
        {
          img: require("../../assets/product03@2x.jpg"),
        },
        {
          img: require("../../assets/product02@2x.jpg"),
        },
        {
          img: require("../../assets/product01@2x.jpg"),
        },
        {
          img: require("../../assets/product01@2x.jpg"),
        },
        {
          img: require("../../assets/product02@2x.jpg"),
        },
        {
          img: require("../../assets/product03@2x.jpg"),
        },
        {
          img: require("../../assets/product04@2x.jpg"),
        },
        {
          img: require("../../assets/product04@2x.jpg"),
        },
        {
          img: require("../../assets/product03@2x.jpg"),
        },
        {
          img: require("../../assets/product02@2x.jpg"),
        },
        {
          img: require("../../assets/product01@2x.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.creator-product {
  padding: 1rem 0;
  background-color: #cfdce6;
}

.creator-product .card {
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.creator-product img {
  width: 100%;
  border-radius: 8px 8px 0 0;
  border: none;
}

.creator-product .content {
  padding: 1rem 0.5rem;
  text-align: center;
}

.creator-product .content h5 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 16px;
  line-height: 24px;
  color: #191919;
  font-variation-settings: "slnt" 0;
  margin-bottom: 0.5rem;
}

.creator-product .content p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #616161;
  margin-bottom: 1rem;
}

.creator-product .content p.price {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #0faaec;
  margin: 0;
}

.creator-product .content p.price span {
  font-weight: 700;
}

.creator-product .el-button {
  background: #525e66;
  border-radius: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  font-variation-settings: "slnt" 0;
  margin: 0;
  margin: auto;
  display: flex;
}
</style>