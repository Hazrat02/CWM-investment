<template>
  <div>
    <DeshboardLayout>
      <div class="bg-dash-dark-2 py-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">Dashboard</h2>
        </div>
      </div>
      <section class="pt-0 mt-4">
        <div class="container-fluid">
          <div class="row d-flex align-items-stretch gy-4">
            <div class="col-lg-4">
              <!-- Sales bar chart-->
              <div class="card">
                <div class="card-body">
                  <h3 class="h4 mb-0">Total Balance</h3>
                  <div class="row align-items-end">
                    <div class="col-lg-5">
                      <p class="text-xl fw-light mb-0 text-dash-color-3">
                        $7408
                      </p>
                      <span class="d-block">Last In</span
                      ><small class="d-block"> 20-05-2023</small>
                    </div>
                    <div class="col-lg-7">
                      <canvas id="salesBarChart1"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <!-- Sales bar chart-->
              <div class="card">
                <div class="card-body">
                  <h3 class="h4 mb-0">Total Withdrawals</h3>
                  <div class="row align-items-end">
                    <div class="col-lg-5">
                      <p class="text-xl fw-light mb-0 text-dash-color-1">
                        $457
                      </p>
                      <span class="d-block">Last Out</span
                      ><small class="d-block"> 20-05-2023</small>
                    </div>
                    <div class="col-lg-7">
                      <canvas id="visitPieChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <!-- Sales bar chart-->
              <div class="card">
                <div class="card-body">
                  <h3 class="h4 mb-0">Account History</h3>
                  <div class="row align-items-end">
                    <div class="col-lg-5">
                      <p class="text-xl fw-light mb-0 text-dash-color-4">80%</p>
                      <span class="d-block">Change</span
                      ><small class="d-block"> 20-05-2023</small>
                    </div>
                    <div class="col-lg-7">
                      <canvas id="salesBarChart2"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="pt-0">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <canvas id="barChartExample1"></canvas>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <canvas id="barChartExample2"></canvas>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card">
                <div class="card-body">
                  <canvas id="lineChart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-0">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-6">
              <!-- Stat card-->
              <div class="card mb-4">
                  <div class="card-body">
                    <div class="row gx-sm-5">
                      <div class="col-6 border-sm-end border-dash-dark-1">
                            <!-- Stat item-->
                            <div class="d-flex"><i class="mt-3 fas fa-caret-up  text-success"></i>
                              <div class="ms-2">
                                <p class="text-xl fw-normal mb-0">5.657</p>
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
                                <p class="text-xl fw-normal mb-0">00.00</p>
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
               
              <!-- Stat card-->
              <div class="card">
                <div class="card-body">
                  <div class="row gx-5">
                    <div class="col-6 border-sm-end border-dash-dark-1">
                      <!-- Stat item-->
                      <div class="d-flex">
                        <div>
                          <p class="text-xl fw-normal mb-0">745</p>
                          <p class="text-uppercase text-sm fw-light mb-2">
                            Total requests
                          </p>
                          <div class="progress" style="height: 2px">
                            <div
                              class="progress-bar bg-dash-color-1"
                              role="progressbar"
                              style="width: 60%"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="d-flex justify-content-center text-center">
                        <div class="px-3 px-lg-4">
                          <p class="text-lg fw-normal mb-0">4.124</p>
                          <span class="text-sm text-uppercase mb-0"
                            >Threats</span
                          >
                          <hr
                            class="border-dark-1 mx-auto my-2"
                            style="max-width: 3rem"
                          />
                          <small>+246</small>
                        </div>
                        <div class="px-3 px-lg-4">
                          <p class="text-lg fw-normal mb-0">2.147</p>
                          <span class="text-sm text-uppercase mb-0"
                            >Neutral</span
                          >
                          <hr
                            class="border-dark-1 mx-auto my-2"
                            style="max-width: 3rem"
                          />
                          <small>+416</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <canvas id="lineChart1"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="pt-0">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="h4 mb-0">Forex Performance Index</h3>
                  <div class="position-relative text-center">
                    <canvas id="pieChartHome1"></canvas>
                    <div
                      class="position-absolute top-50 start-50 translate-middle"
                    >
                      <strong class="text-lg d-block">90%</strong
                      ><span class="d-block">Increase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="h4 mb-0">Crypto Performance Index</h3>
                  <div class="position-relative text-center">
                    <canvas id="pieChartHome2"></canvas>
                    <div
                      class="position-absolute top-50 start-50 translate-middle"
                    >
                      <strong class="text-lg d-block">83%</strong
                      ><span class="d-block">Increase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="h4 mb-0">NFTs Performance Index</h3>
                  <div class="position-relative text-center">
                    <canvas id="pieChartHome3"></canvas>
                    <div
                      class="position-absolute top-50 start-50 translate-middle"
                    >
                      <strong class="text-lg d-block">67%</strong
                      ><span class="d-block">Increase</span>
                    </div>
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
import { transactionStore } from "../../store/transaction";
import './../../assets/base.js';
// export default {
//   data() {
//     return {
//       alluser: [],
//       userCount: "",
//       userChange: "",
//       transaction: [],
//     };
//   },

//   computed: {
//     filteredUsers() {
//       const oneMonthAgoUser = this.alluser.filter((item) => {
//         const itemDate = new Date(item.created_at);
//         const thirtyDaysAgo = new Date();
//         thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

//         return item.vip > 0 && itemDate < thirtyDaysAgo;
//       });
//       const lastMonthUser = this.alluser.filter((item) => {
//         const itemDate = new Date(item.created_at);
//         const thirtyDaysAgo = new Date();
//         thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

//         return item.vip > 0 && itemDate >= thirtyDaysAgo;
//       });

//       return {
//         count: this.alluser
//           .filter((user) => user.vip > 0)
//           .length.toString()
//           .padStart(4, "0"),
//         change: (lastMonthUser.length / oneMonthAgoUser.length) * 100,
//       };
//     },
//     filterTrx() {
//       const oneMonthAgotransaction = this.transaction.filter((item) => {
//         const itemDate = new Date(item.created_at);
//         const thirtyDaysAgo = new Date();
//         thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

//         return itemDate < thirtyDaysAgo;
//       });
//       const lastMonthtransaction = this.transaction.filter((item) => {
//         const itemDate = new Date(item.created_at);
//         const thirtyDaysAgo = new Date();
//         thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

//         return itemDate >= thirtyDaysAgo;
//       });

//       return {
//         count: this.transaction.length.toString().padStart(4, "0"),
//         change:
//           (lastMonthtransaction.length / oneMonthAgotransaction.length) * 100,
//       };
//     },
//   },

//   async created() {


//     // auth user data +++++++++++++++++++++++++++++

//     const userStore = useAuthUserStore();
//     const alluser = userStore.allUser;

//     if (alluser) {
//       this.alluser = alluser;
//     } else {
//       // userStore.reSetAuthUser();
//       this.alluser = await userStore.getAllUser();
//     }
//     this.userCount = this.alluser.length.toString().padStart(4, "0");

//     const oneMonthAgoUser = this.alluser.filter((item) => {
//       const itemDate = new Date(item.created_at); // Convert itemDate to a Date object
//       const thirtyDaysAgo = new Date();
//       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
//       return itemDate < thirtyDaysAgo;
//     });
//     const lastMonthUser = this.alluser.filter((item) => {
//       const itemDate = new Date(item.created_at); // Convert itemDate to a Date object
//       const thirtyDaysAgo = new Date();
//       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
//       return itemDate >= thirtyDaysAgo;
//     });
//     this.userChange = (lastMonthUser.length / oneMonthAgoUser.length) * 100;

//     const getTransaction = transactionStore();

//     // Try to get the data from the store
//     const transactionData = getTransaction.allTransaction;

//     if (transactionData) {
//       this.transaction = transactionData;
//     } else {
//       // If data is not available, fetch it and set the component property
//       this.transaction = await getTransaction.allUserTransaction();
//     }

//     this.$setLoading(false);
//   },
// };
</script>
<style >

.card-img-absolute {
  position: absolute;
  top: 0;
  right: 0%;
  height: 100%;
}
</style>
  