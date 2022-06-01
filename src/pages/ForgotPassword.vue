<template>
  <section class="forgot-password">
    <base-container>
      <base-card>
        <h3>Forgot Password</h3>
        <p>
          Enter your username and email address, we will send you a new
          password.
        </p>
        <Form />
      </base-card>
      <!-- <p>
        Don't have an account?
        <span @click="$router.push('/register')">Sign up</span>
      </p> -->
    </base-container>
  </section>
</template>

<script>
import Form from "../components/forgot-password/Form.vue";

export default {
  components: {
    Form,
  },
};
</script>

<style scoped>
.forgot-password {
  padding: 0.5rem 0;
  min-height: 100vh;
}

.forgot-password h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #191919;
}

.forgot-password p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 540;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #191919;
  font-variation-settings: "slnt" 0;
  margin: 1rem 0;
}

.forgot-password span {
  font-weight: 500;
  color: #0faaec;
  cursor: pointer;
}

.forgot-password span:hover {
  text-decoration: underline;
}
</style>