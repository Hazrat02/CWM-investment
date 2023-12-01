<script>
import isAuthenticated from "./../midleware/auth";
import { logout } from "./../midleware/auth";
import axios from "axios";
import { useAuthUserStore } from "./../store/user";
export default {
  data() {
    return {
      isAuthenticated: false,
      
      authUser: [],
    };
  },

  async created() {
    if (isAuthenticated()) {
      this.isAuthenticated = true;

      const userStore = useAuthUserStore();
      const authUser = userStore.authUser;

      if (authUser) {
        this.authUser = authUser;
      } else {
        // userStore.reSetAuthUser();
        this.authUser = await userStore.reSetAuthUser();
      }
    }
    this.$setLoading(false);
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
  <div>
    <HomeLayout>
      <!-- Header Start -->
      <div
        class="container-fluid hero-header py-5"
        style="
          .blur-background {
            background-color: #009fc2;
            background-image: linear-gradient(0deg, #009fc2 0%, #0d0a0b 74%);
            backdrop-filter: blur(100px); /* Adjust the blur value as needed */
          }
          
        "
      >
        <div class="container py-5 mb-0">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6">
              <h1 class="mb-3 animated slideInDown text-white">
                Your trust is our guide. Building and Preserving Wealth Since
                1989
              </h1>
              <p class="animated slideInDown">
                Our Portfolio Managers and Research Analysts Integrate ESG
                analysis into our investment process, where available, by
                focusing on companies with sustainable business models and
                evaluating ESG-related risks as part of the proprietary research
                recommendations we use throughout the firm.
              </p>

              <RouterLink
                v-if="!isAuthenticated"
                to="/login"
                class="btn btn-primary py-3 px-4 animated slideInDown"
                >LOGIN</RouterLink
              >
              <div v-if="isAuthenticated">
                <RouterLink
                  v-if="authUser.role == '0'"
                  to="/admin/dashboard"
                  class="btn btn-primary py-3 px-4 animated slideInDown"
                  >Dashboard</RouterLink
                >
                <RouterLink
                  v-else
                  to="/dashboard"
                  class="btn btn-primary py-3 px-4 animated slideInDown"
                  >Dashboard</RouterLink
                >
              </div>
            </div>
            <div class="col-lg-6 animated fadeIn">
              <img
                class="img-fluid animated pulse infinite"
                style="animation-duration: 3s"
                src="./../assets/frontend/img/hero-1.png"
                alt=""
              />
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
            <div class="col-lg-6 wow " >
              <img
                class="img-fluid"
                src="./../assets/frontend/img/about.png"
                alt=""
              />
            </div>
            <div class="col-lg-6 wow " >
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

      <!-- Features Start -->
      <div class="container-xxl py-5" style="
          .blur-background {
            background-color: #009fc2;
            background-image: linear-gradient(0deg, #009fc2 0%, #0d0a0b 74%);
            backdrop-filter: blur(100px); /* Adjust the blur value as needed */
          }
          
        ">
        <div class="container">
          <div
            class="text-center mx-auto wow "
           
            style="max-width: 500px"
          >
            <h1 class="display-6 text-white">Why Us!</h1>
            <p class="text-white fs-5 mb-5">
              The best in Investment Industry
            </p>
          </div>
          <div class="row g-5">
            <div class="col-lg-4 col-md-6 wow " >
              <div class="d-flex align-items-start">
                <img
                  class="img-fluid flex-shrink-0"
                  src="./../assets/frontend/img/icon-7.png"
                  alt=""
                />
                <div class="ps-4">
                  <h5 class="mb-3 text-white">Easy To Start</h5>
                  <span class="white-4"
                    >Our expert wealth manager shall assist you with a quick and
                    easy process for opening your account in the most efficient
                    manner.
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow " >
              <div class="d-flex align-items-start">
                <img
                  class="img-fluid flex-shrink-0"
                  src="./../assets/frontend/img/icon-6.png"
                  alt=""
                />
                <div class="ps-4">
                  <h5 class="mb-3 text-white">Safe & Secure</h5>
                  <span class="white-4"
                    >Our clients have their independent & secure portfolio
                    accounts with secure digital vaults which is directly
                    insured by Lloyd Bank of United Kingdom.
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow " >
              <div class="d-flex align-items-start">
                <img
                  class="img-fluid flex-shrink-0"
                  src="./../assets/frontend/img/icon-5.png"
                  alt=""
                />
                <div class="ps-4">
                  <h5 class="mb-3 text-white">Affordable Plans</h5>
                  <span class="white-4"
                    >We understand that not all our clients have the same
                    financial diversification. We have basic Investment Plans
                    starting from just $5000USD. Our wealth managers shall
                    assist you time and when you wish to diversify and increase
                    your portfolio with us.
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow ">
              <div class="d-flex align-items-start">
                <img
                  class="img-fluid flex-shrink-0"
                  src="./../assets/frontend/img/icon-4.png"
                  alt=""
                />
                <div class="ps-4">
                  <h5 class="mb-3 text-white">Secure Storage</h5>
                  <span class="white-4"
                    >For our luxury investment clients, we offer access to
                    direct SWISS Digital Vault facility accessible only by our
                    client’s preregistered biometrics</span
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow " >
              <div class="d-flex align-items-start">
                <img
                  class="img-fluid flex-shrink-0"
                  src="./../assets/frontend/img/icon-3.png"
                  alt=""
                />
                <div class="ps-4">
                  <h5 class="mb-3 text-white">Protected By Insurance</h5>
                  <span class="white-4"
                    >All the assets of the company, with its portfolio of our
                    invested client is directly secured by Lloyd Bank of United
                    Kingdom.
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow " >
              <div class="d-flex align-items-start">
                <img
                  class="img-fluid flex-shrink-0"
                  src="./../assets/frontend/img/icon-8.png"
                  alt=""
                />
                <div class="ps-4">
                  <h5 class="mb-3 text-white">24/7 Support</h5>
                  <span class="white-4"
                    >Through our designated virtual offices across the globe, we
                    are able to cater our investor clients 24*7 for any
                    assistance that may be required.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Features End -->

      <!-- Service Start -->
      <div class="container-xxl py-5" style="
          .blur-background {
            background-color: #0d0a0b;
            background-image: linear-gradient(300deg, #0d0a0b  0%, #009fc2 74%);
            backdrop-filter: blur(100px); /* Adjust the blur value as needed */
          }
          
        ">
        <div class="container py-5">
          <div
            class="text-center mx-auto wow "
           
            style="max-width: 500px"
          >
            <h1 class="display-6">Services</h1>
            <p class="text-white fs-5 mb-5">
              Buy, Sell And Exchange Cryptocurrency
            </p>
          </div>
          
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow ">
              <div class="service-item bg-glass p-5">
                <img
                  class="img-fluid mb-4"
                  src="./../assets/frontend/img/icon-5.png"
                  alt=""
                />
                <h5 class="mb-3 text-white">Currency Exchange</h5>
                <p class="">
                  For clients who wish to BUY/SELL Crypto with our platform can
                  enjoy the best and most minimal exchange rates in the market.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 wow " >
              <div class="service-item bg-glass p-5">
                <img
                  class="img-fluid mb-4"
                  src="./../assets/frontend/img/icon-8.png"
                  alt=""
                />
                <h5 class="mb-3 text-white">Crypto Escrow Services</h5>
                <p>
                  For our High Net Worth Corporate Clients we offer Crypto
                  Escrow Services for safe & secure entity transactions.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow " >
              <div class="service-item bg-glass p-5">
                <img
                  class="img-fluid mb-4"
                  src="./../assets/frontend/img/icon-3.png"
                  alt=""
                />
                <h5 class="mb-3 text-white">Currency Transaction</h5>
                <p>
                  With ZERO transfer rates policy, CWM is the best investment
                  platform for clients without any transactional deductions.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow " >
              <div class="service-item bg-glass p-5">
                <img
                  class="img-fluid mb-4"
                  src="./../assets/frontend/img/icon-7.png"
                  alt=""
                />
                <h5 class="mb-3 text-white">Currency Wallet</h5>
                <p>
                  To facilitate our investor clients with the ease of transfer
                  our company has embraced Crypto Wallet Transfers as the most
                  efficient, discreet & safest form of exchange and transfer for
                  all deposits & withdrawals which will be directly linked with
                  their respective crypto wallets.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow " >
              <div class="service-item bg-glass p-5">
                <img
                  class="img-fluid mb-4"
                  src="./../assets/frontend/img/icon-9.png"
                  alt=""
                />
                <h5 class="mb-3 text-white">Portfolio Investment</h5>
                <p>
                  Our expert advisors provide personalized investment
                  diversification structure for our clients who wish to invest
                  in Crypto Currency, Gold & Silver ETF, Forex Currency Trading,
                  Commodities Trading etc.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 wow " >
              <div class="service-item bg-glass p-5">
                <img
                  class="img-fluid mb-4"
                  src="./../assets/frontend/img/icon-2.png"
                  alt=""
                />
                <h5 class="mb-3 text-white">Luxury Auction Investment</h5>
                <p>
                  As per the Knight Frank Index, our company diversify client’s
                  investments across various luxury segments for maximum return
                  on investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Service End -->

      <!-- FAQs Start -->
      <div class="container-xxl py-2" style="
          .blur-background {
            background-color: #009fc2;
            background-image: linear-gradient(90deg,  #009fc2 0%,  #0d0a0b 74%);
            backdrop-filter: blur(100px); /* Adjust the blur value as needed */
          }
          
        ">
        <div class="container">
          <div
            class="text-center mx-auto wow "
           
            style="max-width: 500px"
          >
            <h1 class="display-6 text-white">FAQs</h1>
            <p class="text-white fs-5 mb-5">Frequently Asked Questions</p>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item wow  bg-glass" >
                  <h2 class="accordion-header " id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is the minimum investment as an investor client can I
                      start with?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      A – Minimum Investment starts from $5000USD only, however
                      to access higher return on investments we request our
                      clients to co-ordinate with the assigned wealth manager.
                    </div>
                  </div>
                </div>
                <div class="accordion-item wow  bg-glass" >
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What kind of return on investments can I as an investor
                      expect?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      A – For our retail investors the return on investments is
                      as lucrative as 5% month on month. However, the return on
                      investments may vary for investments 15% - 20% or even
                      higher depending on the nature of diversification.
                    </div>
                  </div>
                </div>
                <div class="accordion-item wow  bg-glass" >
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How safe is my investment as an investor client?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      A – Each Investor has exclusive access to his privatized
                      personal digital locker account which only client has the
                      exclusive access to and the personal digital locker is
                      directly linked with the investor’s crypto wallet for
                      smart and efficient deposit & withdrawals.
                    </div>
                  </div>
                </div>
                <div class="accordion-item wow  bg-glass" >
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      What sectors are the investment portfolios diversified
                      across?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      A – Generalizing portfolio diversification can be always
                      tricky. Our wealth managers, based on the risk to return
                      ratio; best optimize advise our clients to diversify
                      across some mentionable sectors such as Forex, Crypto,
                      Gold & Silver Exchange Trade Fund, Luxury Auction
                      Investments, Real Estate Investment Trust etc.
                    </div>
                  </div>
                </div>

                <div class="accordion-item wow  bg-glass" >
                  <h2 class="accordion-header" id="headingSix">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      As an Investor client, is there any LOCK – IN Period from
                      the time of investment?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      A – No, as a strict company policy, we do not have any
                      LOCK- IN Period for the portfolios set by our investor
                      clients. The client has the freedom to forfeit his
                      investment with the company anytime during the tenure of
                      his investment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <!-- FAQs Start -->
    </HomeLayout>
  </div>
</template>

<style scoped>
@import "./../assets/home.css";


.bg-glass {
  background-color: rgba(7, 38, 51, 0.692) !important;
  backdrop-filter: saturate(200%) blur(25px);
}
.white-4{
  color: rgb(230, 230, 221);
}
</style>
