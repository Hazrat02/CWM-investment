
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
    logout() {
      this.$setLoading(true);
      logout();
      axios
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
            src="./../assets/deshboard/img/logo.png"
            alt=""
            style="width: 120px"
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
          <RouterLink to="/" class="nav-item nav-link active">Home</RouterLink>
          <RouterLink to="/about" class="nav-item nav-link">About</RouterLink>
          <RouterLink to="/servics" class="nav-item nav-link"
            >Service</RouterLink
          >
          <RouterLink to="/contact" class="nav-item nav-link"
            >Contact</RouterLink
          >
          <div class="nav-item dropdown">
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
          </div>
        </div>
        <div class="h-100 d-lg-inline-flex align-items-center d-none">
          <a
            class="btn btn-square rounded-circle bg-light text-primary me-2"
            href=""
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a
            class="btn btn-square rounded-circle bg-light text-primary me-2"
            href=""
            ><i class="fab fa-twitter"></i
          ></a>
          <a
            class="btn btn-square rounded-circle bg-light text-primary me-0"
            href=""
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
      </div>
    </nav>
    <!-- Navbar End -->

    <div>
      <slot />
    </div>

    <!-- Footer Start -->
    <div
      class="container-fluid bg-light footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-md-6">
            <h1 class="text-primary mb-4">
              <img
                class="img-fluid me-2"
                src="./../assets/frontend/img/icon-1.png"
                alt=""
                style="width: 45px"
              />CryptoCoin
            </h1>
            <span
              >Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
              erat ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor
              diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
              lorem et sit.</span
            >
          </div>
          <div class="col-md-6">
            <h5 class="mb-4">Newsletter</h5>
            <p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita.</p>
            <div class="position-relative">
              <input
                class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />

              <button
                type="button"
                class="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
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
            <h5 class="mb-4">Our Services</h5>
            <a class="btn btn-link" href="">Currency Wallet</a>
            <a class="btn btn-link" href="">Currency Transaction</a>
            <a class="btn btn-link" href="">Bitcoin Investment</a>
            <a class="btn btn-link" href="">Token Sale</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5 class="mb-4">Quick Links</h5>
            <a class="btn btn-link" href="">About Us</a>
            <a class="btn btn-link" href="">Contact Us</a>
            <a class="btn btn-link" href="">Our Services</a>
            <a class="btn btn-link" href="">Terms & Condition</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5 class="mb-4">Follow Us</h5>
            <div class="d-flex">
              <a class="btn btn-square rounded-circle me-1" href=""
                ><i class="fab fa-twitter"></i
              ></a>
              <a class="btn btn-square rounded-circle me-1" href=""
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a class="btn btn-square rounded-circle me-1" href=""
                ><i class="fab fa-youtube"></i
              ></a>
              <a class="btn btn-square rounded-circle me-1" href=""
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
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
              Designed By
              <a href="https://htmlcodex.com">HTML Codex</a> Distributed By
              <a href="https://themewagon.com">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End -->

    <!-- Back to Top -->
    <a
      href="#"
      class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      ><i class="bi bi-arrow-up"></i
    ></a>
  </body>
</template>
<style scoped>
@import "../assets/home.css";
</style>
