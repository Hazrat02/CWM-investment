<template>
  <div>
    <AdminDeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4 d-flex justify-content-between px-3">
        <div class="">
          <span class="h5 mb-0">All Portfolios</span>
        </div>
        <div class="">
          <button class="btn btn-outline-success">+ Add Portfoio</button>
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
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>0284783554</td>
                          <td>dslgkjd lkgdlgkjd lgkdlg jd gkdlgj lg ldg</td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>0284783554</td>
                          <td>dslgkjd lkgdlgkjd lgkdlg jd gkdlgj lg ldg</td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>0284783554</td>
                          <td>dslgkjd lkgdlgkjd lgkdlg jd gkdlgj lg ldg</td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>HAzrat alli</td>
                          <td>hazratsak4@gamil.com</td>
                          <td>0284783554</td>
                          <td>dslgkjd lkgdlgkjd lgkdlg jd gkdlgj lg ldg</td>
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
    