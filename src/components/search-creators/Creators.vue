<template>
  <div class="creators-tab">
    <div v-for="name in names" :key="name" class="card">
      <el-row>
        <el-col :xs="4" :sm="2" :md="2">
          <img src="../../assets/creator01@2x.jpg" alt=""
        /></el-col>
        <el-col :xs="20" :sm="22" :md="22">
          <p class="name">{{ name }}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis duis
            magna turpis ac urna, id iaculis semper platea.
          </p>
          <p>3,270 images,776 audios,81 links,33 videos,1 poll</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: [
        "Ronald Richards",
        "Imdat Cimsit",
        "Tuncay Sahin",
        "Ayse Cam",
        "Sukru Al",
        "Gulumser Ozguler",
        "Suleyman Saribas",
        "M. Kemal Yilmaz",
        "Mehmet Rauf Tunc",
        "Abdulkerim Dur",
        "Ahmet Pehlivan",
        "Sefer Kucuksagir",
      ],
    };
  },
};
</script>

<style scoped>
.creators-tab {
  margin-top: 1.5rem;
}

.creators-tab .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
}

.creators-tab .card img {
  width: 3rem;
  border-radius: 100%;
}

.creators-tab .card p.name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #0faaec;
}

.creators-tab .card p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #616161;
}

.creators-tab .card p:nth-of-type(2) {
  margin: 0.5rem 0 1rem 0;
}

@media screen and (max-width: 500px) {
  .creators-tab .card img {
    margin-right: 0.5rem;
  }
}
</style>