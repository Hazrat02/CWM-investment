<template>
    <div>
      <DeshboardLayout>
        <div class="bg-dash-dark-2 py-4">
          <div class="container-fluid">
            <h2 class="h5 mb-0">Dashboard</h2>
          </div>
        </div>
        <section>
          <div class="container-fluid">
            <div class="row gy-4">
              <div class="col-md-3 col-sm-6">
                <div class="card mb-0">
                  <div class="card-body">
                    <div
                      class="d-flex align-items-end justify-content-between mb-2"
                    >
                      <div class="me-2">
                        <svg
                          class="svg-icon svg-icon-sm svg-icon-heavy text-gray-600 mb-2"
                        >
                          <use xlink:href="#user-1"></use>
                        </svg>
                        <p class="text-sm text-uppercase text-gray-600 lh-1 mb-0">
                          New Clients
                        </p>
                      </div>
                      <p class="text-xxl lh-1 mb-0 text-dash-color-1">27</p>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        class="progress-bar bg-dash-color-1"
                        role="progressbar"
                        style="width: 30%"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="card mb-0">
                  <div class="card-body">
                    <div
                      class="d-flex align-items-end justify-content-between mb-2"
                    >
                      <div class="me-2">
                        <svg
                          class="svg-icon svg-icon-sm svg-icon-heavy text-gray-600 mb-2"
                        >
                          <use xlink:href="#stack-1"></use>
                        </svg>
                        <p class="text-sm text-uppercase text-gray-600 lh-1 mb-0">
                          New Projects
                        </p>
                      </div>
                      <p class="text-xxl lh-1 mb-0 text-dash-color-2">375</p>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        class="progress-bar bg-dash-color-2"
                        role="progressbar"
                        style="width: 70%"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="card mb-0">
                  <div class="card-body">
                    <div
                      class="d-flex align-items-end justify-content-between mb-2"
                    >
                      <div class="me-2">
                        <svg
                          class="svg-icon svg-icon-sm svg-icon-heavy text-gray-600 mb-2"
                        >
                          <use xlink:href="#survey-1"></use>
                        </svg>
                        <p class="text-sm text-uppercase text-gray-600 lh-1 mb-0">
                          New Invoices
                        </p>
                      </div>
                      <p class="text-xxl lh-1 mb-0 text-dash-color-3">140</p>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        class="progress-bar bg-dash-color-3"
                        role="progressbar"
                        style="width: 55%"
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="card mb-0">
                  <div class="card-body">
                    <div
                      class="d-flex align-items-end justify-content-between mb-2"
                    >
                      <div class="me-2">
                        <svg
                          class="svg-icon svg-icon-sm svg-icon-heavy text-gray-600 mb-2"
                        >
                          <use xlink:href="#paper-stack-1"></use>
                        </svg>
                        <p class="text-sm text-uppercase text-gray-600 lh-1 mb-0">
                          All Projects
                        </p>
                      </div>
                      <p class="text-xxl lh-1 mb-0 text-dash-color-4">41</p>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        class="progress-bar bg-dash-color-4"
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
        </section>
       
       
      </DeshboardLayout>
    </div>
  </template>
    
  <script>
  
  // import { useAuthUserStore } from "../../store/user";
  // import { transactionStore } from "../../store/transaction";
  
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
 
<style scoped>
@import "./../../assets/main.css";
</style>