
<script>
import isAuthenticated from "./../midleware/auth";
import { logout } from "./../midleware/auth";
import axios from "axios";

export default {
  data() {
    return {
      isAuthenticated: false,
    };
  },

  created() {
    if (isAuthenticated()) {
      this.isAuthenticated = true;
    }

  },

  methods: {
   async logout() {
      this.$setLoading(true);
      logout();
     await axios
        .post("api/auth/logout")
        .then((response) => {
          this.$setLoading(false);

          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });

          // Change the authenticated value to false

          this.$router.push("/login");
        })
        .catch((error) => {
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });
        });
      this.$setLoading(false);
    },
  },
};
</script>

<template>
  <body>
    <!-- Spinner Start -->
    <div v-if="this.$isLoading()" id="spinner"
        class="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style="background-color: rgba(100, 87, 87, 0.692)">
        <div class="spinner-grow text-primary" role="status"></div>
    </div>
    <!-- Spinner End -->
    <!-- <div v-if="this.$isLoading()" id="preloader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> -->
    <!-- Navbar Start -->
    <nav
      class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5"
    >
      <RouterLink to="/" class="navbar-brand d-flex align-items-center">
        <h2 class="m-0 text-primary">
          <img
            class="img-fluid me-2"
            src="./../assets/deshboard/img/logo3.png"
            alt=""
            style="width: 140px"
          />
        </h2>
      </RouterLink>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-4 py-lg-0">
          <RouterLink to="/" class="nav-item nav-link  " :class="{
              active: this.$route.path === '/',
            }">Home</RouterLink>
          <RouterLink to="/about" class="nav-item nav-link" :class="{
              active: this.$route.path === '/about',
            }">About</RouterLink>
          <RouterLink :class="{
              active: this.$route.path === '/servics',
            }" to="/servics" class="nav-item nav-link"
            >Service</RouterLink
          >
          <RouterLink to="/contact" :class="{
              active: this.$route.path === '/contact',
            }" class="nav-item nav-link"
            >Contact</RouterLink
          >
          <!-- <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >More</a
            >
            <div class="dropdown-menu shadow-sm m-0">
              <div
                v-if="isAuthenticated"
                href="feature.html"
                @click="logout"
                class="dropdown-item"
              >
                Logout
              </div>
              <router-link
                v-if="!isAuthenticated"
                class="dropdown-item"
                to="/login"
                >Login</router-link
              >

              <RouterLink
                v-if="isAuthenticated"
                to="/dashboard"
                class="dropdown-item"
                >Dashboard</RouterLink
              >
            </div>
          </div> -->
        </div>
        <div class="nav-item nav-link">
          <RouterLink
                v-if="!isAuthenticated"
                to="/login"
                class=" btn-dark py-3 px-4 animated slideInDown "
                >LOGIN</RouterLink
              >
              <RouterLink
                v-if="isAuthenticated"
                to="/dashboard"
                class=" btn-dark py-3 px-4 animated slideInDown"
                >Dashboard</RouterLink
              >
        </div>
      </div>
    </nav>
    <!-- Navbar End -->

    <div>
      <slot />
    </div>

    <!-- Footer Start -->
    <div
      class="container-fluid bg-light footer pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-md-6">
            <h1 class="text-primary mb-4">
              <img
                class="img-fluid me-2"
                src="./../assets/deshboard/img/logo3.png"
                alt=""
                style="width: 160px"
              />
            </h1>
            <span
              >Our Portfolio Managers and Research Analysts Integrate ESG analysis into our investment process, where available, by focusing on companies with sustainable business models and evaluating ESG-related risks as part of the proprietary research recommendations we use throughout the firm.</span
            >
          </div>
          
          <div class="col-lg-3 col-md-6">
            <h5 class="mb-4">Get In Touch</h5>
            <p>
              <i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA
            </p>
            <p><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p><i class="fa fa-envelope me-3"></i>info@example.com</p>
          </div>
         
          <div class="col-lg-3 col-md-6">
            <h5 class="mb-4">Quick Links</h5>
            <RouterLink to="/about" class="btn btn-link" >About Us</RouterLink>
            <RouterLink to="/contact" class="btn btn-link" >Contact Us</RouterLink>
            <RouterLink to="/servics" class="btn btn-link" >Our Services</RouterLink>
            <RouterLink to="/risk/disclosure" class="btn btn-link" >Risk Disclosure</RouterLink>
          </div>
          
        </div>
      </div>
      <div class="container-fluid copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">Your Site Name</a>, All Right Reserved.
            </div>
            <div class="col-md-6 text-center text-md-end">
              <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End -->

    <!-- Back to Top -->
    <!-- <a
      
      class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      ><i class="bi bi-arrow-up"></i
    ></a> -->
  </body>
</template>
<style scoped>
@import "../assets/home.css";
</style>
