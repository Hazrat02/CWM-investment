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
                        ${{ Number(authUser.main_balance) + Number(authUser.live_balance) }}
                      </p>
                      <span class="d-block">Last In</span
                      ><small class="d-block"> {{lastDepositCreatedAt}}</small>
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
                        ${{sumtrx}}
                      </p>
                      <span class="d-block">Last Out</span
                      ><small class="d-block"> {{lastWithdrawCreatedAt}}</small>
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
                      <p class="text-xl fw-light mb-0 text-dash-color-4">657%</p>
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
                      <div class="d-flex">
                        <i class="mt-3 fas fa-caret-up text-success"></i>
                        <div class="ms-2">
                          <p class="text-xl fw-normal mb-0">
                            ${{ authUser.main_balance }}
                          </p>
                          <p class="text-uppercase text-sm fw-light mb-2">
                            Wallet Account Balance
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
                      <!-- Stat item-->
                      <div class="d-flex">
                        <i class="mt-3 fas fa-caret-down text-danger"></i>
                        <div class="ms-2">
                          <p class="text-xl fw-normal mb-0">${{ authUser.live_balance }}</p>
                          <p class="text-uppercase text-sm fw-light mb-2">
                            Live Account Balance
                          </p>
                          <div class="progress" style="height: 2px">
                            <div
                              class="progress-bar bg-dash-color-2"
                              role="progressbar"
                              style="width: 35%"
                              aria-valuenow="35"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
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
import "./../../assets/base.js";
export default {
  data() {
    return {
      authUser: [],

      transactions: [],
    };
  },
  methods: {},
  computed: {
    sumtrx() {
     
     
       // Filter withdraw transactions with status success and calculate the sum
    const withdrawSuccessTransactions = Object.values(this.transactions).filter(
      transaction => transaction.type === 'Withdraw' && transaction.status === 'success'
    );
    
    // Use reduce to calculate the sum
    const sum = withdrawSuccessTransactions.reduce((total, transaction) => total + transaction.amount, 0);

    return sum;
    },
    lastWithdrawCreatedAt() {
     // Filter withdraw transactions with status success
     const withdrawSuccessTransactions = Object.values(this.transactions).filter(
      transaction => transaction.type === 'Withdraw' && transaction.status === 'success'
    );

    // If there are no successful withdraw transactions, return '00-00-0000'
    if (withdrawSuccessTransactions.length === 0) {
      return '00-00-0000';
    }

    // Sort the transactions by created_at in descending order
    const sortedTransactions = withdrawSuccessTransactions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // Get the created_at value of the first transaction (latest one)
    const lastWithdrawCreatedAt = new Date(sortedTransactions[0].created_at);

    // Format the date to 'MM-DD-YYYY'
    const formattedDate = lastWithdrawCreatedAt.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    return formattedDate;
  },
    lastDepositCreatedAt() {
     // Filter withdraw transactions with status success
     const withdrawSuccessTransactions = Object.values(this.transactions).filter(
      transaction => transaction.type === 'deposit' && transaction.status === 'success'
    );

    // If there are no successful withdraw transactions, return '00-00-0000'
    if (withdrawSuccessTransactions.length === 0) {
      return '00-00-0000';
    }

    // Sort the transactions by created_at in descending order
    const sortedTransactions = withdrawSuccessTransactions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // Get the created_at value of the first transaction (latest one)
    const lastWithdrawCreatedAt = new Date(sortedTransactions[0].created_at);

    // Format the date to 'MM-DD-YYYY'
    const formattedDate = lastWithdrawCreatedAt.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    return formattedDate;
  },
  },

  async created() {
    // const getTransaction = transactionStore();

    // // Try to get the data from the store
    // const transactionData = getTransaction.allTransaction;

    // if (transactionData) {
    //   this.transaction = transactionData;
    // } else {
    //   // If data is not available, fetch it and set the component property
    //   this.transaction = await getTransaction.allUserTransaction();
    // }

    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
      window.location.reload(true);
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }

    // transactionStore===================================
    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.authTransaction;

    if (transactionData) {
      this.transactions = transactionData;
    } else {
      // If data is not available, fetch it and set the component property
      this.transactions = await getTransaction.authUserTransaction();
    }


    this.$setLoading(false);
  },
};
</script>

<style scoped>
@import "./../../assets/main.css";
</style>