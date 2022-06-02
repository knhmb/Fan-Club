<template>
  <div class="creator-product">
    <base-container>
      <el-row :gutter="20">
        <el-col v-for="prod in products" :key="prod" :sm="12" :md="6">
          <div @click="dialogVisible = true" class="card">
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
    <el-dialog v-model="dialogVisible" width="15rem">
      <div class="product-img">
        <img src="../../assets/product01@2x.jpg" alt="" />
      </div>
      <div class="product-info">
        <p class="product-name">Product name</p>
        <p class="description">
          Lorem ipsum dolor ametconsectetur adipiscing elitSemper erat lacus
        </p>
        <p class="price">HKD <span>78</span></p>
        <div class="number-range">
          <img
            @click="incrementQuantity"
            src="../../assets/plus@2x.png"
            alt=""
          />
          <span>{{ num }}</span>
          <img
            @click="decrementQuantity"
            src="../../assets/minus@2x.png"
            alt=""
          />
        </div>
        <el-button>Buy</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      num: 1,
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
  methods: {
    incrementQuantity() {
      this.num++;
    },
    decrementQuantity() {
      if (this.num <= 1) {
        return;
      }
      this.num--;
    },
  },
};
</script>

<style scoped>
.creator-product {
  padding: 1rem 0;
  /* background-color: #cfdce6; */
  background-color: #f0f6fa;
}

.creator-product .card {
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  cursor: pointer;
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

.creator-product :deep(.el-dialog) {
  border-radius: 8px;
}

.creator-product :deep(.el-dialog__header),
.creator-product :deep(.el-dialog__body) {
  padding: 0;
}

.creator-product :deep(.el-dialog__headerbtn) {
  display: none;
}

.creator-product :deep(.product-img img) {
  width: 100%;
  border-radius: 8px 8px 0 0;
}

.creator-product :deep(.el-dialog .product-info) {
  padding: 1rem;
  text-align: center;
}

.creator-product :deep(.el-dialog .product-info p.product-name) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 16px;
  line-height: 24px;
  color: #191919;
  font-variation-settings: "slnt" 0;
}

.creator-product :deep(.el-dialog .product-info p.description) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #616161;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.creator-product :deep(.el-dialog .product-info p.price) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #0faaec;
  border-bottom: 1px solid #cfdce6;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.creator-product :deep(.el-dialog .product-info p.price span) {
  font-weight: 700;
}

.creator-product .number-range {
  background: #ebf1f5;
  border-radius: 80px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: auto;
}

.creator-product .number-range img {
  width: 1.5rem;
  cursor: pointer;
}

.creator-product .number-range span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 16px;
  line-height: 24px;
  color: #0faaec;
  font-variation-settings: "slnt" 0;
  margin: 0 1rem;
  display: inline-block;
}

.creator-product .el-button {
  background: #0faaec;
  border-radius: 40px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  font-variation-settings: "slnt" 0;
  width: 100%;
  margin-top: 1rem;
  padding: 1rem 2rem;
}
</style>