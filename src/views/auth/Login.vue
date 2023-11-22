<template>
  <body>
    <!-- ======= Header ======= -->

    <main id="main">
      <div>
        <HomeLayout>
          <section
            class="background-radial-gradient overflow-hidden content-wrapper"
          >
            <div
              class="container px-4 py-5 px-md-5 text-center text-lg-start my-5"
            >
              <div class="row gx-lg-5 align-items-center mb-5">
                <div
                  class="col-lg-6 mb-5 mb-lg-0"
                  style="z-index: 10; height: 50vw"
                >
                  <h1
                    class="my-2 display-5 fw-bold ls-tight"
                    style="color: hsl(218, 81%, 95%)"
                  >
                    The best offer <br />
                    <span style="color: hsl(218, 81%, 75%)"
                      >for your business</span
                    >
                  </h1>
                  <p class="mb-4 opacity-60" style="color: hsl(218, 81%, 85%)">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Temporibus
                  </p>
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                  <div
                    id="radius-shape-2"
                    class="position-absolute shadow-5-strong"
                  ></div>
                  <div
                    id="radius-shape-1"
                    class="position-absolute rounded-circle shadow-5-strong"
                  ></div>
                  <div
                    id="radius-shape-3"
                    class="position-absolute shadow-5-strong"
                  ></div>
                  <div
                    id="radius-shape-4"
                    class="position-absolute rounded-circle shadow-5-strong"
                  ></div>

                  <div class="card bg-glass">
                    <div class="card-body px-4 py-5 px-md-5">
                      <div style="z-index: 444444444444"></div>

                      <h1 class="mb-4 mb-lg-4 text-center">log in</h1>

                      <form class="justify-content-center" action="">
                        <!-- Email input -->

                        <div class="form-outline mb-4">
                          <input
                            name="email"
                            placeholder="Enter Your Email"
                            v-model="email"
                            type="email"
                            id="form3Example3"
                            class="form-control"
                            required
                          />
                          <label class="d-flex" for="form3Example3"
                            >Email address</label
                          >
                        </div>

                        <!-- Password input -->

                        <div class="form-outline mb-4">
                          <div class="form-outline mb-2">
                            <div style="position: relative">
                              <input
                                name="password"
                                placeholder="******"
                                v-model="password"
                                :type="passwordFieldType"
                                id="password"
                                class="form-control"
                                required
                              />

                              <i
                                style="
                                  position: absolute;
                                  top: 7%;
                                  right: 5%;
                                  font-size: 25px;
                                "
                                class="bi"
                                :class="icon"
                                @click="togglePasswordVisibility"
                              ></i>
                            </div>
                          </div>

                          <div
                            class="d-flex"
                            style="justify-content: space-between"
                          >
                            <label class="form-label" for="form3Example4"
                              >password</label
                            >
                            <router-link
                              to="/forget"
                              style="
                                color: cadetblue;
                                cursor: pointer;
                                text-decoration: underline;
                              "
                              >forget password
                            </router-link>
                          </div>
                        </div>

                        <!-- Checkbox -->
                        <div
                          class="form-check d-flex justify-content-center mb-4"
                        >
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example33"
                            required
                          />
                          <p>
                            <RouterLink style="color: green" to="/contact"
                              >Read all tarm.</RouterLink
                            >Uderested?
                          </p>
                        </div>

                        <!-- Submit button -->
                        <div
                          class="container container-fluid justify-content-center"
                        >
                          <button
                            type="submit"
                            class="btn btn-outline-success d-block px-4 container-fluid mb-4"
                            @click.prevent="login"
                          >
                            log in
                          </button>
                        </div>
                        <div>
                          <label
                            >Haven't any account? /<RouterLink
                              style="color: green"
                              to="/register"
                              >Singup</RouterLink
                            ></label
                          >
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </HomeLayout>
      </div>
    </main>

    <!-- Scroll Top Button -->

    <!-- Preloader -->
  </body>
  <!-- <template v-slot:bodytext ></template> -->
</template>





<script>
import axios from "axios";
import { login } from "../../midleware/auth.js";
import { useAuthUserStore } from "../../store/user";

// import { notify } from 'vue3-notify'
export default {
  data() {
    return {
      showicon: true,
      showPassword: false,
      email: "",
      password: "",
    };
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },
    icon() {
      return this.showicon ? "bi-eye-slash-fill" : "bi-eye-fill";
    },
  },
  created() {
    this.$setLoading(false);
  },

  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.showicon = !this.showicon;
    },
    showNotification() {
      this.$notify({
        title: "Important message",
        text: "Hello user!",
      });
    },
  login() {
      this.$setLoading(true);
      const data = {
        email: this.email,
        password: this.password,
      };

    axios
        .post("/api/auth/login", data)
        .then((response) => {
          login(response.data.authorisation.token);

          const userStore = useAuthUserStore();

          userStore.setAuthUser(response.data.user);
          if (response.data.user.role == "0") {
            this.$router.push("/admin/dashboard");
          } else {
            this.$router.push("/dashboard");
          }

          
          this.$setLoading(false);
          this.$notify({
            title: "message",
            text: "User succesfully login",
            type: "success",
          });
        })
        .catch((error) => {
          // Handle the error
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });
        });

       
    },
  },
};
</script>

<style scoped>
@import "./../../assets/home.css";
.background-radial-gradient {
  background-color: #d9afd9;

  background-image: linear-gradient(300deg, #97abff 10%, #000000 100%);
}

#radius-shape-2 {
  border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
  bottom: -60px;
  right: -110px;
  width: 300px;
  height: 300px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

#radius-shape-3 {
  border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
  bottom: -60px;
  left: -110px;
  width: 300px;
  height: 300px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

#radius-shape-4 {
  height: 270px;
  width: 700px;
  top: -100px;
  left: -92px;
  background: radial-gradient(#866798, #d5aeec);
  overflow: hidden;
}

.bg-glass {
  background-color: rgba(255, 255, 255, 0.692) !important;
  backdrop-filter: saturate(200%) blur(25px);
}
label {
  color: #000000;
}

span {
  color: #000000;
}
</style>