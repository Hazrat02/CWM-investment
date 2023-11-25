
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

                      <h1 class="mb-4 mb-lg-4 text-center">Forget Now</h1>

                      <form
                        class="justify-content-center"
                        action=""
                        @submit.prevent="forget"
                      >
                        <!-- Email input -->
                        <div v-if="showCode">
                          <div class="form-outline mb-4">
                            <input
                              placeholder="Enter Your Code"
                              v-model="userCode"
                              type="text"
                              id="userCode"
                              class="form-control"
                              required
                            />
                            <label class="form-label" for="userCode"
                              >Code</label
                            >
                          </div>

                          <!-- Password input -->

                          <!-- Submit button -->
                          <div
                            class="container container-fluid justify-content-center"
                          >
                            <button
                              type="button"
                              class="btn btn-success d-block px-4 container-fluid mb-4"
                              @click="codeMatch"
                            >
                              Reset
                            </button>
                          </div>
                        </div>
                        <div v-if="showEmail">
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
                            <label class="form-label" for="form3Example3"
                              >Email address</label
                            >
                          </div>

                          <!-- Password input -->

                          <!-- Submit button -->
                          <div
                            class="container container-fluid justify-content-center"
                          >
                            <div
                              type="submit"
                              class="btn btn-success d-block px-4 container-fluid mb-4"
                              @click="next"
                            >
                              Next
                            </div>
                          </div>
                        </div>
                        <div v-if="showReset">
                          <div class="form-outline mb-4">
                            <input
                              name="email"
                              placeholder="******"
                              v-model="password"
                              type="password"
                              id="password"
                              class="form-control"
                              required
                            />
                            <label class="form-label" for="resetPassword"
                              >New Password</label
                            >
                          </div>
                          <div class="form-outline mb-4">
                            <input
                              name="email"
                              placeholder="******"
                              v-model="password_confirmation"
                              type="password"
                              id="password_confirmation"
                              class="form-control"
                              required
                            />
                            <label
                              class="form-label"
                              for="password_confirmation"
                              >Confirmation New Password</label
                            >
                          </div>

                          <!-- Password input -->

                          <!-- Submit button -->
                          <div
                            class="container container-fluid justify-content-center"
                          >
                            <button
                              type="submit"
                              class="btn btn-success d-block px-4 container-fluid mb-4"
                            >
                              Forget
                            </button>
                          </div>
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

export default {
  data() {
    return {
      oldCode: "55555555555555534534434",
      userCode: "",
      showReset: false,
      showCode: false,
      showEmail: true,
      email: "",
      password: "",
      password_confirmation: "",
    };
  },

  created() {
    this.$setLoading(false);
  },

  methods: {
    codeMatch() {
      this.$setLoading(true);
      if (this.oldCode == this.userCode) {
        this.showReset = true;
        this.showCode = false;
        this.showEmail = false;
      } else {
        this.$notify({
          title: "Warning",
          text: "Code do not match!",
          type: "error",
        });
      }
      this.$setLoading(false);
    },
    showNotification() {
      this.$notify({
        title: "Important message",
        text: "Hello user!",
      });
    },
    async next() {
      this.$setLoading(true);

      const data = {
        type: "forget",
        email: this.email,
        sub: "CMW Forget code",
        bodytext: "Your CWM forget code is:",
        footertext: "Do not share our code anyone.It is very importent",
        btn: "",
      };
      await axios
        .post("/api/auth/forgetcode", data)
        .then((response) => {
          this.showCode = true;
          this.showEmail = false;
          this.oldCode = response.data.code;
          console.log(this.oldCode);
        })
        .catch((error) => {
          this.showCode = false;
          this.showEmail = true;
          // Handle the error
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });
        });
      this.$setLoading(false);
    },
   async forget() {
      this.$setLoading(true);
      const data = {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };

     await axios
        .post("/api/auth/forget", data)
        .then((response) => {
          this.$router.push("/login");
          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });
        })
        .catch((error) => {
          // Handle the error

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