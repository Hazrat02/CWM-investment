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



          <header>
         <div class="header-top">
            <div class="container">
               <div class="row">
                  <div class="col-12 col-md-3">
                     <a href="https://invoicetrades.com/" class="logo">
                     <img src="images/logo-black.png" alt="Invoice Trades">
                     </a>
                  </div>
                  <div class="col-12 col-md-9">
                     <div class="callus">
                        Toll Free: <a href="tel:1800 258 6228">1800 258 6228</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <section class="header">
         <div class="container">
            <div class="row">
               <div class="col-lg-7">
                  <div class="header-information">
                     <h1>Are you looking for<br />
                        <strong>Guaranteed fixed returns</strong>?
                     </h1>
                     <div class="bordered-box">
                     	<h4>Why Invoice Trades</h4>
                        <ul>
                           <li>Assured Fixed Returns in short tenure.</li>
                           <li>Internal Rate Of Return Upto 24% PA.</li>
                           <li>ISO Certified Bill discounting facilitator.</li>
                           <li>Helps to avoid multiple transactions.</li>
                           <li>18,000+ Investors.</li>
                           <li>0 NPA's</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-lg-5" >
                  <form id="enquiryForm">
                  <div class="header-lp-forms">
                     <h3>Our team of experts is here and fully equipped to answer your queries.</h3>
                     <!-- Form Start -->                     
                     <div class="form-group">
                        <input type="text" id="username" name="username" placeholder="Name (As Per PAN)" class="form-control">
                     </div>
                     <div class="form-group">
                        <input type="tel" id="mobile" name="mobile" placeholder="Phone" class="form-control">
                     </div>
                     <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Email" class="form-control">
                     </div>
                     <div class="form-group">
                        <input type="text" id="InvestmentAmount" name="InvestmentAmount" placeholder="Investment Amount (₹ 25,000 to ₹ 50,00,000)" class="form-control">
                     </div>
                     <div class="form-group">
                        <select name="Category" id="Category" class="form-control">
                           <option value="" >Select Category</option>
                           <option value="Individual">Individual</option>
                           <option value="Business">Business</option>
                        </select>
                     </div>
                     <div class="row">
                          <div class="col-md-6">
                              <div class="form-group">
                                  <input type="text" id="StateName" name="StateName" placeholder="Enter State Name" class="form-control">
                               </div>
                          </div>
                          <div class="col-md-6">
                              <div class="form-group">
                                  <input type="text" id="CityName" name="CityName" placeholder="Enter City Name" class="form-control">
                               </div>
                          </div>
                     </div>
                     
                     <div class="form-group">
                      <div class="custom-control custom-checkbox">
                         <input type="checkbox" class="custom-control-input" id="checkbox1" >
                         <label class="custom-control-label" for="checkbox1">I agree and authorize the team to contact me. This will override the registry with DNC / NDNC</label>
                      </div>
                   </div>
                   <div class="form-group">
                      <input id="submitBtn" type="submit" class="btn btn-danger" value="Enquire Now" >
                   </div>
                     </div>
                     
                     <!-- <input type="hidden" name="subcta1" id="subcta1" value="cta : Main Enquiry Form">
                     <input type="hidden" name="lpnamecta1" id="lpnamecta1" value="Guaranteed Fixed Returns">
                     <input type="hidden" name="utm_source_cta1" id="utm_source_cta1" value="">
                     <input type="hidden" name="utm_medium_cta1" id="utm_medium_cta1" value="">
                     <input type="hidden" name="utm_campaign_cta1" id="utm_campaign_cta1" value="">
                     <input type="hidden" name="utm_campaignid_cta1" id="utm_campaignid_cta1" value="">
                     <input type="hidden" name="utm_keyword_cta1" id="utm_keyword_cta1" value=""> -->
                     <!-- <div class="form-group">
                        <div id="responsecta1" style="display: none;text-align: center;"></div>
                     </div> -->
                     
                     <!-- end of form -->
                  </form>
                  </div>  
            </div>
         </div>
      </section>
      <section class="additionals text-center">
         <h2>INDIA'S <strong>NO.1 INVOICE</strong> DISCOUNTING PLATFORM</h2>
         <div class="container">
            <div class="row items-center">
              <div class="box">
                  <i class="icon tw"></i>
                  <h4 class="counter"><span class="count">28000</span>+</h4>
                  <h6>Invoices Discounted</h6>
               </div>
               <div class="box">
                  <i class="icon on"></i>
                  <h4 class="counter"><span class="count">75000</span>+</h4>
                  <h6>Transactions Processed</h6>
               </div>
               
               <div class="box">
                  <i class="icon th"></i>
                  <h4 class="counter"><span class="count">250</span>+</h4>
                  <h6>Annual GMV in Cr</h6>
               </div>
               <div class="box">
                  <i class="icon fo"></i>
                  <h4 class="counter"><span class="count">0</span></h4>
                  <h6>NPA’s</h6>
               </div>
               <div class="box">
                  <i class="icon fo"></i>
                  <h4 class="counter"><span class="count">18000</span>+</h4>
                  <h6>Investors</h6>
               </div>
            </div>
         </div>
      </section>
      
      <section class="benefits-servises">
         <div class="container">
            <div class="row">
               <div class="col-md-9 offset-2">
                  <div class="benefits">
                     <div class="box">
                        <h2 class="text-uppercase">Top 4 Mistakes People Do While Investing</h2>
                        <ul>
                           <li>What is “risk tolerance”?</li>
                           <li>What you need, where it will go, and when they'll get it back?</li>
                           <li>Traditional Investment Method i.e. Fixed Deposites or MF?</li>
                           <li>Incomplete information or lack awareness of safe investment methods i.e. Invoice Discounting?</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="services">
<!--                     <h2 class="text-uppercase"><strong>Products</strong> & <strong>Services</strong> We Offer</h2>-->
<!--
                     <div class="owl-carousel" id="products">
                        <div class="item">
                           <div class="slider-box">
                              <img src="images/guarantee-on-fixed-deposit.jpg" alt="">
                              <div class="caption">
                                 <h3>Guaranteed <strong>Fixed Returns</strong> on Investments</h3>
                              </div>
                           </div>
                        </div>
                        <div class="item">
                           <div class="slider-box">
                              <img src="images/bill-discounting.jpg" alt="">
                              <div class="caption">
                                 <h3><strong>Bill</strong> Discounting</h3>
                              </div>
                           </div>
                        </div>
                     </div>
-->
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      <section class="about-information">
         <div class="container">
           	<div class="ourUspBlock">
           		<h2 class="text-center">Our <strong>USP's</strong></h2>
           		<p>Are you in two minds about whether you should go with invoice discounting or not? We'll put your mind at ease. Here are a few advantages of invoice discounting for you to consider.</p>
           		
           		<div>
                     <a data-toggle="modal" data-target="#videoModal"><img src="images/video-img.jpg" width="60%" /></a>
                </div>
           		
           		<ul class="uspTags clearfix">
					<li>Assured Fixed Returns</li>
					<li>Backed by Bank Guarantee</li>
					<li>Collateral Based</li>
					<li>Easy Deposits and Withdrawals through E-Wallet</li>
					<li>Hassle-Free</li>
					<li>Improved Cash Flow</li>
					
					<li>No Pre-Closure or Hidden Charges</li>
					
					<li>Confidentiality</li>
				 </ul>
           	</div>
<!--
            <div class="row mt-5">
               
               <div class="col-lg-8">
                  <h2>Our <strong>USP's</strong></h2>
                  <article>
                     <h5>Are you in two minds about whether you should go with invoice discounting or not? We'll put your mind at ease. Here are a few advantages of invoice discounting for you to consider.</h5>
                     <ul class="clearfix">
                     	<li>Assured Returns</li>
                     	<li>Easy Deposits and withdrawals through E-Wallet</li>
                        <li>Quick Cash</li>
                        <li>Improves Cash Flow</li>
                        <li>Releases Locked Cash</li>
                        <li>No asset as collateral</li>
                        <li>Reduced collection period</li>
                        <li>Control</li>
                        <li>Confidentiality</li>
                     </ul>
                  </article>
               </div>
               <div class="col-lg-4">
                  <div class="video-box">
                     <a data-toggle="modal" data-target="#videoModal"><img src="images/video-img.jpg" alt="" ></a>
                  </div>
               </div>
            </div>
-->
         </div>
         <div class="modal" id="videoModal">
            <div class="modal-dialog modal-lg">
               <div class="modal-content">
                  <div class="modal-body">
                     <button type="button" class="close" data-dismiss="modal">&times;</button>
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/fM_QDdSqJSo?si=nTPijx-hCzWLJQD7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="book-appointment">
         <div class="container text-center">
            <a href="tel:1800 258 6228">Call Us: 1800 258 6228</a>
         </div>
      </section>
<!--
      <section class="testimonials">
         <div class="container">
            <h2 class="text-center text-uppercase">Google Reviews</h2>
            <div class="contain">
			  <div id="owl-carousel" class="owl-carousel owl-theme">
				<div class="item">
				  1
				</div>
				<div class="item">
				  2
				</div>
				<div class="item">
				  3
				</div>
				<div class="item">
				  4
				</div>
				<div class="item">
				  5
				</div>
				<div class="item">
				  6
				</div>
			  </div>
			</div>
            
         </div>
      </section>
-->
      <section class="mt-5">
      	<div class="container">
      		<h4>Tags</h4>
      		<ul class="tagList">
				<li>Invoice finance |</li>
				<li>Invoice finance facility |</li>
				<li>Invoice loans |</li>
				<li>Invoice finance for small business |</li>
				<li>Invoice factoring loan |</li>
				<li>Business invoice financing |</li>
				<li>Invoice financing loan |</li>
				<li>Invoice lending |</li>
				<li>Invoice factoring for small business |</li>
				<li>Invoice finance providers |</li>
				<li>Invoice funding companies |</li>
				<li>Invoice loan for small business |</li>
				<li>Business invoice loans |</li>
				<li>Selective invoice finance |</li>
				<li>Instant invoice finance |</li>
				<li>Invoice discounting meaning |</li>
				<li>Invoice advance loan |</li>
				<li>Online invoice factoring |</li>
				<li>Invoice based financing |</li>
				<li>Instant invoice factoring |</li>
				<li>Factoring companies for small businesses |</li>
				<li>Invoice factoring example |</li>
				<li>Factoring loans |</li>
				<li>Invoice discounting  |</li>
				<li>Factoring for small businesses |</li>
				<li>Factoring finance |</li>
				<li>Short term invoice finance |</li>
				<li>Business factoring loans |</li>
				<li>Invoice loan payment |</li>
				<li>Factoring service |</li>
				<li>Invoice financing rates |</li>
				<li>Invoice factoring meaning |</li>
				<li>Factoring bank |</li>
				<li>Invoice factoring for small business |</li>
				<li>Invoice factoring loans |</li>
				<li>One off invoice factoring |</li>
				<li>Fast invoice factoring |</li>
				<li>Invoice factoring for new business |</li>
				<li>Sell unpaid invoices |</li>
				<li>Sell invoices for cash |</li>
				<li>Factoring b2b |</li>
				<li>Invoice factoring fees |</li>
				<li>Invoice factoring banks |</li>
				<li>Invoice factoring platform |</li>
				<li>Invoice factoring near me |</li>
				<li>Fund through |</li>
				<li>Factoring costs |</li>
				<li>Unpaid invoices |</li>
				<li>A factoring company |</li>
				<li>Invoice website |</li>
				<li>Invoice payment |</li>
				<li>Sell invoice to collection agency |</li>
			<li>Invoice for services |</li>
			<li>Create an invoice |</li>
			<li>Best invoice app |</li>
			<li>Cash for invoices |</li>
			<li>Invoicing for small business |</li>
			<li>Invoice online free |</li>
			<li>Make an invoice online free |</li>
			<li>Best invoice app for small business |</li>
			<li>Sell your unpaid invoices |</li>
			<li>Best invoice software |</li>
			<li>Healthcare factoring companies |</li>
			<li>Invoice program |</li>
			<li>Low risk High returns |</li>
			<li>High returns with low risk |</li>
			<li>Invoice discounting in India |</li>

      		</ul>
      	</div>
      </section>
      <footer>
        <div>
 <a href="javascript:;" data-toggle="modal" data-target="#aboutus">About us</a>
        <li><a href="javascript:;" data-toggle="modal" data-target="#terms">Terms & Conditions</a></li>
        <li> <a href="javascript:;" data-toggle="modal" data-target="#privacy">Privacy Policy</a></li>     
         </div>    
      </footer>
      <div class="mobile-activity">
         <a href="tel:18002586228">Call US</a>
         <a href="#contactForms">Contact Now</a>
      </div>
      <!-- Whatsapp Icon -->
      <!-- <div class="hidden-md hidden-lg">
         <a target="_blank" href="https://api.whatsapp.com/send?phone=+918208333505&text=Hello%20I'm%20interested%20in%20Cadence%20Academy%20">
         <img src="images/whatsapp-icon-square.svg" alt="whatsapp-secktop-icon" style="position: fixed;height: 6%;left: 0px;bottom: 10px;margin-top: 20px;padding-left: 20px;z-index: 9999;"></a>      
         </div>
         <div class="hidden-sm hidden-xs">
         <a target="_blank" href="https://web.whatsapp.com/send?phone=+918208333505&text=Hello%20I'm%20interested%20in%20Cadence%20Academy%20">
         <img src="images/whatsapp-icon-square.svg" alt="whatsapp-secktop-icon" style="position: fixed;height: 5%;left: 0px;bottom: 10px;margin-top: 20px;padding-left: 20px;z-index: 9999;"></a>      
         </div> -->
      <!-- End of Whatsapp -->
      <!-- Popup CTA 1 -->
      <div id="cta1" class="modal fade form-model" role="dialog">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <h5>Please Submit the form to Book Your Appointment</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
               </div>
               <div class="modal-body">
                  <div class="formsmodel">
                     <!-- Form Start -->
                     <div class="form-group">
                        <input type="text" id="incomecta2" name="incomecta2" placeholder="(₹ 25,000 to ₹ 50,00,000)" class="form-control">
                     </div>
                     <div class="form-group">
                        <input type="text" id="namecta2" name="namecta2" placeholder="Name (As Per PAN)" class="form-control">
                     </div>
                     <div class="form-group">
                        <input type="tel" id="phonecta2" name="phonecta2" placeholder="Phone" class="form-control">
                     </div>
                     <div class="form-group">
                        <input type="email" id="emailcta2" name="emailcta2" placeholder="Email" class="form-control">
                     </div>
                     <div class="form-group">
                        <select name="categorycta2" id="categorycta2" class="form-control">
                           <option value="">Select Category</option>
                           <option value="Individual">Individual</option>
                           <option value="Business">Business</option>
                        </select>
                     </div>
                     <div class="row">
                        <div class="col-md-6 col-12">
                           <div class="form-group">
                              <select id="stateselectcta2" name="stateselectcta2" size="1" onchange="makeSubmenuCtaTwo(this.value)" class="form-control">
                                 <option value="" selected>Select state</option>
                                 <option value="Andhra Pradesh">Andhra Pradesh</option>
                                 <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                 <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                 <option value="Assam">Assam</option>
                                 <option value="Bihar">Bihar</option>
                                 <option value="Chandigarh">Chandigarh</option>
                                 <option value="Chhattisgarh">Chhattisgarh</option>
                                 <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                 <option value="Daman and Diu">Daman and Diu</option>
                                 <option value="Delhi">Delhi</option>
                                 <option value="Lakshadweep">Lakshadweep</option>
                                 <option value="Puducherry">Puducherry</option>
                                 <option value="Goa">Goa</option>
                                 <option value="Gujarat">Gujarat</option>
                                 <option value="Haryana">Haryana</option>
                                 <option value="Himachal Pradesh">Himachal Pradesh</option>
                                 <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                 <option value="Jharkhand">Jharkhand</option>
                                 <option value="Karnataka">Karnataka</option>
                                 <option value="Kerala">Kerala</option>
                                 <option value="Madhya Pradesh">Madhya Pradesh</option>
                                 <option value="Maharashtra">Maharashtra</option>
                                 <option value="Manipur">Manipur</option>
                                 <option value="Meghalaya">Meghalaya</option>
                                 <option value="Mizoram">Mizoram</option>
                                 <option value="Nagaland">Nagaland</option>
                                 <option value="Odisha">Odisha</option>
                                 <option value="Punjab">Punjab</option>
                                 <option value="Rajasthan">Rajasthan</option>
                                 <option value="Sikkim">Sikkim</option>
                                 <option value="Tamil Nadu">Tamil Nadu</option>
                                 <option value="Telangana">Telangana</option>
                                 <option value="Tripura">Tripura</option>
                                 <option value="Uttar Pradesh">Uttar Pradesh</option>
                                 <option value="Uttarakhand">Uttarakhand</option>
                                 <option value="West Bengal">West Bengal</option>
                              </select>
                           </div>
                        </div>
                        <div class="col-md-6 col-12">
                           <div class="form-group">
                              <select id="cityselectcta2" name="cityselectcta2" size="1" class="form-control">
                                 <option value="" disabled selected>Select City</option>
                                 <option></option>
                              </select>
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                        <div class="custom-control custom-checkbox">
                           <input type="checkbox" class="custom-control-input" id="checkbox2" checked>
                           <label class="custom-control-label" for="checkbox2">I agree and authorize the team to contact me. This will override the registry with DNC / NDNC</label>
                        </div>
                     </div>
                     <input type="hidden" name="subcta2" id="subcta2" value="cta : Book Your Appointment Now">
                     <input type="hidden" name="lpnamecta2" id="lpnamecta2" value="Guaranteed Fixed Returns">
                     <input type="hidden" name="utm_source_cta2" id="utm_source_cta2" value="">
                     <input type="hidden" name="utm_medium_cta2" id="utm_medium_cta2" value="">
                     <input type="hidden" name="utm_campaign_cta2" id="utm_campaign_cta2" value="">
                     <input type="hidden" name="utm_campaignid_cta2" id="utm_campaignid_cta2" value="">
                     <input type="hidden" name="utm_keyword_cta2" id="utm_keyword_cta2" value="">
                     <div class="form-group">
                        <div id="responsecta2" style="display: none;text-align: center;"></div>
                     </div>
                     <div class="form-group">
                        <input id="submit" type="submit" class="btn btn-danger" value="Enquire Now" onclick="postToCtaTwo()">
                     </div>
                     <!-- end of form -->
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- End CTA 1 -->
      <!-- Popup CTA 2 -->
      <div id="cta2" class="modal fade form-model" role="dialog">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <h5>Please Submit the form to Book Your Appointment</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
               </div>
               <div class="modal-body">
                  <div class="formsmodel">
                     <!-- Form Start -->
                     <div class="form-group">
                        <input type="text" id="incomecta3" name="incomecta3" placeholder="(₹ 25,000 to ₹ 50,00,000)" class="form-control">
                     </div>
                     <div class="form-group">
                        <input type="text" id="namecta3" name="namecta3" placeholder="Name (As Per PAN)" class="form-control">
                     </div>
                     <div class="form-group">
                        <input type="tel" id="phonecta3" name="phonecta3" placeholder="Phone" class="form-control">
                     </div>
                     <div class="form-group">
                        <input type="email" id="emailcta3" name="emailcta3" placeholder="Email" class="form-control">
                     </div>
                     <div class="form-group">
                        <select name="categorycta3" id="categorycta3" class="form-control">
                           <option value="">Select Category</option>
                           <option value="Individual">Individual</option>
                           <option value="Business">Business</option>
                        </select>
                     </div>
                     <div class="row">
                        <div class="col-md-6 col-12">
                           <div class="form-group">
                              <select id="stateselectcta3" name="stateselectcta3" size="1" onchange="makeSubmenuctaThree(this.value)" class="form-control">
                                 <option value="" selected>Select state</option>
                                 <option value="Andhra Pradesh">Andhra Pradesh</option>
                                 <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                 <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                 <option value="Assam">Assam</option>
                                 <option value="Bihar">Bihar</option>
                                 <option value="Chandigarh">Chandigarh</option>
                                 <option value="Chhattisgarh">Chhattisgarh</option>
                                 <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                 <option value="Daman and Diu">Daman and Diu</option>
                                 <option value="Delhi">Delhi</option>
                                 <option value="Lakshadweep">Lakshadweep</option>
                                 <option value="Puducherry">Puducherry</option>
                                 <option value="Goa">Goa</option>
                                 <option value="Gujarat">Gujarat</option>
                                 <option value="Haryana">Haryana</option>
                                 <option value="Himachal Pradesh">Himachal Pradesh</option>
                                 <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                 <option value="Jharkhand">Jharkhand</option>
                                 <option value="Karnataka">Karnataka</option>
                                 <option value="Kerala">Kerala</option>
                                 <option value="Madhya Pradesh">Madhya Pradesh</option>
                                 <option value="Maharashtra">Maharashtra</option>
                                 <option value="Manipur">Manipur</option>
                                 <option value="Meghalaya">Meghalaya</option>
                                 <option value="Mizoram">Mizoram</option>
                                 <option value="Nagaland">Nagaland</option>
                                 <option value="Odisha">Odisha</option>
                                 <option value="Punjab">Punjab</option>
                                 <option value="Rajasthan">Rajasthan</option>
                                 <option value="Sikkim">Sikkim</option>
                                 <option value="Tamil Nadu">Tamil Nadu</option>
                                 <option value="Telangana">Telangana</option>
                                 <option value="Tripura">Tripura</option>
                                 <option value="Uttar Pradesh">Uttar Pradesh</option>
                                 <option value="Uttarakhand">Uttarakhand</option>
                                 <option value="West Bengal">West Bengal</option>
                              </select>
                           </div>
                        </div>
                        <div class="col-md-6 col-12">
                           <div class="form-group">
                              <select id="cityselectcta3" name="cityselectcta3" size="1" class="form-control">
                                 <option value="" disabled selected>Select City</option>
                                 <option></option>
                              </select>
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                        <div class="custom-control custom-checkbox">
                           <input type="checkbox" class="custom-control-input" id="checkbox3" checked>
                           <label class="custom-control-label" for="checkbox3">I agree and authorize the team to contact me. This will override the registry with DNC / NDNC</label>
                        </div>
                     </div>
                     <input type="hidden" name="subcta3" id="subcta3" value="cta : Book Your Appointment Now">
                     <input type="hidden" name="lpnamecta3" id="lpnamecta3" value="Guaranteed Fixed Returns">
                     <input type="hidden" name="utm_source_cta3" id="utm_source_cta3" value="">
                     <input type="hidden" name="utm_medium_cta3" id="utm_medium_cta3" value="">
                     <input type="hidden" name="utm_campaign_cta3" id="utm_campaign_cta3" value="">
                     <input type="hidden" name="utm_campaignid_cta3" id="utm_campaignid_cta3" value="">
                     <input type="hidden" name="utm_keyword_cta3" id="utm_keyword_cta3" value="">
                     <div class="form-group">
                        <div id="responsecta3" style="display: none;text-align: center;"></div>
                     </div>
                     <div class="form-group">
                        <input id="submit" type="submit" class="btn btn-danger" value="Enquire Now" onclick="postToctaThree()">
                     </div>
                     <!-- end of form -->
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- End CTA 2 -->
      <!-- End businessflowchart -->
      <div class="modal fade" id="aboutus" tabindex="-1" role="dialog" aria-hidden="true">
         <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title text-center" id="exampleModalLongTitle">About Us</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
               </div>
               <div class="modal-body">
                  <p>Our industry expertise with innovative working capital solutions is tailored to gain instant access to cash tied up in outstanding invoices. Invoice Trade is a tech-enabled platform designed to improve cash flow for operational needs and speed up expansions with the utmost confidentiality. At Invoice Trade, we are committed to growing your portfolio at higher rates through our range of seamless invoice discounting advantages and invoice financing options at minimal risk.</p>
                  <p><strong>VISION:</strong> To become a market leader in providing working capital solutions to businesses and serve our clients with distinction and utmost transparency.</p>
                  <p><strong>MISSION:</strong> Empower businesses with innovative cash flow solutions to scale up their operations and increase investors' yield by providing best-in-class returns.</p>
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade" id="terms" tabindex="-1" role="dialog" aria-hidden="true">
         <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title">Terms & Conditions</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
               </div>
               <div class="modal-body">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-12">
                           <p>This policy notifies the information practices followed by Invoice Trades. This includes the type of information collected, how it is collected, how it is used, and who it is shared with.</p>
                           <p><strong>DEFINITIONS</strong><br>
                              The following Terms of Use administer your use of the website owned and operated by Elite Trade Ventures Pvt. Ltd. ('Invoice Trades'), i.e., www.invoicetrades.com ('Website'). Specific areas of the website, particular content, and transactions have additional terms and conditions. They are posted in the respective areas of the website. Both these terms of use are used to administer your use of those areas, content, and transactions. These terms of use, along with additional ones, are known as "T&C". Invoice Trades operates this website to provide online access to information about Invoice Trades and the products, services, and opportunities provided at Invoice Trades (‘Services’). Before you make use of any of our services, it is advised that you have a careful reading of these T&C. If you don't agree with our T&C then you may not use the services provided by us. By using our services, you agree to our T&C and it automatically creates a legally binding arrangement for you to abide by it. (Hereinafter, these are referred to as the "General Terms and Conditions")
                           </p>
                           <p><strong>Refund Policy</strong><br>
                              We provide a hassle-free refund process for each dissatisfied customer. After thoroughly analyzing the reasons provided by the customers we will initiate the refund process.                                  
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade" id="privacy" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
         <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Privacy Policy</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
               </div>
               <div class="modal-body">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-12">
                           <p>The information you submit during the registration and uploading or syncing of invoices is used by us. How we make use of this data is mentioned in this privacy policy. This privacy policy does not apply to any information you provide to third parties in connection with the websites hosted by "invoicetrades.com".
                              <br><br>
                              "invoicetrades.com" reserves the right to alter this privacy policy at any time. Please visit this page periodically to protect your interests. When you use this website, fill out forms or use our services, you are approving our use of your information (that you have provided).
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
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
      phnError: '',
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
        if (String(this.phone).length === 10 || String(this.phone).length === 12 || String(this.phone).length === 13) {
         
         
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
                text:'Wrong Phone Number!',
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
</style>