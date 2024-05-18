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
                    class="col-lg-6  mb-lg-0 mb-35"
                    style="z-index: 10; height: 50vw ;" 
                  >
                    <h1
                      class="my-2 display-5 fw-bold ls-tight"
                      style="color: hsl(218, 81%, 95%)"
                    >
                    Opt for smart
                    <br />
                      <span style="color: hsl(218, 81%, 75%)"
                        >investments with CWM.</span
                      >
                    </h1>
                    <p class="mb-5 opacity-60" style="color: hsl(218, 81%, 85%)">
                      Analysts Integrate ESG analysis into our investment process, where available, by focusing on companies with sustainable business models and evaluating ESG-related risks as part of the proprietary research recommendations we use throughout the firm
                    </p>
                  </div>
  
                  <div class="col-lg-6 mb-5 mb-lg-0 mt-5 position-relative" >
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
  
                    <div class="card bg-glass " >
                      <div class="card-body px-4 py-5  px-md-5">
                        <div style="z-index: 444444444444"></div>
  
  
                        <form class="justify-content-center" @submit.prevent="leadstore">
                          <!-- Email input -->
  
                          <div class="form-outline mb-4">
                            <input
                              name="name"
                              placeholder="Enter Your Name"
                              v-model="name"
                              type="text"
                              id="form3Example3"
                              class="form-control"
                              required
                            />
                            <label class="d-flex" for="form3Example3"
                              >Full Name  <span style="color: red;"> *</span></label
                            >
                          </div>
                          <div class="form-outline mb-4">
                            <input
                              name="phone"
                              placeholder="Enter Your Number"
                              v-model="phone"
                              type="number"
                              id="form3Example3"
                              class="form-control"
                              required
                            />
                            <label class="d-flex" for="form3Example3"
                              >Phone  <span style="color: red;">  *</span></label
                            >
                          </div>
                          <div class="form-outline mb-4">
                            <input
                              name="city"
                              placeholder="Enter Your city"
                              v-model="city"
                              type="text"
                              id="form3Example3"
                              class="form-control"
                              required
                            />
                            <label class="d-flex" for="form3Example3"
                              >city <span style="color: red;"> *</span></label
                            >
                          </div>
  
                     
  
      
                          <!-- Submit button -->
                          <div
                            class="container container-fluid justify-content-center"
                          >
                            <button
                              type="submit"
                              class="btn btn-outline-success d-block px-4 container-fluid mb-4"
                           
                            >
                              Submit
                            </button>
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
  import { login } from "./../midleware/auth.js";
  import { useAuthUserStore } from "./../store/user";
  
  // import { notify } from 'vue3-notify'
  export default {
    data() {
      return {
 
        name: "",
        phone: "",
        city: "",
      
      };
    },

    created() {


      this.$setLoading(false);
      
    },
  
    methods: {

   async leadstore() {
        this.$setLoading(true);
        const data = {
          name: this.name,
          phone: this.phone,
          city: this.city,
        };
  
     await axios
          .post("/api/leads.store", data)
          .then((response) => {

            
            this.$setLoading(false);
            this.$notify({
              title: "message",
              text: "Your Information submited.We will contact with you.",
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

            
          this.$setLoading(false);
          });
  
          this.$setLoading(false);
  
      },
    },
  };
  </script>
  
  <style scoped>
  @import "./../assets/home.css";
  
  @media only screen and (max-width: 400px) {
      .mb-35 {
          margin-bottom: 36% !important;
      }
  }
  .background-radial-gradient {
   
              background-color: #009fc2;
              background-image: linear-gradient(315deg, #009fc2 0%, #0d0a0b 74%);
              backdrop-filter: blur(100px); /* Adjust the blur value as needed */
            
    /* background-color: #d9afd9;
  
    background-image: linear-gradient(300deg, #174d5e 10%, #000000 100%); */
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
    background-color: rgba(0, 0, 0, 0.705) !important;
    backdrop-filter: saturate(200%) blur(25px);
  }
  label {
    color: #fdfbfb;
  }
  
  span {
    color: #110e0e;
  }
  
  
  </style>