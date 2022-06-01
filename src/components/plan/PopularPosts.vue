<template>
  <div class="popular-posts">
    <h5>Popular posts</h5>
    <div v-for="item in 10" :key="item" class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Tincidunt
        fringilla eu lobortis...
      </p>
      <p class="rate">
        <img src="../../assets/like-outline-16x16@2x.png" alt="" /> 321
      </p>
      <p class="rate">
        <img src="../../assets/comment-outline-16x16@2x.png" alt="" /> 131
      </p>
    </div>
  </div>
</template>

<style scoped>
.popular-posts {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem 0;
}

.popular-posts h5 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #616161;
  padding: 0 1rem;
}

.popular-posts .content {
  margin-top: 1rem;
  padding: 0 1rem;
  position: relative;
}

.popular-posts .content:not(:last-of-type)::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #cfdce6;
  bottom: -0.5rem;
}

.popular-posts .content p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
}

.popular-posts .content p.rate {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #616161;
  font-variation-settings: "slnt" 0;
  display: inline-flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-right: 1.5rem;
}

.popular-posts .content p.rate img {
  width: 1.1rem;
  margin-right: 0.1rem;
}
</style>