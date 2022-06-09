<template>
  <section class="subscription-plan">
    <el-row :gutter="20">
      <el-col v-for="user in users" :key="user" :sm="12" :md="8">
        <div class="card">
          <div class="card-header">
            <img src="../assets/Ellipse-17-3.png" alt="" />
            <p class="name">{{ user }}</p>
          </div>
          <div class="card-body">
            <img class="body-img" src="../assets/plan02@2x.jpg" alt="" />
            <div class="plan">
              <div class="plan-text">
                <p class="level">Plan name - Level 2</p>
                <p class="price">HKD 300 / per month</p>
              </div>
              <el-button>Edit</el-button>
            </div>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque vel varius ac massa iaculis arcu lorem enim. Mi ut
              neque egestas nunc. Platea et amet mauris, at ultricies pellentesq
            </p>
            <p class="show-more">Show more</p>
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
        "Wade Warren",
        "Marvin McKinney",
        "Cameron Williamson",
        "Cameron Williamson",
        "Wade Warren",
        "Marvin McKinney",
      ],
    };
  },
};
</script>

<style scoped>
.subscription-plan {
  margin: 2rem 0;
}

.subscription-plan .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.subscription-plan img {
  width: 3rem;
  margin-right: 1rem;
}

.subscription-plan .card-header {
  display: flex;
  align-items: center;
}

.subscription-plan p.name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
  font-variation-settings: "slnt" 0;
}

.subscription-plan .card-body {
  border: 1px solid #cfdce6;
  border-radius: 4px;
  padding: 0.7rem;
  margin-top: 1rem;
}

.subscription-plan .card-body img.body-img {
  margin: 0;
  width: 100%;
  border-radius: 4px;
}

.subscription-plan .card-body .plan {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.subscription-plan .card-body .plan .plan-text p.level {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 16px;
  line-height: 24px;
  color: #191919;
  font-variation-settings: "slnt" 0;
  margin-top: 0.5rem;
}

.subscription-plan .card-body .plan .plan-text p.price {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #616161;
}

.subscription-plan .card-body .plan .el-button {
  background: #ffffff;
  border: 1px solid #525e66;
  border-radius: 40px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #313131;
  font-variation-settings: "slnt" 0;
}

.subscription-plan .card-body p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #292929;

  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  margin-top: 1rem;
}

.subscription-plan .card-body p.description:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(
    0deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.5) 51.56%,
    rgba(217, 217, 217, 0) 100%,
    rgba(255, 255, 255, 0) 100%
  );
}

.subscription-plan .card-body p.show-more {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0faaec;
  cursor: pointer;
  text-decoration: underline;
  text-align: center;
  margin-top: 0.5rem;
}
</style>