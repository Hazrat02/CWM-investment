
<script>
import { RouterLink, RouterView } from "vue-router";
import isAuthenticated from "./../midleware/auth";
import { logout } from "./../midleware/auth";
import axios from "axios";
import { useAuthUserStore } from "../store/user";
import "./../assets/base.js";

export default {
  data() {
    return {
      sidebar: false,
      isAuthenticated: false,
      authUser:[]
    };
  },
  async created() {
    if (isAuthenticated()) {
      this.isAuthenticated = true;
    }

    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }
    if (this.authUser.role != '1') {
      
        

          this.$router.push("/admin/dashboard");
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar; // Toggle the value of sidebar between true and false
    },
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
    <header class="header">
      <nav
        class="navbar navbar-expand-lg py-3 bg-dash-dark-2 border-bottom border-dash-dark-1 z-index-10"
      >
        <div class="search-panel">
          <div
            class="search-inner d-flex align-items-center justify-content-center"
          >
            <div
              class="close-btn d-flex align-items-center position-absolute top-0 end-0 me-4 mt-2 cursor-pointer"
            >
              <span>Close </span>
              <svg
                class="svg-icon svg-icon-md svg-icon-heavy text-gray-700 mt-1"
              >
                <use xlink:href="#close-1"></use>
              </svg>
            </div>
            <div class="row w-100">
              <div class="col-lg-8 mx-auto">
                <form class="px-4" id="searchForm" action="#">
                  <div
                    class="input-group position-relative flex-column flex-lg-row flex-nowrap"
                  >
                    <input
                      class="form-control shadow-0 bg-none px-0 w-100"
                      type="search"
                      name="search"
                      placeholder="What are you searching for..."
                    />
                    <button
                      class="btn btn-link text-gray-600 px-0 text-decoration-none fw-bold cursor-pointer text-center"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          class="container-fluid d-flex align-items-center justify-content-between py-1"
        >
          <div class="navbar-header d-flex align-items-center">
            <a class="navbar-brand text-uppercase text-reset" href="index.html">
              <div class="brand-text brand-big">
                <img
                  style="width: 100px; height: 50px"
                  src="./../assets/deshboard/img/logo.png"
                  alt=""
                />
              </div>
              <div class="brand-text brand-sm">
                <strong class="text-primary">C</strong><strong>W</strong
                ><strong>M</strong>
              </div></a
            >
            <button
              class="sidebar-toggle"
              :class="{active: sidebar }"
              @click="toggleSidebar"
            >
              <svg class="svg-icon svg-icon-sm svg-icon-heavy transform-none">
                <use xlink:href="#arrow-left-1"></use>
              </svg>
            </button>
          </div>
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a class="search-open nav-link px-0" href="#">
                <svg class="svg-icon svg-icon-xs svg-icon-heavy text-gray-700">
                  <use xlink:href="#find-1"></use></svg
              ></a>
            </li>
            <li class="list-inline-item">
              <RouterLink class="nav-link px-0" to="/" style="color: darkgray">
                <svg class="svg-icon svg-icon-sm svg-icon-heavy">
                  <use xlink:href="#real-estate-1"></use>
                </svg>
                Home</RouterLink
              >
            </li>

            <!-- Languages dropdown    -->

            <li class="list-inline-item dropdown">
              <a
                class="nav-link dropdown-toggle text-sm text-reset px-1 px-lg-0"
                id="languages"
                rel="nofollow"
                data-bs-target="#"
                href="#"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                ><img
                  src="./../assets/deshboard/img/flags/16/GB.png"
                  alt="English"
                /><span class="d-none d-sm-inline-block ms-2">English</span></a
              >
              <ul
                class="dropdown-menu dropdown-menu-end mt-sm-3 dropdown-menu-dark"
                aria-labelledby="languages"
              >
                <li>
                  <a class="dropdown-item" rel="nofollow" href="#">
                    <img
                      class="me-2"
                      src="./../assets/deshboard/img/flags/16/DE.png"
                      alt="English"
                    /><span>German</span></a
                  >
                </li>
                <li>
                  <a class="dropdown-item" rel="nofollow" href="#">
                    <img
                      class="me-2"
                      src="./../assets/deshboard/img/flags/16/FR.png"
                      alt="English"
                    /><span>French </span></a
                  >
                </li>
              </ul>
            </li>
            <li class="list-inline-item logout px-lg-2"  @click="logout">
              <p style="cursor: pointer;"
                class="nav-link text-sm text-reset px-1 px-lg-0"
                id="logout"
                
              >
                <span class="d-none d-sm-inline-block">Logout </span>
                <svg class="svg-icon svg-icon-xs svg-icon-heavy">
                  <use xlink:href="#disable-1"></use></svg
              ></p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="d-flex align-items-stretch">
      <!-- Sidebar Navigation-->
      <nav id="sidebar" :class="{ shrinked: sidebar }">
        <!-- Sidebar Header-->
        <div class="sidebar-header d-flex align-items-center p-4">
          <img
            class="avatar shadow-0 img-fluid rounded-circle"
            :src="authUser.profile"
            alt="..."
          />
          <div class="ms-3 title">
            <h1 class="h5 mb-1">{{authUser.name}}</h1>
            <p class="text-sm text-gray-700 mb-0 lh-1">Investor</p>
          </div>
        </div>
        <span
          class="text-uppercase text-gray-600 text-xs mx-3 px-2 heading mb-2"
          >Main</span
        >
        <ul class="list-unstyled">
          <li
            class="sidebar-item"
            :class="{
              active: this.$route.path === '/dashboard',
            }"
          >
            <RouterLink class="sidebar-link" to="/dashboard">
              <svg class="svg-icon svg-icon-sm svg-icon-heavy">
                <use xlink:href="#sales-up-1"></use></svg
              ><span>Dashboard </span></RouterLink
            >
          </li>
          <li
            class="sidebar-item"
            :class="{
              active: this.$route.path === '/account',
            }"
          >
            <RouterLink class="sidebar-link" to="/account">
              <svg class="svg-icon svg-icon-sm svg-icon-heavy">
                <use xlink:href="#portfolio-grid-1"></use></svg
              ><span>Accounts </span></RouterLink
            >
          </li>

          <li
            class="sidebar-item"
            :class="{
              active:
                this.$route.path === '/deposit' ||
                this.$route.path === '/withdraw' ||
                this.$route.path === '/transaction' ||
                this.$route.path === '/payment/details',
            }"
          >
            <a
              class="sidebar-link"
              href="#exampledropdownDropdown"
              data-bs-toggle="collapse"
            >
              <svg class="svg-icon svg-icon-sm svg-icon-heavy">
                <use xlink:href="#browser-window-1"></use></svg
              ><span>Funds </span></a
            >
            <ul class="collapse list-unstyled" id="exampledropdownDropdown">
              <li>
                <RouterLink class="sidebar-link" to="/deposit"
                  >Deposit Funds</RouterLink
                >
              </li>
              <li>
                <RouterLink class="sidebar-link" to="/withdraw"
                  >Withdraw Funds</RouterLink
                >
              </li>
              <li>
                <RouterLink class="sidebar-link" to="/transaction"
                  >Transaction History</RouterLink
                >
              </li>
              <li>
                <RouterLink class="sidebar-link" to="/payment/details"
                  >Payment Details</RouterLink
                >
              </li>
            </ul>
          </li>
          <li
            class="sidebar-item"
            :class="{
              active:
                this.$route.path === '/profile' ||
                this.$route.path === '/kyc' ||
                this.$route.path === '/economic',
            }"
          >
            <a class="sidebar-link" href="#profile" data-bs-toggle="collapse">
              <svg class="svg-icon svg-icon-sm svg-icon-heavy">
                <use xlink:href="#survey-1"></use></svg
              ><span>Profile </span></a
            >
            <ul class="collapse list-unstyled" id="profile">
              <li>
                <RouterLink class="sidebar-link" to="/profile"
                  >Profile Information</RouterLink
                >
              </li>
              <li>
                <RouterLink class="sidebar-link" to="/kyc"
                  >Upload Documents</RouterLink
                >
              </li>
              <li>
                <RouterLink class="sidebar-link" to="/economic"
                  >Economic Profile Details</RouterLink
                >
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div  class="page-content " >
        <!-- Page Header-->

        <slot></slot>
        <!-- Page Footer-->
        <footer
          class="position-absolute bottom-0 bg-dash-dark-2 text-white text-center py-3 w-100 text-xs"
          id="footer"
        >
          <div class="container-fluid text-center">
            <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->
            <p class="mb-0 text-dash-gray">
              2021 &copy; Your company. Design by
              <a href="https://bootstrapious.com">Bootstrapious</a>.
            </p>
          </div>
        </footer>
      </div>
    </div>
  </body>
</template>


<style scoped>
@import "../assets/main.css";
</style>
