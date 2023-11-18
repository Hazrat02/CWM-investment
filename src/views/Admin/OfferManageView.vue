<template>
    <div>
        <AdminDeshboardLayout>
        <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">All Offer</h2>
        </div>
      </div>
      <!-- Breadcrumb-->

      <section class="tables py-0">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="card mb-0">
                <div class="row justify-content-between">
                  <div class=" p-2 ms-3 col-3" >
                    <label>Result: </label> <span> 5</span>
                  </div>
                  <div class="col-6 p-3">
                    <input style="border: solid white 1px;"
                      class="form-control"
                      type="text"
                      v-model="search"
                      placeholder="search.."
                    />
                  </div>
                </div>
                <div class="card-body pt-0">
                  <div class="table-responsive">
                    <table class="table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Date</th>
                          <th>Deposit</th>
                          <th>Withdraw</th>
                          <th>Account Balance</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>10-04-2023</td>
                          <td>200</td>
                          <td>0</td>
                          <td>4000</td>
                          <td><span style="background:red;padding: 3px;border-radius: 10%; color: beige;">Pending</span></td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>10-04-2023</td>
                          <td>200</td>
                          <td>0</td>
                          <td>4000</td>
                          <td><span style="background:green;padding: 3px;border-radius: 10%; color: beige;">Success</span></td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>10-04-2023</td>
                          <td>200</td>
                          <td>0</td>
                          <td>4000</td>
                          <td><span style="background:green;padding: 3px;border-radius: 10%; color: beige;">Success</span></td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>10-04-2023</td>
                          <td>200</td>
                          <td>0</td>
                          <td>4000</td>
                          <td><span style="background:green;padding: 3px;border-radius: 10%; color: beige;">Success</span></td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>10-04-2023</td>
                          <td>200</td>
                          <td>0</td>
                          <td>4000</td>
                          <td><span style="background:green;padding: 3px;border-radius: 10%; color: beige;">Success</span></td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>10-04-2023</td>
                          <td>200</td>
                          <td>0</td>
                          <td>4000</td>
                          <td><span style="background:green;padding: 3px;border-radius: 10%; color: beige;">Success</span></td>
                        </tr>
                       
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AdminDeshboardLayout>
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
  <style >
  .card-img-absolute {
    position: absolute;
    top: 0;
    right: 0%;
    height: 100%;
  }
  </style>
    