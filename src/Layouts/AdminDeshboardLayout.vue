
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
      if (this.authUser.role != '0') {
      
        

      this.$router.push("/dashboard");
}
    }

    

    this.$setLoading(false);

  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar; // Toggle the value of sidebar between true and false
    },
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
    <div v-if="this.$isLoading()"  class="lo">
      <div class="loader">
        <span>Loading...</span>
      </div>
    </div>
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
            <Routerlink to="/" class="navbar-brand text-uppercase text-reset" href="index.html">
              <div class="brand-text brand-big">
                <img
                  style="width: 140px; "
                  src="./../assets/deshboard/img/logo4.png"
                  alt=""
                />
              </div>
              <div class="brand-text brand-sm">
                <strong class="text-primary">C</strong><strong>W</strong
                ><strong>M</strong>
              </div></Routerlink
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
      <nav id="sidebar" :class="{shrinked: sidebar }">
        <!-- Sidebar Header-->
        <div class="sidebar-header d-flex align-items-center p-4">
          <img
            class="avatar shadow-0 img-fluid rounded-circle"
            src="./../assets/deshboard/img/avatar-6.jpg"
            alt="..."
          />
          <div class="ms-3 title">
            <h1 class="h5 mb-1">Mark Stephen</h1>
            <p class="text-sm text-gray-700 mb-0 lh-1">Admin</p>
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
              active: this.$route.path === '/admin/dashboard',
            }"
          >
            <RouterLink class="sidebar-link" to="/admin/dashboard">
              <svg class="svg-icon svg-icon-sm svg-icon-heavy">
                <use xlink:href="#sales-up-1"></use></svg
              ><span>Dashboard </span></RouterLink
            >
          </li>
          <li
            class="sidebar-item"
            :class="{
              active: this.$route.path === '/admin/user' ,
            }"
          >
            <RouterLink class="sidebar-link" to="/admin/user">
                <i class="fa fa-user svg-icon svg-icon-sm svg-icon-heavy " style="font-size:24px"></i>
              <span>User </span> </RouterLink>
          </li>
          <li
            class="sidebar-item"
            :class="{
              active: this.$route.path === '/admin/transaction',
            }"
          >
            <RouterLink class="sidebar-link" to="/admin/transaction">
                <i class="fa fa-database svg-icon svg-icon-sm svg-icon-heavy " style="font-size:24px"></i>
              <span>Transaction </span> </RouterLink>
          </li>

          <li class="sidebar-item" :class="{
              active: this.$route.path === '/admin/leads',
            }">
            <RouterLink class="sidebar-link" to="/admin/leads">
                <i class="fa fa-comment svg-icon svg-icon-sm svg-icon-heavy" style="font-size:24px">
                </i><span>Leads </span></RouterLink
            >
          </li>
          <li
            class="sidebar-item"
            :class="{
              active: this.$route.path === '/admin/portfolio',
            }"
          >
            <RouterLink class="sidebar-link" to="/admin/portfolio">
                <i class="fa fa-industry svg-icon svg-icon-sm svg-icon-heavy" style="font-size:24px"></i><span>Portfolios </span></RouterLink
            >
          </li>
          <li
            class="sidebar-item"
            :class="{
              active: this.$route.path === '/admin/offer',
            }"
          >
            <RouterLink class="sidebar-link" to="/admin/offer">
                <i class="fa fa-gift svg-icon svg-icon-sm svg-icon-heavy" style="font-size:24px"></i><span>Offers </span></RouterLink
            >
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

              2021 & copy; Your company. Design by CWM
              
            </p>
          </div>
        </footer>
      </div>
    </div>
  </body>
</template>



<style scoped>
 @import "./../assets/main.css";

 
.lo {
  
  z-index: 777777;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.479);
  overflow: hidden;
}

.loader {
  width: 10em;
  height: 10em;
  font-size: 25px;
  box-sizing: border-box;
  border-top: 0.3em solid hotpink;
  border-radius: 50%;
  position: relative;
  animation: rotating 2s ease-in-out infinite;
  --direction: 1;
}

.loader::before,
.loader::after {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  box-sizing: border-box;
  top: -0.2em;
}

.loader::before {
  border-top: 0.3em solid dodgerblue;
  transform: rotate(120deg);
}

.loader::after {
  border-top: 0.3em solid gold;
  transform: rotate(240deg);
}

.loader span {
  position: absolute;
  color: white;
  width: inherit;
  height: inherit;
  text-align: center;
  line-height: 10em;
  font-family: sans-serif;
  animation: rotating 2s linear infinite;
  --direction: -1;
}

@keyframes rotating {
  50% {
    transform: rotate(calc(180deg * var(--direction)));
  }

  100% {
    transform: rotate(calc(360deg * var(--direction)));
  }
}

</style>
