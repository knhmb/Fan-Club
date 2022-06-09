<template>
  <section class="notification">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="18">
          <h3>Notification</h3>
          <div v-for="item in 10" :key="item" class="card">
            <img src="../assets/cross-20x20@2x.png" alt="" />
            <div class="dot"></div>
            <p class="title">Lorem ipsum dolor sit amet</p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              quam nulla arcu eget ac sed purus egestas ac. Et eget mauris purus
              vestibulum ut id platea a, viverra...
            </p>
            <p class="date">2022-05-24 16:30</p>
          </div>
          <el-button>Load more</el-button>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.notification {
  padding: 2rem 0;
  background-color: #f0f6fa;
}

.notification .el-row {
  justify-content: center;
}

.notification h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  font-variation-settings: "slnt" 0;
  text-align: center;
  margin-bottom: 2rem;
}

.notification .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
}

.notification .card:not(:last-of-type) {
  margin-bottom: 1rem;
}

.notification img {
  width: 1rem;
  display: block;
  margin-left: auto;
  cursor: pointer;
}

.notification .dot {
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: #e24142;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.notification p.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
  display: inline-block;
  vertical-align: middle;
}

.notification p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #313131;
  margin: 0.5rem 0;
}

.notification p.date {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #616161;
}

.notification .el-button {
  background: #525e66;
  border-radius: 40px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  font-variation-settings: "slnt" 0;
  display: flex;
  margin: 2rem auto;
  padding: 1.4rem 2.3rem;
}

@media screen and (max-width: 991px) {
  .notification h3 {
    text-align: start;
  }
}
</style>