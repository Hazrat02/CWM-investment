<template>
  <body>
    <!-- ======= Header ======= -->

    <main id="main">
      <div >
        <HomeLayout>
          <section
            class="background-radial-gradient overflow-hidden content-wrapper"
          >
            <div
              class="container px-4 py-5 px-md-5 text-center text-lg-start my-5"
            >
              <div class="row gx-lg-5 align-items-center mb-5">
                <div
                  class="col-lg-6 mb-lg-0 mb-35"
                  style="z-index: 10; height: 50vw"
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
                    Analysts Integrate ESG analysis into our investment process,
                    where available, by focusing on companies with sustainable
                    business models and evaluating ESG-related risks as part of
                    the proprietary research recommendations we use throughout
                    the firm
                  </p>
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0 mt-5 position-relative">
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

                      <form
                        class="justify-content-center"
                        @submit.prevent="leadstore"
                      >
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
                            >Full Name <span style="color: red"> *</span></label
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
                            >Phone <span style="color: red"> *</span></label
                          >
                        </div>
                        <div class="form-outlinemb-1">
                          <select
                            class="form-select"
                            id="country"
                            v-model="country"
                          >
                            <option selected disabled>Select</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">
                              American Samoa
                            </option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antartica">Antarctica</option>
                            <option value="Antigua and Barbuda">
                              Antigua and Barbuda
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegowina">
                              Bosnia and Herzegowina
                            </option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">
                              British Indian Ocean Territory
                            </option>
                            <option value="Brunei Darussalam">
                              Brunei Darussalam
                            </option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">
                              Cayman Islands
                            </option>
                            <option value="Central African Republic">
                              Central African Republic
                            </option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">
                              Christmas Island
                            </option>
                            <option value="Cocos Islands">
                              Cocos (Keeling) Islands
                            </option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo">
                              Congo, the Democratic Republic of the
                            </option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                            <option value="Croatia">Croatia (Hrvatska)</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">
                              Czech Republic
                            </option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">
                              Dominican Republic
                            </option>
                            <option value="East Timor">East Timor</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">
                              Equatorial Guinea
                            </option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="France Metropolitan">
                              France, Metropolitan
                            </option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">
                              French Polynesia
                            </option>
                            <option value="French Southern Territories">
                              French Southern Territories
                            </option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard and McDonald Islands">
                              Heard and Mc Donald Islands
                            </option>
                            <option value="Holy See">
                              Holy See (Vatican City State)
                            </option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">
                              Iran (Islamic Republic of)
                            </option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option
                              value="Democratic People's Republic of Korea"
                            >
                              Korea, Democratic People's Republic of
                            </option>
                            <option value="Korea">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao">
                              Lao People's Democratic Republic
                            </option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon" selected>Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">
                              Libyan Arab Jamahiriya
                            </option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macau">Macau</option>
                            <option value="Macedonia">
                              Macedonia, The Former Yugoslav Republic of
                            </option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">
                              Marshall Islands
                            </option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia">
                              Micronesia, Federated States of
                            </option>
                            <option value="Moldova">
                              Moldova, Republic of
                            </option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">
                              Netherlands Antilles
                            </option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">
                              Norfolk Island
                            </option>
                            <option value="Northern Mariana Islands">
                              Northern Mariana Islands
                            </option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">
                              Papua New Guinea
                            </option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Kitts and Nevis">
                              Saint Kitts and Nevis
                            </option>
                            <option value="Saint LUCIA">Saint LUCIA</option>
                            <option value="Saint Vincent">
                              Saint Vincent and the Grenadines
                            </option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">
                              Sao Tome and Principe
                            </option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">
                              Slovakia (Slovak Republic)
                            </option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">
                              Solomon Islands
                            </option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia">
                              South Georgia and the South Sandwich Islands
                            </option>
                            <option value="Span">Spain</option>
                            <option value="SriLanka">Sri Lanka</option>
                            <option value="St. Helena">St. Helena</option>
                            <option value="St. Pierre and Miguelon">
                              St. Pierre and Miquelon
                            </option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard">
                              Svalbard and Jan Mayen Islands
                            </option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syrian Arab Republic</option>
                            <option value="Taiwan">
                              Taiwan, Province of China
                            </option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania">
                              Tanzania, United Republic of
                            </option>
                            <option value="Thailand">Thailand</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">
                              Trinidad and Tobago
                            </option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos">
                              Turks and Caicos Islands
                            </option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">
                              United Arab Emirates
                            </option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="United States">United States</option>
                            <option
                              value="United States Minor Outlying Islands"
                            >
                              United States Minor Outlying Islands
                            </option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Viet Nam</option>
                            <option value="Virgin Islands (British)">
                              Virgin Islands (British)
                            </option>
                            <option value="Virgin Islands (U.S)">
                              Virgin Islands (U.S.)
                            </option>
                            <option value="Wallis and Futana Islands">
                              Wallis and Futuna Islands
                            </option>
                            <option value="Western Sahara">
                              Western Sahara
                            </option>
                            <option value="Yemen">Yemen</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                          <div class="d-flex mb-2">
                            <label
                              class="form-label justify-content-start"
                              for="phone"
                              >Select Country
                              <span style="color: red"> *</span></label
                            >
                          </div>
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
                            >City <span style="color: red"> *</span></label
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

          <div class="additionals text-center py-5 mt-0 anm">
            <h2 class="text-white">
              INDIA'S <strong>NO.1 INVOICE</strong> DISCOUNTING PLATFORM
            </h2>
            <div class="container">
              <div class="row items-center justify-content-center">
                <div class="col-md-2 col-sm-4 box">
                  <i class="fas fa-file-invoice"></i>
                  <h4 class="counter"><span class="count">28000</span>+</h4>
                  <h6>Invoices Discounted</h6>
                </div>
                <div class="col-md-2 col-sm-4 box">
                  <i class="fas fa-exchange-alt"></i>
                  <h4 class="counter"><span class="count">75000</span>+</h4>
                  <h6>Transactions Processed</h6>
                </div>
                <div class="col-md-2 col-sm-4 box">
                  <i class="fas fa-rupee-sign"></i>
                  <h4 class="counter"><span class="count">250</span>+</h4>
                  <h6>Annual GMV in Cr</h6>
                </div>
                <div class="col-md-2 col-sm-4 box">
                  <i class="fas fa-chart-line"></i>
                  <h4 class="counter"><span class="count">0</span></h4>
                  <h6>NPA’s</h6>
                </div>
                <div class="col-md-2 col-sm-4 box">
                  <i class="fas fa-users"></i>
                  <h4 class="counter"><span class="count">18000</span>+</h4>
                  <h6>Investors</h6>
                </div>
              </div>
            </div>
          </div>
          <div style="  

background-image: linear-gradient( #000000 70%,#232b4e 10%);">
          <section class="first" id="round">
            <div class="container">
              <div class="need-title text-center">
                <h6 style="color: yellow;">OTHER INFO ABOUT US</h6>
                <h2>Top 4 Mistakes People Do While Investing</h2>
              </div>

              <div class="row" style="align-items: center">
                <div class="col-lg-5">
                  <img
                    class="img-fluid"
                    src="./../assets/frontend/img/condition.png"
                    alt=""
                  />
                </div>
                <div class="col-lg-7">
                  <div class="round-text">
                    <ul class="text-white">
                      <li>
                        <span style="background-color: #e22d00"> </span>
                        Each month 1 billion sports fans generate 8.5 billion
                        visits to a variety of sports websites. Traditionally,
                        those visits yield profits
                      </li>
                      <li>
                        <span style="background-color: #ff5644"> </span>
                        Merchant transaction fees when payment is done in BITS.
                      </li>
                      <li>
                        <span style="background-color: #1cc327"> </span>
                        All-season-long sales from most of Bitcoinus retail
                        partners.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
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

import { leadStore } from "../store/lead";
// import { notify } from 'vue3-notify'
export default {
  data() {
    return {
      name: "",
      phone: "",
      city: "",
      country: "Select",
      phnError: "",
    };
  },

  created() {
    const getContact = leadStore();

    // Try to get the data from the store
    const contactData = getContact.lead_page;

    if (contactData) {
      getContact.leadfalse();
    }

    this.$setLoading(false);
  },

  methods: {
    async leadstore() {
      this.$setLoading(true);
      if (localStorage.getItem("btn")) {
        this.$notify({
          title: "Error message",
          text: "You are already Submitted!",
          type: "error",
        });
      } else {
        if (
          String(this.phone).length === 10 ||
          String(this.phone).length === 12 ||
          String(this.phone).length === 13
        ) {
          const data = {
            name: this.name,
            phone: this.phone,
            city: this.city,
            country: this.country,
          };

          await axios
            .post("/api/leads.store", data)
            .then((response) => {
              localStorage.setItem("btn", "true");
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
        } else {
          this.$notify({
            title: "Error message",
            text: "Wrong Phone Number!",
            type: "error",
          });
        }
      }

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

.additionals {
  background: linear-gradient(to right, #009ec286, rgba(0, 0, 0, 0.4)),
    url("https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnphrgz8yfnjylrwfr0yl.png")
      no-repeat center center fixed;
  background-size: cover;
  color: #15d481;
}

.first {
  /* background: linear-gradient(
      to right,
      #00c2ab86,
      rgba(0, 0, 0, 0.896)
    ), */
  background: url("./../assets/frontend/img/1.png") no-repeat center / cover;
  /* background-size: cover; */

  padding: 100px 0;
}

.additionals h2 {
  margin-bottom: 30px;
}

.box {
  margin-bottom: 20px;
}

.box i {
  font-size: 40px;
  color: #66bb6a; /* Adjust color as needed */
  margin-bottom: 10px;
}

.counter {
  font-size: 24px;
  font-weight: bold;
}

.count {
  color: #f5a623;
}

.box h6 {
  margin-top: 5px;
  font-weight: normal;
  color: #6c757d;
}

.benefits .box {
  border: 10px solid #1d0897; /* Adjust color as needed */
}
.benefits .box i {
  color: #f5a623;
  /* size: 0.8rem; */
}
.benefits h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}

.benefits ul li {
  font-size: 1.7rem;
}

/* Define the keyframes for the backInRight animation */
@keyframes backInRight {
  0% {
    opacity: 0.7;
    transform: translateX(2000px) scale(0.7);
  }
  80% {
    opacity: 0.7;
    transform: translateX(0px) scale(0.7);
  }
  100% {
    opacity: 1;
    transform: translateX(0px) scale(1);
  }
}

/* Apply the animation to the desired element */
.anm {
  animation: backInRight 2s ease-out;
}
</style>