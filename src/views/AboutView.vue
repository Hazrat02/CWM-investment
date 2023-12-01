
<script>

export default {
  data() {
    return {
    };
  },

 async created() {
   
    this.$setLoading(false);
  },


  methods: {
  
   
  },
};
</script>

<template>
  <div>
    <HomeLayout>
      

    
    <!-- Header Start -->
    <div class="container-fluid hero-header py-5 " style="
          .blur-background {
            background-color: #0d0a0b ;
            background-image: linear-gradient(90deg, #0d0a0b 0%, #009fc2 74%);
            backdrop-filter: blur(100px); /* Adjust the blur value as needed */
          }
        ">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 mb-3 animated slideInDown text-white">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>

                            <li class="breadcrumb-item " aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-lg-6 animated fadeIn">
                    <img class="img-fluid animated pulse infinite" style="animation-duration: 3s;" src="./../assets/frontend/img/hero-2.png"
                        alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->

      <!-- About Start -->
      <div class="container-xxl py-3 mt-0"  style="
          .blur-background {
            background-color: #0d0a0b ;
            background-image: linear-gradient(360deg, #0d0a0b 0%, #009fc2 74%);
            backdrop-filter: blur(100px); /* Adjust the blur value as needed */
          }
        ">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img
                class="img-fluid"
                src="./../assets/frontend/img/about.png"
                alt=""
              />
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="h-100">
                <h1 class="display-6">About Us</h1>
                <p class="text-white fs-5 mb-4">
                  The Most Trusted Cryptocurrency Platform
                </p>
                <p class="text-dark">
                  Research backed data-driven investment strategies. We choose
                  the right asset mix for your risk profile in the all market
                  conditions. We add incremental alpha using dynamic allocation
                  to equity factor models.
                </p>

                <div class="d-flex align-items-center mb-2">
                  <i
                    class="fa fa-check bg-dark text-white btn-sm-square rounded-circle me-3 fw-bold"
                  ></i>
                  <span
                    >Factor Investing - We explain the market movement using
                    quantitative equity factor models.</span
                  >
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i
                    class="fa fa-check bg-dark text-white btn-sm-square rounded-circle me-3 fw-bold"
                  ></i>
                  <span
                    >Regime Modelling - Markets do not stay the same. Our regime
                    models forecast the market cycle.
                  </span>
                </div>
                <div class="d-flex align-items-center mb-4">
                  <i
                    class="fa fa-check bg-dark text-white btn-sm-square rounded-circle me-3 fw-bold"
                  ></i>
                  <span
                    >Momentum Investing - Momentum is the stringest factor in
                    economics and an important part of our philosophy</span
                  >
                </div>
                <div class="d-flex align-items-center mb-4">
                  <i
                    class="fa fa-check bg-dark  text-white btn-sm-square rounded-circle me-3 fw-bold"
                  ></i>
                  <span
                    >Risk Modelling Risk Management is at the core of our
                    investing. We have a multi-level approach.
                  </span>
                </div>
                <div class="d-flex align-items-center mb-4">
                  <i
                    class="fa fa-check bg-dark text-white btn-sm-square rounded-circle me-3 fw-bold"
                  ></i>
                  <span
                    >Asset Allocation - We choose the best mix of investment
                    assets for any market condition.</span
                  >
                </div>
                <div class="d-flex align-items-center mb-4">
                  <i
                    class="fa fa-check bg-dark text-white btn-sm-square rounded-circle me-3 fw-bold"
                  ></i>
                  <span
                    >Artificial Intelligence - We use machine learning models to
                    forecast risk and reward in the market
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About End -->

    </HomeLayout>
  </div>
</template>

<style scoped>
@import "./../assets/home.css";
</style>
