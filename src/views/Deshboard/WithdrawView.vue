<template>
    <div>
        <DeshboardLayout>
            <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">Withdraw Funds</h2>
        </div>
      </div>
            <section class="pt-0">
          <div class="container-fluid">
            <div class="row gy-4">
              <div class="col-lg-12">
                <!-- Stat card-->
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="row gx-sm-5">
                      <div class="col-6 border-sm-end border-dash-dark-1">
                            <!-- Stat item-->
                            <div class="d-flex"><i class="mt-3 fas fa-caret-up  text-success"></i>
                              <div class="ms-2">
                                <p class="text-xl fw-normal mb-0">${{ authUser.main_balance }}</p>
                                <p class="text-uppercase text-sm fw-light mb-2">Wallet Account Balance</p>
                                <div class="progress" style="height: 2px">
                                  <div class="progress-bar bg-dash-color-1" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="col-6">
                            <!-- Stat item-->
                            <div class="d-flex"><i class="mt-3 fas  fa-caret-down text-danger "></i>
                              <div class="ms-2">
                                <p class="text-xl fw-normal mb-0">${{ authUser.live_balance }}</p>
                                <p class="text-uppercase text-sm fw-light mb-2">Live Account Balance</p>
                                <div class="progress" style="height: 2px">
                                  <div class="progress-bar bg-dash-color-2" role="progressbar" style="width: 35%;" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div class="col-lg-12">                           
                <div class="card">
                  <div class="card-header">
                    <h3 class="h4 mb-0">Deposit Your Money</h3>
                  </div>
                  <div class="card-body pt-0">
                    <form class="row g-3 align-items-center">
                        
                        <div class="col-lg-6">
                        <label class="" for="Account">Account Category</label>
                        <select class="form-select" id="Account">
                          <option selected>Select...</option>
                          <option value="1">Wallet Account (${{ authUser.main_balance }})</option>
                          <option value="2">Live Account (${{ authUser.live_balance }})</option>
                          
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="Amount">Withdraw Amount</label>
                        <div class="input-group">
                          <div class="input-group-text">$</div>
                          <input class="form-control" id="Amount" type="text" placeholder="Min 10">
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="inlineFormSelectPref">Payment Method</label>
                        <select class="form-select" id="inlineFormSelectPref">
                          <option selected>Select...</option>
                          <option value="1">Bitcoin</option>
                          <option value="2">BNB</option>
                          <option value="3">Lite Coin</option>
                          <option value="3">Trust Wallet</option>
                          <option value="3">Bit Pay</option>
                        </select>
                      </div>
                      <div class="">
                        <button class="btn btn-primary" type="submit">Withdraw Now</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

                
               
              </div>
              
            </div>
          </div>
          
        </section>
        
        </DeshboardLayout>
    </div>
</template>
  
<script>


import { useAuthUserStore } from "../../store/user";
import isAuthenticated from "./../../midleware/auth";

import axios from "axios";
export default {
  data() {
    return {

      authUser: [],
      

    };
  },
  methods: {
    

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
      this.authUser = '';
    }
  
    this.$setLoading(false);
  },}
</script>
  

<style scoped>
 @import "./../../assets/main.css";
</style>