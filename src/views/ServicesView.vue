
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
    <div class="container-fluid hero-header bg-light py-5 mb-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 mb-3 animated slideInDown">Services</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                            
                            <li class="breadcrumb-item" aria-current="page">Services</li>
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


    <!-- Service Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <h1 class="display-6">Services</h1>
                <p class="text-primary fs-5 mb-5">Buy, Sell And Exchange Cryptocurrency</p>
            </div>
            <div class="row g-4">
            
            
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item bg-light p-5">
                <img
                  class="img-fluid mb-4"
                  src="./../assets/frontend/img/icon-5.png"
                  alt=""
                />
                <h5 class="mb-3">Currency Exchange</h5>
                <p>
                    For clients who wish to BUY/SELL Crypto with our platform can enjoy the best and most minimal exchange rates in the market.

                </p>
              </div>
            </div>
           
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item bg-light p-5">
                <img
                  class="img-fluid mb-4"
                  src="./../assets/frontend/img/icon-8.png"
                  alt=""
                />
                <h5 class="mb-3">Crypto Escrow Services</h5>
                <p>
                    For our High Net Worth Corporate Clients we offer Crypto Escrow Services for safe & secure entity transactions.

                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item bg-light p-5">
                <img
                  class="img-fluid mb-4"
                  src="./../assets/frontend/img/icon-3.png"
                  alt=""
                />
                <h5 class="mb-3">Currency Transaction</h5>
                <p>
                    With ZERO transfer rates policy, CWM is the best investment platform for clients without any transactional deductions.

                </p>
              </div>
              
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item bg-light p-5">
                <img
                  class="img-fluid mb-4"
                  src="./../assets/frontend/img/icon-7.png"
                  alt=""
                />
                <h5 class="mb-3">Currency Wallet</h5>
                <p>
                To facilitate our investor clients with the ease of transfer our company has embraced Crypto Wallet Transfers as the most efficient, discreet & safest form of exchange and transfer for all deposits & withdrawals which will be directly linked with their respective crypto wallets.

                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item bg-light p-5">
                <img
                  class="img-fluid mb-4"
                  src="./../assets/frontend/img/icon-9.png"
                  alt=""
                />
                <h5 class="mb-3">Portfolio Investment</h5>
                <p>
                    Our expert advisors provide personalized investment diversification structure for our clients who wish to invest in Crypto Currency, Gold & Silver ETF, Forex Currency Trading, Commodities Trading etc.
                </p>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item bg-light p-5">
                <img
                  class="img-fluid mb-4"
                  src="./../assets/frontend/img/icon-2.png"
                  alt=""
                />
                <h5 class="mb-3">Luxury Auction Investment</h5>
                <p>
                    As per the Knight Frank Index, our company diversify client’s investments across various luxury segments for maximum return on investments.

                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- Service End -->


    


    </HomeLayout>
  </div>
</template>

<style scoped>
@import "./../assets/home.css";
</style>

