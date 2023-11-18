<template>
  <div>
    <AdminDeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4 d-flex justify-content-between px-3">
        <div class="">
          <span class="h5 mb-0">All Offers</span>
        </div>
        <div class="">
          <button
            class="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#AddModal"
          >
            + Add Offers
          </button>
        </div>
      </div>
      <!-- Breadcrumb-->

      <section class="tables py-0">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="card mb-0">
                <div class="card-body pt-0">
                  <div class="table-responsive mb-4">
                    <table
                      class="table mb-0"
                      style="overflow-x: auto !important"
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Image</th>
                      
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Image</td>
                     
                          <td>
                            <div class="d-flex justify-content-center gap-3">
                              <a
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#EditModal"
                              >
                                <i class="fa fa-edit" style="color: aqua"></i>
                              </a>

                              <a>
                                <i class="fa fa-trash" style="color: brown"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Image</td>
                     
                          <td>
                            <div class="d-flex justify-content-center gap-3">
                              <a
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#EditModal"
                              >
                                <i class="fa fa-edit" style="color: aqua"></i>
                              </a>

                              <a>
                                <i class="fa fa-trash" style="color: brown"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Image</td>
                     
                          <td>
                            <div class="d-flex justify-content-center gap-3">
                              <a
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#EditModal"
                              >
                                <i class="fa fa-edit" style="color: aqua"></i>
                              </a>

                              <a>
                                <i class="fa fa-trash" style="color: brown"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                        
                          <td>Image</td>
                     
                          <td>
                            <div class="d-flex justify-content-center gap-3">
                              <a
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#EditModal"
                              >
                                <i class="fa fa-edit" style="color: aqua"></i>
                              </a>

                              <a>
                                <i class="fa fa-trash" style="color: brown"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      
                      </tbody>
                    </table>
                  </div>

                  <!-- v-show="totalPages > 1" -->
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li
                        class="page-item"
                        :class="{
                          disabled: currentPage === 1,
                        }"
                      >
                        <button
                          class="page-link"
                          @click="previousPage"
                          :disabled="currentPage === 1"
                        >
                          Previous
                        </button>
                      </li>
                      <li class="page-item">
                        <span class="btn"
                          >Page {{ currentPage }} of {{ totalPages }}</span
                        >
                      </li>

                      <li class="page-item">
                        <button
                          class="page-link"
                          @click="nextPage"
                          :class="{
                            disabled: currentPage === totalPages,
                          }"
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="modal fade text-start"
        id="EditModal"
        tabindex="-1"
        aria-labelledby="depositModallabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="depositModallabel">
                Update Offer
              </h5>
              <button
                class="btn-close btn-close-white"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3 align-items-center">
                <div class="">
                  <label class="" for="exampleInputEmail1">Offer Name</label>
                  <input
                    class="form-control"
                    id="title"
                    type="text"
                    placeholder="Enter Offer Name"
                  />
                </div>
                
                <div class="">
                  <label class="" for="img">Offer Image</label
                  >
                  <input class="form-control" id="img" type="file" />
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
        id="AddModal"
        tabindex="-1"
        aria-labelledby="depositModallabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="depositModallabel">
                + Add Offer
              </h5>
              <button
                class="btn-close btn-close-white"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3 align-items-center">
                <div class="">
                  <label class="" for="exampleInputEmail1">Offer Name</label>
                  <input
                    class="form-control"
                    id="title"
                    type="text"
                    placeholder="Enter Offer Name"
                  />
                </div>
                
                <div class="">
                  <label class="" for="img">Offer Image</label
                  >
                  <input class="form-control" id="img" type="file" />
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
              <button class="btn btn-primary" type="button">Submit</button>
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
    