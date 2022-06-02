<template>
  <section class="featured-posts">
    <base-container>
      <h3>Featured Post</h3>
      <el-row :gutter="20">
        <el-col v-for="item in data" :key="item" :sm="12" :md="6">
          <div class="card">
            <img class="thumbnail" :src="item.thumbnail" alt="" />
            <div class="content">
              <h5>{{ item.title }}</h5>
              <p>{{ item.description }}</p>
            </div>
            <div class="footer">
              <img :src="item.logo" alt="" class="logo" />
              <div class="subscribers">
                <p class="name">{{ item.name }}</p>
                <div class="subs">
                  <img
                    class="heart"
                    src="../../assets/heart-small.svg"
                    alt=""
                  />
                  <span>{{ item.subs }}</span>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "Apple opens another megastore in China amid ...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          logo: require("../../assets/creator01@2x.jpg"),
          name: "Ronald Richards",
          subs: "8078 Subscriber",
          thumbnail: require("../../assets/post01@2x.jpg"),
        },
        {
          title: "Ted Sarandos named co-CEO at Netflix",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          logo: require("../../assets/creator02@2x.jpg"),
          name: "Robert Fox",
          subs: "8078 Subscriber",
          thumbnail: require("../../assets/post02@2x.jpg"),
        },
        {
          title:
            "Immersive chat startups have a very different vision for the ...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          logo: require("../../assets/creator02@2x.jpg"),
          name: "Robert Fox",
          subs: "8078 Subscriber",
          thumbnail: require("../../assets/post03@2x.jpg"),
        },
        {
          title: "Apple opens another megastore in China amid ...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          logo: require("../../assets/creator04@2x.jpg"),
          name: "Robert Fox",
          subs: "8078 Subscriber",
          thumbnail: require("../../assets/post04@2x.jpg"),
        },
        {
          title: "Apple opens another megastore in China amid ...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          logo: require("../../assets/creator04@2x.jpg"),
          name: "Robert Fox",
          subs: "8078 Subscriber",
          thumbnail: require("../../assets/post04@2x.jpg"),
        },
        {
          title:
            "Immersive chat startups have a very different vision for the ...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          logo: require("../../assets/creator02@2x.jpg"),
          name: "Robert Fox",
          subs: "8078 Subscriber",
          thumbnail: require("../../assets/post03@2x.jpg"),
        },
        {
          title: "Ted Sarandos named co-CEO at Netflix",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          logo: require("../../assets/creator02@2x.jpg"),
          name: "Robert Fox",
          subs: "8078 Subscriber",
          thumbnail: require("../../assets/post02@2x.jpg"),
        },
        {
          title: "Apple opens another megastore in China amid ...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          logo: require("../../assets/creator01@2x.jpg"),
          name: "Ronald Richards",
          subs: "8078 Subscriber",
          thumbnail: require("../../assets/post01@2x.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.featured-posts {
  padding: 3rem 0;
}

.featured-posts .el-col {
  margin-bottom: 1.5rem;
}

.featured-posts h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #292929;
  text-align: center;
  margin-bottom: 4rem;
}

.featured-posts img {
  width: 100%;
}

.featured-posts img.thumbnail {
  border-radius: 0.5rem;
}

.featured-posts h5 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}

.featured-posts p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #525252;
}

.featured-posts .card .footer {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

.featured-posts .card .footer img.logo {
  border-radius: 80px;
  width: 2rem;
  margin-right: 0.5rem;
}

.featured-posts .card .footer .subscribers p.name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #292929;
}

.featured-posts .card .footer .subscribers span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  font-feature-settings: "liga" off;
  color: #6f6f6f;
}

.featured-posts .card .footer .subscribers img.heart {
  width: 1.2rem;
}

.featured-posts .card .footer .subscribers .subs {
  display: flex;
  align-items: center;
}
</style>