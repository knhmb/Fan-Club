<template>
  <div class="more-comments">
    <div class="top-section">
      <p>Load more comments</p>
      <p>2 of 21</p>
    </div>
    <div class="content">
      <div class="avatar-content">
        <div class="image">
          <img src="../../assets/avatar.png" alt="" />
          <p class="name">Yves Adjanohoun</p>
        </div>
        <p class="date">Today</p>
      </div>
      <p class="comment">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
        viverra mauris, lacus. Ac accumsan bibendum amet, dui penatibus metus,
        sem malesuada. Tincidunt molestie consectetur nulla commodo, dignissim.
        Mollis in posuere diam commodo est auctor pharetra massa.
      </p>
    </div>
    <div class="content">
      <div class="avatar-content">
        <div class="image">
          <img src="../../assets/avatar.png" alt="" />
          <p class="name">Marcel Apithy</p>
        </div>
        <p class="date">Yesterday</p>
      </div>
      <p class="comment">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
        viverra mauris, lacus. Ac accumsan bibendum amet, dui penatibus metus,
        sem malesuada.
      </p>
    </div>
    <div class="content-comment">
      <img src="../../assets/avatar.png" alt="" />
      <el-input
        v-model="comment"
        placeholder="Become a fan to comment..."
      ></el-input>
    </div>
    <!-- <div class="content">
      <div class="avatar-content">
        <div class="image">
          <img src="../../assets/avatar.png" alt="" />
        </div>
        <div class="text">
          <p class="name">Yves Adjanohoun</p>
          <p class="comment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eget viverra mauris, lacus. Ac accumsan bibendum amet, dui penatibus
            metus, sem malesuada. Tincidunt molestie consectetur nulla commodo,
            dignissim. Mollis in posuere diam commodo est auctor pharetra massa.
          </p>
        </div>
        <p class="date">Today</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
    };
  },
};
</script>

<style scoped>
.more-comments {
  margin-top: 2rem;
  position: relative;
}

.more-comments::before {
  content: "";
  position: absolute;
  width: calc(100% + 6rem);
  height: 1px;
  background: #cfdce5;
  left: -3rem;
  top: -1rem;
}

.more-comments .top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.more-comments .top-section p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #616161;
}

.more-comments .content {
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
}

.more-comments .image {
  display: flex;
}

.more-comments .avatar-content {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
}

.more-comments .avatar-content img {
  width: 2rem;
  margin-right: 0.5rem;
}

.more-comments .avatar-content p.name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
}

.more-comments p.date {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #7a7a7a;
}

.more-comments p.comment {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
  margin-top: 0.5rem;
  margin-left: 2.6rem;
}

.more-comments .content-comment {
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
}

.more-comments .content-comment img {
  margin-right: 0.7rem;
}

.more-comments .content-comment .el-input :deep(.el-input__wrapper) {
  background: #ebf1f5;
  border-radius: 16px;
  padding: 0.3rem 1rem;
}

@media screen and (max-width: 715px) {
  .more-comments::before {
    width: calc(100% + 4rem);
  }
}
</style>