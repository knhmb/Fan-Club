<template>
  <section class="register">
    <base-container>
      <base-card>
        <h3>Sign up</h3>
        <Form />
      </base-card>
      <p>
        Already have an account?
        <span @click="$router.push('/login')">Log in</span>
      </p>
    </base-container>
  </section>
</template>

<script>
import Form from "../components/register/Form.vue";

export default {
  components: {
    Form,
  },
};
</script>

<style scoped>
.register {
  padding: 0.5rem 0;
}

.register h3 {
  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: "liga" off;
  color: #292929;
  margin-bottom: 2rem;
}

.register p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "liga" off;
  color: #292929;
  margin-top: 1rem;
}

.register span {
  font-weight: 500;
  color: #0faaec;
  cursor: pointer;
}

.register span:hover {
  text-decoration: underline;
}
</style>