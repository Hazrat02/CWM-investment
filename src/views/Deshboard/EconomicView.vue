<template>
    <div>
      <DeshboardLayout>
        <div class="bg-dash-dark-2 py-4">
          <div class="container-fluid">
            <h2 class="h5 mb-0">Profile Information</h2>
          </div>
        </div>
        <section class="pt-0 mt-4">
          <div class="container-fluid">
            <div class="row justify-content-center gy-4">
              <div class="col-lg-4">
                <!-- User block-->
                <div class="card">
                  <div class="card-body">
                    <div class="text-center">
                      <div class="position-relative d-inline-block">
                        <img
                          class="avatar avatar-lg mb-3"
                          src="./../../assets/deshboard/img/avatar-1.jpg"
                          alt="Richard Nevoreski"
                        /><span class="avatar-badge bg-dash-color-1"
                          ><i class="fa fa-close"></i
                        ></span>
                      </div>
                      <h3 class="h3 mb-0">Richard Nevoreski</h3>
                      <p class="text-sm fw-light">hazratbd90@gmail.com</p>
                      <div
                        class="d-inline-block py-1 px-4 rounded-pill bg-dash-dark-3 fw-light text-sm mb-4"
                      >
                        Client ID: 72047
                      </div>
                      <ul
                        class="list-inline text-center mb-0 d-flex justify-content-between text-sm mb-0"
                      >
                        <li class="list-inline-item">
                          <i class="fab fa-blogger-b me-2"></i>150
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-code-branch me-2"></i>340
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-gg me-2"></i>460
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="row gy-3 align-items-center">
                      <div class="col-md-6 col-12">
                        <div class="col-lg-10">
                          <div><b for="">First Name: </b><span>hazrat</span></div>
                        </div>
                        <div class="col-lg-10">
                          <div>
                            <b for="">Date of birth: </b><span>20/09/2001</span>
                          </div>
                        </div>
                        <div class="col-lg-10">
                          <div><b for="">Password: </b><span>******</span></div>
                        </div>
                        <div class="col-lg-10">
                          <div>
                            <b for="">Mobile Number: </b
                            ><span>+8801237482347</span>
                          </div>
                        </div>
                        <div class="col-lg-10">
                          <div>
                            <b for="">Communication Language: </b
                            ><span>Einglish</span>
                          </div>
                        </div>
                        <div class="col-lg-10 mb-3" >
                          <div><b for="">Country: </b><span>U.K</span></div>
                        </div>
                        <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Edit
              </button>
                      </div>
                      <div class="col-md-6 col-12">
                        <div class="card">
                          <div class="card-body">
                            <div class="row gy-3 r justify-content-center">
                              <div class="">
                                <div
                                  class="card mb-0"
                                  style="border: solid white 2px"
                                >
                                  <div class="card-body">
                                    <div
                                      class="d-flex align-items-end justify-content-between mb-2"
                                    >
                                      <div class="me-2">
                                        <p
                                          class="text-sm text-uppercase text-gray-600 lh-1 mb-0"
                                        >
                                          Proof of ID approved
                                        </p>
                                      </div>
                                      <p
                                        class="text-xxl lh-1 mb-0 text-dash-color-1"
                                      >
                                        Yes
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex align-items-end justify-content-between mb-2"
                                    >
                                      <div class="me-2">
                                        <p
                                          class="text-sm text-uppercase text-gray-600 lh-1 mb-0"
                                        >
                                          Proof of Address approved
                                        </p>
                                      </div>
                                      <p
                                        class="text-xxl lh-1 mb-0 text-dash-color-1"
                                      >
                                        No
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex align-items-end justify-content-between mb-2"
                                    >
                                      <div class="me-2">
                                        <p
                                          class="text-sm text-uppercase text-gray-600 lh-1 mb-0"
                                        >
                                          Economic Profile Details approved
                                        </p>
                                      </div>
                                      <p
                                        class="text-xxl lh-1 mb-0 text-dash-color-1"
                                      >
                                        Yes
                                      </p>
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
                class="modal fade text-start"
                id="myModal"
                tabindex="-1"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="myModalLabel">Update Profile</h5>
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
      </DeshboardLayout>
    </div>
  </template>
      
    <script>
  import { useAuthUserStore } from "../../store/user";
  import { transactionStore } from "../../store/transaction";
  
  export default {
    data() {
      return {
        checkbox:'',
        alluser: [],
        userCount: "",
        userChange: "",
        transaction: [],
      };
    },
  
    // computed: {
    //   filteredUsers() {
    //     const oneMonthAgoUser = this.alluser.filter((item) => {
    //       const itemDate = new Date(item.created_at);
    //       const thirtyDaysAgo = new Date();
    //       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
    //       return item.vip > 0 && itemDate < thirtyDaysAgo;
    //     });
    //     const lastMonthUser = this.alluser.filter((item) => {
    //       const itemDate = new Date(item.created_at);
    //       const thirtyDaysAgo = new Date();
    //       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
    //       return item.vip > 0 && itemDate >= thirtyDaysAgo;
    //     });
  
    //     return {
    //       count: this.alluser
    //         .filter((user) => user.vip > 0)
    //         .length.toString()
    //         .padStart(4, "0"),
    //       change: (lastMonthUser.length / oneMonthAgoUser.length) * 100,
    //     };
    //   },
    //   filterTrx() {
    //     const oneMonthAgotransaction = this.transaction.filter((item) => {
    //       const itemDate = new Date(item.created_at);
    //       const thirtyDaysAgo = new Date();
    //       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
    //       return itemDate < thirtyDaysAgo;
    //     });
    //     const lastMonthtransaction = this.transaction.filter((item) => {
    //       const itemDate = new Date(item.created_at);
    //       const thirtyDaysAgo = new Date();
    //       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
    //       return itemDate >= thirtyDaysAgo;
    //     });
  
    //     return {
    //       count: this.transaction.length.toString().padStart(4, "0"),
    //       change:
    //         (lastMonthtransaction.length / oneMonthAgotransaction.length) * 100,
    //     };
    //   },
    // },
  
    // async created() {
    //   // auth user data +++++++++++++++++++++++++++++
  
    //   const userStore = useAuthUserStore();
    //   const alluser = userStore.allUser;
  
    //   if (alluser) {
    //     this.alluser = alluser;
    //   } else {
    //     // userStore.reSetAuthUser();
    //     this.alluser = await userStore.getAllUser();
    //   }
    //   this.userCount = this.alluser.length.toString().padStart(4, "0");
  
    //   const oneMonthAgoUser = this.alluser.filter((item) => {
    //     const itemDate = new Date(item.created_at); // Convert itemDate to a Date object
    //     const thirtyDaysAgo = new Date();
    //     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    //     return itemDate < thirtyDaysAgo;
    //   });
    //   const lastMonthUser = this.alluser.filter((item) => {
    //     const itemDate = new Date(item.created_at); // Convert itemDate to a Date object
    //     const thirtyDaysAgo = new Date();
    //     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    //     return itemDate >= thirtyDaysAgo;
    //   });
    //   this.userChange = (lastMonthUser.length / oneMonthAgoUser.length) * 100;
  
    //   const getTransaction = transactionStore();
  
    //   // Try to get the data from the store
    //   const transactionData = getTransaction.allTransaction;
  
    //   if (transactionData) {
    //     this.transaction = transactionData;
    //   } else {
    //     // If data is not available, fetch it and set the component property
    //     this.transaction = await getTransaction.allUserTransaction();
    //   }
  
    //   this.$setLoading(false);
    // },
  };
  </script>
   
  <style scoped>
  @import "./../../assets/main.css";
  </style>