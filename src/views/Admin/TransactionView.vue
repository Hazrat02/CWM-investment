<template>
  <div>
    <AdminDeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">All Transaction</h2>
        </div>
      </div>
      <!-- Breadcrumb-->

      <section class="tables py-0">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="card mb-0">
                <div class="row justify-content-between">
                  <div class="p-2 ms-3 col-3">
                    <label>Result: </label>
                    <span> {{ this.transaction.length }}</span>
                  </div>
                  <div class="col-6 p-3">
                    <div class="input-group">
                          <div class="input-group-text"><select
                          class="form-select"
                          
                          v-model="selectedOption"
                        >
                          <option selected disabled>Select</option>
                          <option value="all">
                            All
                          </option>
                          <option value="pending">
                            Pending
                          </option>
                          <option value="success">
                            Success
                          </option>
                          <option value="rejected">
                            Rejected
                          </option>
                        </select></div>
                          <input
                      style="border: solid white 1px"
                      class="form-control"
                      type="text"
                      v-model="searchQuery"
                      placeholder="search.."
                    />
                          
                        </div>
                    
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
                        <tr
                          v-for="(transactionItem, index) in displayedItems"
                          :key="index"
                        >
                          <th scope="row">{{ index }}</th>
                          <td>
                            {{ transactionItem.created_at.substring(0, 10) }}
                          </td>

                          <td>{{ transactionItem.type }}</td>
                          <td>{{ transactionItem.method }}</td>
                          <td>${{ transactionItem.amount }}</td>
                          <td>{{ transactionItem.address }} Account</td>
                          <td>
                            <span
                              v-if="transactionItem.status != 'pending'"
                              class="badge"
                              :class="{
                                'bg-danger':
                                  transactionItem.status === 'rejected',
                                'bg-success':
                                  transactionItem.status === 'success',
                              }"
                            >
                              {{ transactionItem.status }}
                            </span>
                            <span v-else class="d-flex justify-content-between">
                              <router-link :to="{ name: 'userdetails', params: { id: transactionItem.user_id } }"> <i class="fa fa-eye" style="color: beige"></i></router-link>

                              <i @click="trxEdit(transactionItem.id,'success')"
                                class="fa fa-check"
                                style="color: green; font-size: 20px"
                              ></i>
                              <i @click="trxEdit(transactionItem.id,'rejected')"
                                else
                                class="fa fa-times"
                                style="color: red; font-size: 20px"
                              ></i>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <nav
                      v-show="totalPages > 1"
                      aria-label="Page navigation example mt-3"
                    >
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
    </AdminDeshboardLayout>
  </div>
</template>
    

<script>
import axios from "axios";
import { transactionStore } from "../../store/transaction";
export default {
  data() {
    return {
      selectedOption: "all", // Initial selected option
      filterOptions: ["all", "pending", "rejected", "success"], // Dropdown options

      transaction: [],
      searchQuery: "",

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 10, // Number of items to display per page
    };
  },
  computed: {
    search() {
      if (!this.searchQuery) {
        return this.transaction;
      } else {
        const searchText = this.searchQuery.toLowerCase();
        return this.transaction.filter((item) => {
          const trxid = item.trxid ? item.trxid.toLowerCase() : ""; // Handle null trxid
          return (
            item.type.toLowerCase().includes(searchText) ||
            trxid.includes(searchText) ||
            item.status.toLowerCase().includes(searchText)
          );
        });
      }
    },
    filteredTransactions() {
      if (this.selectedOption === "all") {
        return this.search; // No filter applied, return all transactions
      } else if (this.selectedOption === "pending") {
        return this.search.filter(
          (transaction) => transaction.status === "pending"
        );
      } else if (this.selectedOption === "rejected") {
        return this.search.filter(
          (transaction) => transaction.status === "rejected"
        );
      } else {
        return this.search.filter(
          (transaction) => transaction.status === "success"
        );
      }
    },
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    totalPages() {
      return Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
    },
    // Get the items to display on the current page
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredTransactions.slice(start, end);
    },
  },

  async created() {
    // transactionStore===================================
    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.allTransaction;

    if (transactionData) {
      this.transaction = transactionData;
    } else {
      // If data is not available, fetch it and set the component property
      this.transaction = await getTransaction.allUserTransaction();
    }
    this.$setLoading(false);
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
   async trxEdit(id, status) {
      this.$setLoading(true);

      const data = {
        status: status,
      };

     await axios
        .put(`api/transaction.edit/${id}`, data)
        .then((response) => {
          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });

          const index = this.transaction.findIndex((item) => item.id === id);
          if (index !== -1) {
            this.transaction[index].status = status;

            this.$set(this.transaction, index, this.transaction[index]);
          }
        })
        .catch((error) => {
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });
        });

      this.$setLoading(false);
      console.log(id, status);
    },
  


  },
};
</script>

<style scoped>
@import "./../../assets/main.css";
</style>
