<template>
  <section class="profile-settings">
    <base-container>
      <h4>Profile setting</h4>
      <div class="tab-content">
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
        </div>
      </div>
      <router-view></router-view>
    </base-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tabOption: "creators",
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
</style>