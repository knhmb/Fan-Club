<template>
  <section class="login">
    <base-container>
      <base-card>
        <h3>Log in</h3>
        <Form />
      </base-card>
      <p>
        Don't have an account?
        <span @click="$router.push('/register')">Sign up</span>
      </p>
    </base-container>
  </section>
</template>

<script>
import Form from "../components/login/Form.vue";

export default {
  components: {
    Form,
  },
};
</script>

<style scoped>
.login {
  padding: 0.5rem 0;
}

.login h3 {
  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: "liga" off;
  color: #292929;
  margin-bottom: 2rem;
}

.login p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "liga" off;
  color: #292929;
  margin-top: 1rem;
}

.login span {
  font-weight: 500;
  color: #0faaec;
  cursor: pointer;
}

.login span:hover {
  text-decoration: underline;
}
</style>