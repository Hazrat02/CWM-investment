<template>
  <div>
    <AdminDeshboardLayout>
      <div class="bg-dash-dark-2 py-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">Dashboard</h2>
        </div>
      </div>
      <section>
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-md-3 col-sm-6">
              <RouterLink to="/admin/user" class="card mb-0">
                <div class="card-body">
                  <div
                    class="d-flex align-items-end justify-content-between mb-2"
                  >
                    <div to="/admin/user" class="me-2">
                      <svg
                        class="svg-icon svg-icon-sm svg-icon-heavy text-gray-600 mb-2"
                      >
                        <use xlink:href="#user-1"></use>
                      </svg>
                      <p class="text-sm text-uppercase text-gray-600 lh-1 mb-0">
                        Total Users..
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
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <RouterLink to="/admin/transaction" class="card mb-0">
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
                        Total Deposit
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
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <RouterLink to="/admin/transaction" class="card mb-0">
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
                        Total Withdraw
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
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <RouterLink to="/admin/offer" class="card mb-0">
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
                        Total Offers..
                      </p>
                    </div>
                    <p class="text-xxl lh-1 mb-0 text-dash-color-3">14</p>
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
              </RouterLink>
            </div>
            
          </div>
        </div>
      </section>
      <section class="tables py-0">
        
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-6">
              
              <div class="card mb-0">
                <h4 class="p-2">Recent Registrations</h4>
                
                <div class="card-body pt-0">
                  <div class="table-responsive " >
                    <table class="table mb-0" style="overflow-x: auto !important;">
                      <thead>
                        <tr>
                          <th>SL. Number</th>
                          <th>User Name</th>
                          <th>Email</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>hazratsak4@gamil.com</td>
                          
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>hazratsak4@gamil.com</td>
                          
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>hazratsak4@gamil.com</td>
                          
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              
              <div class="card mb-0">
                <h4 class="p-2">Recent Transactions</h4>
                
                <div class="card-body pt-0">
                  <div class="table-responsive " >
                    <table class="table mb-0" style="overflow-x: auto !important;">
                      <thead>
                        <tr>
                          <th>SL. Number</th>
                          <th>User Name</th>
                          <th>Type</th>
                          <th>Amount</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Deposit</td>
                          <td>4566</td>
                          
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Withdraw</td>
                          <td>5666</td>
                          
                        </tr>
                       
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Withdraw</td>
                          <td>5666</td>
                          
                        </tr>
                       
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Withdraw</td>
                          <td>5666</td>
                          
                        </tr>
                       
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              
              <div class="card mb-0">
                <h4 class="p-2">Today Uploaded Payment Details</h4>
                
                <div class="card-body pt-0">
                  <div class="table-responsive " >
                    <table class="table mb-0" style="overflow-x: auto !important;">
                      <thead>
                        <tr>
                          <th>SL. Number</th>
                          <th>User Name</th>
                          <th>Payment Upload Type</th>
                          <th>Action</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Deposit</td>
                          <td>4566</td>
                          
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Withdraw</td>
                          <td>5666</td>
                          
                        </tr>
                       
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Withdraw</td>
                          <td>5666</td>
                          
                        </tr>
                       
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Withdraw</td>
                          <td>5666</td>
                          
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

import { RouterLink } from 'vue-router';
import "./../../assets/base.js";

export default {
  // data() {
  //   return {
  //     alluser: "",

  //     // paginate
  //     currentPage: 1, // The current page number
  //     itemsPerPage: 10, // Number of items to display per page
  //   };
  // },
  // methods: {
  //   userDelete(id) {
  //     axios
  //       .get(`/api/user.delete/${id}`)
  //       .then((response) => {






  //         const User = useAuthUserStore();
  //         this.alluser = User.deleteUser(id);

  //         this.$notify({
  //           title: "message",
  //           text: response.data.message,
  //           type: "success",
  //         });
  //       })
  //       .catch((error) => {
  //         this.$setLoading(false);
  //         this.$notify({
  //           title: "Error message",
  //           text: error.response.data.message,
  //           type: "error",
  //         });
  //       });
  //     this.$setLoading(false);
  //   },
  // },

  // computed: {
  //   // Calculate the total number of pages based on the total number of items and itemsPerPage
  //   totalPages() {
  //     return Math.ceil(this.alluser.length / this.itemsPerPage);
  //   },
  //   // Get the items to display on the current page
  //   displayedItems() {
  //     const start = (this.currentPage - 1) * this.itemsPerPage;
  //     const end = start + this.itemsPerPage;
  //     return this.alluser.slice(start, end);
  //   },
  // },

  async created() {
    // auth user data +++++++++++++++++++++++++++++

    // const userStore = useAuthUserStore();
    // const alluser = userStore.allUser;

    // if (alluser) {
    //   this.alluser = alluser;
    // } else {
    //   // userStore.reSetAuthUser();
    //   this.alluser = await userStore.getAllUser();
    // }
    this.$setLoading(false);
  },
};


</script>

<style scoped>
 @import "./../../assets/main.css";
</style>
