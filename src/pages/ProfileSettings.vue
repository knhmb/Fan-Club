<template>
  <section class="profile-settings">
    <base-container>
      <h4>Profile setting</h4>
      <Carousel :breakpoints="breakpoints" class="hidden-md-and-up">
        <Slide v-for="slide in tabOptions" :key="slide">
          <div class="tab-content">
            <div
              @click="$router.push(slide.path)"
              class="single-tab"
              :class="{
                'is-active': $route.path === slide.path,
              }"
            >
              <p>{{ slide.name }}</p>
            </div>

            <!-- <div
              @click="setTabOption('password')"
              class="single-tab"
              :class="{ 'is-active': tabOption === 'password' }"
            >
              <p>Password</p>
            </div>
            <div
              @click="setTabOption('subscription')"
              class="single-tab"
              :class="{ 'is-active': tabOption === 'subscription' }"
            >
              <p>Subscription plan history</p>
            </div>
            <div
              @click="setTabOption('product')"
              class="single-tab"
              :class="{ 'is-active': tabOption === 'product' }"
            >
              <p>Product history</p>
            </div> -->
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
      <div class="tab-content hidden-sm-and-down">
        <div
          @click="$router.push('/profile-settings/profile-information')"
          class="single-tab"
          :class="{
            'is-active':
              $route.path === '/profile-settings/profile-information',
          }"
        >
          <p>Profile</p>
        </div>

        <div
          @click="$router.push('/profile-settings/change-password')"
          class="single-tab"
          :class="{
            'is-active': $route.path === '/profile-settings/change-password',
          }"
        >
          <p>Password</p>
        </div>
        <div
          @click="$router.push('/profile-settings/subscription-plan')"
          class="single-tab"
          :class="{
            'is-active': $route.path === '/profile-settings/subscription-plan',
          }"
        >
          <p>Subscription plan history</p>
        </div>
        <div
          @click="$router.push('/profile-settings/product-history')"
          class="single-tab"
          :class="{
            'is-active': $route.path === '/profile-settings/product-history',
          }"
        >
          <p>Product history</p>
        </div>
      </div>
      <router-view></router-view>
    </base-container>
  </section>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Navigation,
    Slide,
  },
  data() {
    return {
      tabOption: "creators",
      tabOptions: [
        {
          name: "Profile",
          path: "/profile-settings/profile-information",
        },
        {
          name: "Password",
          path: "/profile-settings/change-password",
        },
        {
          name: "Subscription plan history",
          path: "/profile-settings/subscription-plan",
        },
        {
          name: "Product history",
          path: "/profile-settings/product-history",
        },
      ],
      breakpoints: {
        // 700px and up
        300: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    setTabOption(option) {
      this.tabOption = option;
    },
  },
};
</script>

<style scoped>
.profile-settings {
  background-color: #f0f6fa;
  padding: 2rem 0;
}

.profile-settings h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 24px;
  line-height: 32px;
  color: #191919;
  font-variation-settings: "slnt" 0;
  margin-bottom: 3rem;
}

.profile-settings .tab-content {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(207, 220, 230, 0.5);
  padding-bottom: 1rem;
  padding-left: 1rem;
  margin-top: 1rem;
}

.profile-settings .single-tab {
  position: relative;
  cursor: pointer;
  margin-right: 4rem;
}

.profile-settings .single-tab.is-active::after {
  content: "";
  position: absolute;
  left: -1rem;
  bottom: -1rem;
  background: #0faaec;
  width: calc(100% + 2rem);
  height: 3px;
  /* transform: translateX(50%); */
}

.profile-settings .single-tab.is-active p {
  color: #0faaec;
}

.profile-settings .single-tab.is-active .pill p {
  color: #525e66;
}

.profile-settings .tab-content p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  color: #525e66;
  font-variation-settings: "slnt" 0;
}

.profile-settings :deep(.carousel .carousel__prev),
.profile-settings :deep(.carousel .carousel__next) {
  display: none;
}

@media screen and (max-width: 991px) {
  .profile-settings .tab-content {
    border-bottom: none;
  }

  .profile-settings {
    position: relative;
  }

  .profile-settings::before {
    content: "";
    position: absolute;
    background-color: rgba(207, 220, 230, 0.5);
    width: 100%;
    height: 1px;
    left: 0;
    top: 12.5rem;
  }
}
</style>