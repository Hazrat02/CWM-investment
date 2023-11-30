
<script>
import isAuthenticated from "./../midleware/auth";
import { logout } from "./../midleware/auth";
import axios from "axios";
import { useAuthUserStore } from "./../store/user";
export default {
  data() {
    return {
      authUser: [],
      bot: false,
      messages: [
        { type: 'in', sender: 'Bot', text: 'How can I help you?' },
        // Add more messages as needed
      ],
      newMessageText: '',
      smsloading:false
    };
  },

  async created() {
    if (isAuthenticated() == true) {
      // auth user data +++++++++++++++++++++++++++++

      const userStore = useAuthUserStore();
      const authUser = userStore.authUser;

      if (authUser) {
        this.authUser = authUser;
      } else {
        // userStore.reSetAuthUser();
        this.authUser = await userStore.reSetAuthUser();
      }
    } else {
      this.authUser = "";
    }
  },

  methods: {

    toggleBot() {
      this.bot = !this.bot; // Toggle the value of sidebar between true and false
    },
    sendMessage() {
      // Add a new outgoing message
      this.messages.push({
        type: 'out',
        sender: 'You', // Change the sender as needed
        text: this.newMessageText,
        avatar: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      });
      
      this.smsloading = true;

      this.newMessageText = '';

      if (this.messages.length == '2') {
        setTimeout(() => {
        this.messages.push({
          type: 'in',
          sender: 'bot',
          text: 'Thank you!What is your name?',
        });
        this.smsloading=false

      }, 2000); // 5000 milliseconds = 5 seconds
      
    }
      if (this.messages.length == '4') {
        setTimeout(() => {
        this.messages.push({
          type: 'in',
          sender: 'bot',
          text: 'Give us email for solve your problem',
        });
        this.smsloading=false

      }, 2000); // 5000 milliseconds = 5 seconds
      
    }
      
      // Clear the input field after sending the message
      
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
    <!-- Spinner Start -->
    <div
      v-if="this.$isLoading()"
      id="spinner"
      class="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      style="background-color: rgba(100, 87, 87, 0.692)"
    >
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
      class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top p-0 px-4 px-lg-5"
      style=""
    >
      <RouterLink to="/" class="navbar-brand d-flex align-items-center">
        <h2 class="m-0 text-primary">
          <img
            class="img-fluid me-2"
            src="./../assets/deshboard/img/logo4.png"
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
          <RouterLink
            to="/"
            class="nav-item nav-link"
            :class="{
              active: this.$route.path === '/',
            }"
            >Home</RouterLink
          >
          <RouterLink
            to="/about"
            class="nav-item nav-link"
            :class="{
              active: this.$route.path === '/about',
            }"
            >About</RouterLink
          >
          <RouterLink
            :class="{
              active: this.$route.path === '/servics',
            }"
            to="/servics"
            class="nav-item nav-link"
            >Service</RouterLink
          >
          <RouterLink
            to="/contact"
            :class="{
              active: this.$route.path === '/contact',
            }"
            class="nav-item nav-link"
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
            v-if="!authUser"
            to="/login"
            class="btn-dark py-3 px-4 animated slideInDown"
            >LOGIN</RouterLink
          >
          <div v-if="authUser">
            <RouterLink
              v-if="authUser.role == '0'"
              to="/admin/dashboard"
              class="btn-dark py-3 px-4 animated slideInDown"
              >Dashboard</RouterLink
            >
            <RouterLink
              v-else
              to="/dashboard"
              class="btn-dark py-3 px-4 animated slideInDown"
              >Dashboard</RouterLink
            >
          </div>
        </div>
      </div>
    </nav>
    <!-- Navbar End -->

    <div>
      <slot />
    </div>

    <!-- Footer Start -->
    <div
      class="container-fluid background-radial-gradient footer pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-md-6">
            <h1 class="text-primary mb-4">
              <img
                class="img-fluid me-2"
                src="./../assets/deshboard/img/logo4.png"
                alt=""
                style="width: 160px"
              />
            </h1>
            <span
              >Our Portfolio Managers and Research Analysts Integrate ESG
              analysis into our investment process, where available, by focusing
              on companies with sustainable business models and evaluating
              ESG-related risks as part of the proprietary research
              recommendations we use throughout the firm.</span
            >
          </div>

          <div class="col-lg-3 col-md-6">
            <h5 class="mb-4 text-white">Get In Touch</h5>
            <p>
              <i class="fa fa-map-marker-alt me-3"></i>Swindon, United Kingdom
            </p>

            <p><i class="fa fa-phone-alt me-3"></i>+447817541947</p>
            <p>
              <i class="fa fa-envelope me-3"></i
              >info@capitalswealthmanagement.com
            </p>
          </div>

          <div class="col-lg-3 col-md-6">
            <h5 class="mb-4 text-white">Quick Links</h5>
            <RouterLink to="/about" class="btn btn-link">About Us</RouterLink>
            <RouterLink to="/contact" class="btn btn-link"
              >Contact Us</RouterLink
            >
            <RouterLink to="/servics" class="btn btn-link"
              >Our Services</RouterLink
            >
            <RouterLink to="/risk/disclosure" class="btn btn-link"
              >Risk Disclosure</RouterLink
            >
          </div>
        </div>
      </div>
      <div class="container-fluid copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              #18, Capitals Wealth Management Ltd, Wesltecot Rd.,
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
    <div class="container content" v-if="bot">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div class="card">
            <div class="card-header d-flex justify-content-between">
              <span> Chat Bot </span>
              <span @click="toggleBot">
                <i style="font-size: 20px" class="fa fa-times"></i>
              </span>
            </div>
            <div class="card-body height3">
              <ul class="chat-list">
                <li v-for="(message, index) in messages" :key="index" :class="message.type">
                <div class="chat-img">
                  <img v-if="message.type == 'in'"
                      alt="Avtar"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                  <img v-if="message.type == 'out'"
                      alt="Avtar"
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    />
                </div>
                <div class="chat-body">
                  <div class="chat-message">
                    <h5>{{ message.sender }}</h5>
                    <p>{{ message.text }}</p>
                  </div>
                </div>
              </li>
                <li class="in" v-if="smsloading" >
                  <div class="chat-img">
                    <img
                      alt="Avtar"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                  </div>
                  <div class="chat-body">
                    <div class="chat-message">
                      <h5>Bot</h5>
                      <img style="height: 30px; width: 80px;" src="https://img.wattpad.com/3c4ec5726f6b6a96766920ff0f12304e2ae87188/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f43585a6e724a34764638565a30773d3d2d3832333532313032382e313565363730663931313030336636663636303039393830323832302e676966" alt="">
                    </div>
                  </div>
                </li>
                
              </ul>
            </div>
            <form @submit.prevent="sendMessage" class="d-flex justify-content-center mb-2" v-if="messages.length != '5'">
              <div class="col-10">
                <div class="input-group">
                  <input
                    required
                    v-model="newMessageText"
                    class="form-control"
                    type="text"
                    placeholder="Write text.."
                  />
                  <button type="submit" class="input-group-text">></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-bot" @click="toggleBot" v-if="!bot">
      <img
        style="height: 90px; width: 90px; border-radius: 50%"
        alt="Avtar"
        src="https://bootdey.com/img/Content/avatar/avatar1.png"
      />
    </div>
  </body>
</template>
<style scoped>

@import "../assets/home.css";
.chat-list {
  padding: 0;
  font-size: 0.8rem;
}

.chat-list li {
  margin-bottom: 10px;
  overflow: auto;
  color: #ffffff;
}

.chat-list .chat-img {
  float: left;
  width: 48px;
}

.chat-list .chat-img img {
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  width: 100%;
}

.chat-list .chat-message {
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  background: #5a99ee;
  display: inline-block;
  padding: 10px 20px;
  position: relative;
}

.chat-list .chat-message:before {
  content: "";
  position: absolute;
  top: 15px;
  width: 0;
  height: 0;
}

.chat-list .chat-message h5 {
  margin: 0 0 5px 0;
  font-weight: 600;
  line-height: 100%;
  font-size: 0.9rem;
}

.chat-list .chat-message p {
  line-height: 18px;
  margin: 0;
  padding: 0;
}

.chat-list .chat-body {
  margin-left: 20px;
  float: left;
  width: 70%;
}

.chat-list .in .chat-message:before {
  left: -12px;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #5a99ee;
}

.chat-list .out .chat-img {
  float: right;
}

.chat-list .out .chat-body {
  float: right;
  margin-right: 20px;
  text-align: right;
}

.chat-list .out .chat-message {
  background: #fc6d4c;
}

.chat-list .out .chat-message:before {
  right: -12px;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #fc6d4c;
}

.card .card-header:first-child {
  -webkit-border-radius: 0.3rem 0.3rem 0 0;
  -moz-border-radius: 0.3rem 0.3rem 0 0;
  border-radius: 0.3rem 0.3rem 0 0;
}
.card .card-header {
  background: #17202b;
  border: 0;
  font-size: 1rem;
  padding: 0.65rem 1rem;
  position: relative;
  font-weight: 600;
  color: #ffffff;
}

.content {
  position: fixed;
  bottom: 2vh;
}
.bg-dark{

color: rgb(211, 225, 238) !important; background-color: #0C3B41 !important;
}
.background-radial-gradient {
  
  background-color: rgb(40, 45, 82) 59, 77);

  background-image: linear-gradient(300deg, #232b4e 10%, #000000 100%);
}
.chat-bot{
  position: fixed;
  top: 87%;
  left: 2%;
}

</style>
