<template>
  <div>
    <DeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">Transaction History</h2>
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
                    <label>Result: </label> <span> {{this.transaction.length}}</span>
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
                          <th>Type</th>
                          <th>Payment Method</th>
                          <th>Amount</th>
                          <th>Account</th>

                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(transactionItem, index) in displayedItems"
                  :key="index">
                          <th scope="row">{{index}}</th>
                          <td>{{ transactionItem.created_at.substring(0, 10) }}</td>
                          
                  <td>{{ transactionItem.type }}</td>
                  <td>{{ transactionItem.method }}</td>
                  <td>${{ transactionItem.amount }}</td>
                  <td>{{ transactionItem.address }} Account</td>
                  <td>
                    <span
                      class="badge"
                      :class="{
                        'bg-warning': transactionItem.status === 'pending',
                        'bg-danger': transactionItem.status === 'rejected',
                        'bg-success': transactionItem.status === 'success',
                      }"
                      >{{ transactionItem.status }}</span
                    >
                  </td>
                        </tr>
                  
                       
                        
                      </tbody>
                    </table>
                    <nav v-show="totalPages>1" aria-label="Page navigation example mt-3">
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
                  <span class="page-link"
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
        </div>
      </section>
    </DeshboardLayout>
  </div>
</template>
    

<script>


import axios from "axios";
import { useAuthUserStore } from "./../../store/user";
import { transactionStore } from "./../../store/transaction";

export default {
  
  data() {
    return {
      transaction: "",
      authUser: "",
     
      filteredPayment: "",

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 10, // Number of items to display per page

    }
  },


  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    totalPages() {
      return Math.ceil(this.transaction.length / this.itemsPerPage);
    },
    // Get the items to display on the current page
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.transaction.slice(start, end);
    },
  },

  methods: {
 

    // paginate=================================
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    

  },
  
  async created() {
    // auth user data +++++++++++++++++++++++++++++

    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }

    // transactionStore===================================
    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.authTransaction;

    if (transactionData) {
      this.transaction = transactionData;
   
    } else {
      // If data is not available, fetch it and set the component property
      this.transaction = await getTransaction.authUserTransaction();
     
    }

    
    
    this.$setLoading(false);
  },


};
</script>


<style scoped>
 @import "./../../assets/main.css";
</style>