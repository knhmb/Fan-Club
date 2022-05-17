<template>
  <footer class="footer">
    <base-container>
      <!-- <el-row justify="space-between">
        <el-col :md="12"> -->
      <ul>
        <li>About us</li>
        <li>Contact us</li>
        <li>FAQ</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
      </ul>
      <!-- </el-col> -->
      <!-- <el-col :md="6"> -->
      <div class="social-media">
        <p class="copyright">© moreFans</p>
        <div class="social-icons">
          <img src="../../assets/facebook-footer-1.svg" alt="" />
          <img src="../../assets/facebook-footer.svg" alt="" />
          <img src="../../assets/twitter-footer.svg" alt="" />
        </div>
      </div>
      <!-- </el-col> -->
      <!-- </el-row> -->
    </base-container>
  </footer>
</template>

<style scoped>
.footer {
  /* padding: 1.5rem 0; */
  background-color: #3d474d;
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #ffffff;
  position: relative;
}

.footer .container {
  display: flex;
  justify-content: space-between;
}

.footer ul {
  list-style: none;
  display: flex;
}

.footer li {
  /* font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #ffffff; */
  margin-right: 1rem;
}

.footer .social-media {
  display: flex;
  align-items: center;
}

.footer .social-media img {
  margin-left: 1rem;
}

.footer p.copyright {
  /* font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #ffffff; */
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.01px;
  padding-right: 1rem;
  display: inline-block;
}

@media screen and (max-width: 800px) {
  /* .footer::after {
    content: "";
    position: absolute;
    background: #fff;
    width: 100%;
    height: 2px;
    bottom: 18%;
  } */
  .footer .container,
  .footer ul {
    flex-direction: column;
  }

  .footer ul {
    border-bottom: 1px solid #6f6f6f;
  }

  .footer .social-media {
    margin-top: 1.5rem;
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .footer .social-media img {
    margin-left: 0;
    margin-right: 1rem;
  }

  .footer p.copyright {
    border: none;
  }

  .footer li {
    margin-bottom: 1rem;
  }
}
</style>