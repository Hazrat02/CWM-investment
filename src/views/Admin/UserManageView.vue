<template>
  <div>
    <AdminDeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">All User</h2>
        </div>
      </div>
      <!-- Breadcrumb-->

      <section class="tables py-0">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="card mb-0">
                <div class="card-body pt-0">
                  <div class="table-responsive " >
                    <table class="table mb-0" style="overflow-x: auto !important;">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>User Name</th>
                          <th>Date of Birth</th>
                          <th>Country</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>10-04-2023</td>
                          <td>Bangladesh</td>
                          <td>012847923</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>
                            <div class="d-flex justify-content-between gap-1">
                                <a
                              
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                            >
                            <i class="fa fa-eye" style="color: beige;"></i>
                          </a>
                            
                            <button
                             class="btn btn-success"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#depositModal"
                            >
                              Deposit
                            </button>
                            <button
                              class="btn btn-primary"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#WithdrawModal"
                            >
                              Withdraw
                            </button>
                            <a
                              
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                            >
                            <i class="fa fa-trash"></i>
                        </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>10-04-2023</td>
                          <td>Bangladesh</td>
                          <td>012847923</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>
                            <div class="d-flex justify-content-between gap-1">
                                <a
                              
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                            >
                            <i class="fa fa-eye" style="color: beige;"></i>
                          </a>
                            
                            <button
                             class="btn btn-success"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#depositModal"
                            >
                              Deposit
                            </button>
                            <button
                              class="btn btn-primary"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#WithdrawModal"
                            >
                              Withdraw
                            </button>
                            <a
                              
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                            >
                            <i class="fa fa-trash"></i>
                        </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>10-04-2023</td>
                          <td>Bangladesh</td>
                          <td>012847923</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>
                            <div class="d-flex justify-content-between gap-1">
                                <a
                              
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                            >
                            <i class="fa fa-eye" style="color: beige;"></i>
                          </a>
                            
                            <button
                             class="btn btn-success"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#depositModal"
                            >
                              Deposit
                            </button>
                            <button
                              class="btn btn-primary"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#WithdrawModal"
                            >
                              Withdraw
                            </button>
                            <a
                              
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                            >
                            <i class="fa fa-trash"></i>
                        </a>
                            </div>
                          </td>
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
      <div
              class="modal fade text-start"
              id="depositModal"
              tabindex="-1"
              aria-labelledby="depositModallabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="depositModallabel">deposit</h5>
                    <button
                      class="btn-close btn-close-white"
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label class="form-label" for="modalInputEmail1"
                          >Date of birth</label
                        >
                        <input
                          class="form-control"
                          id="modalInputEmail1"
                          type="date"
                          aria-describedby="emailHelp"
                        />
                        
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="mobile" 
                          >Mobile Number</label
                        >
                        <input
                          class="form-control"
                          id="mobile"
                          type="text"
                        
                        />
                        
                      </div>
                      <div class="form-check">
                            <input class="form-check-input" id="defaultCheck1" type="checkbox" v-model="checkbox">
                            <label class="form-check-label" for="defaultCheck1">I Need Change Password</label>
                          </div>
                          <div v-if="checkbox">


                         
                      <div class="mb-3">
                        <label class="form-label" for="modalInputPassword1"
                          >New Password</label
                        >
                        <input
                          class="form-control"
                          id="modalInputPassword1"
                          type="password"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="modalInputPassword1"
                          >Confirm Password</label
                        >
                        <input
                          class="form-control"
                          id="modalInputPassword1"
                          type="password"
                        />
                      </div>
                          </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      class="btn btn-secondary"
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button class="btn btn-primary" type="button">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
      <div
              class="modal fade text-start"
              id="WithdrawModal"
              tabindex="-1"
              aria-labelledby="WithdrawModallabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="WithdrawModallabel">Withdraw</h5>
                    <button
                      class="btn-close btn-close-white"
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label class="form-label" for="modalInputEmail1"
                          >Date of birth</label
                        >
                        <input
                          class="form-control"
                          id="modalInputEmail1"
                          type="date"
                          aria-describedby="emailHelp"
                        />
                        
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="mobile" 
                          >Mobile Number</label
                        >
                        <input
                          class="form-control"
                          id="mobile"
                          type="text"
                        
                        />
                        
                      </div>
                      <div class="form-check">
                            <input class="form-check-input" id="defaultCheck1" type="checkbox" v-model="checkbox">
                            <label class="form-check-label" for="defaultCheck1">I Need Change Password</label>
                          </div>
                          <div v-if="checkbox">


                         
                      <div class="mb-3">
                        <label class="form-label" for="modalInputPassword1"
                          >New Password</label
                        >
                        <input
                          class="form-control"
                          id="modalInputPassword1"
                          type="password"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="modalInputPassword1"
                          >Confirm Password</label
                        >
                        <input
                          class="form-control"
                          id="modalInputPassword1"
                          type="password"
                        />
                      </div>
                          </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      class="btn btn-secondary"
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button class="btn btn-primary" type="button">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
    