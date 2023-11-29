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
                    <p class="text-xxl lh-1 mb-0 text-dash-color-1">
                      {{ allUser.length }}
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
                    <p class="text-xxl lh-1 mb-0 text-dash-color-2">{{filteredDeposit.length}}</p>
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
                    <p class="text-xxl lh-1 mb-0 text-dash-color-4">{{filteredWithdraw.length}}</p>
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
              <RouterLink to="/admin/leads" class="card mb-0">
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
                        Total Message
                      </p>
                    </div>
                    <p class="text-xxl lh-1 mb-0 text-dash-color-3">{{contactData.length}}</p>
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
                  <div class="table-responsive">
                    <table
                      class="table mb-0"
                      style="overflow-x: auto !important"
                    >
                      <thead>
                        <tr>
                          <th>SL. Number</th>
                          <th>User Name</th>
                          <th>Email</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(user, index) in filteredUsers" :key="index">
                          <th scope="row">{{ index }}</th>
                          <td>{{ user.name }}</td>

                          <td>{{ user.email }}</td>
                          <td>
                            <router-link
                              :to="{
                                name: 'userdetails',
                                params: { id: user.id },
                              }"
                            >
                              <i class="fa fa-eye" style="color: beige"></i
                            ></router-link>
                          </td>
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
                  <div class="table-responsive">
                    <table
                      class="table mb-0"
                      style="overflow-x: auto !important"
                    >
                      <thead>
                        <tr>
                          <th>SL. Number</th>
                          <th>User Id</th>
                          <th>Type</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in filteredTrx" :key="index">
                          <th scope="row">{{ index }}</th>
                          <td>{{ item.user_id }}</td>

                          <td>{{ item.type }}</td>
                          <td>{{ item.amount }}$</td>
                          <td>
                            <router-link
                              :to="{
                                name: 'userdetails',
                                params: { id: item.user_id },
                              }"
                            >
                              <i class="fa fa-eye" style="color: beige"></i
                            ></router-link>
                          </td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="card mb-0">
                <h4 class="p-2">Recent Message Details</h4>

                <div class="card-body pt-0">
                  <div class="table-responsive">
                    <table
                      class="table mb-0"
                      style="overflow-x: auto !important"
                    >
                      <thead>
                        <tr>
                          <th>SL. Number</th>
                          <th>User Name</th>
                          <th>Email</th>
                          <th>Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in filteredSms" :key="index">
                          <th scope="row">{{ index }}</th>
                          <td>{{ item.name }}</td>

                          <td>{{ item.email }}</td>
                          <td>{{ item.sms }}</td>
                          
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
import { RouterLink } from "vue-router";
import "./../../assets/base.js";

import { useAuthUserStore } from "../../store/user";
import { transactionStore } from "../../store/transaction";
import { contactStore } from "../../store/contact";

export default {
  data() {
    return {
      allUser: [],
      limit: 5,
      transactions:[],
      contactData:[],
    };
  },
  methods: {},

  computed: {
    filteredUsers() {
      // Ensure that allUsers is defined and is an array before using slice
      if (!Array.isArray(this.allUser)) {
        return [];
      }

      // Use this computed property to filter the array
      return this.allUser.slice(0, this.limit);
    },
    filteredTrx() {
      // Ensure that allUsers is defined and is an array before using slice
      if (!Array.isArray(this.transactions)) {
        return [];
      }

      // Use this computed property to filter the array
      return this.transactions.slice(0, this.limit);
    },
    filteredSms() {
      // Ensure that allUsers is defined and is an array before using slice
      if (!Array.isArray(this.contactData)) {
        return [];
      }

      // Use this computed property to filter the array
      return this.contactData.slice(0, '3');
    },
    filteredDeposit() {
      const withdrawSuccessTransactions = Object.values(this.transactions).filter(
      transaction => transaction.type === 'deposit' && transaction.status === 'success'
    );
      // Use this computed property to filter the array
      return withdrawSuccessTransactions;
    },
    filteredWithdraw() {
      const withdrawSuccessTransactions = Object.values(this.transactions).filter(
      transaction => transaction.type === 'withdraw' && transaction.status === 'success'
    );
      // Use this computed property to filter the array
      return withdrawSuccessTransactions;
    },
  },

  async created() {
    const userStore = useAuthUserStore();
    const alluser = userStore.allUser;

    if (alluser) {
      this.allUser = alluser;
    } else {
      this.allUser = await userStore.getAllUser();
    }

    // transactionStore===================================
    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.allTransaction;

    if (transactionData) {
      this.transactions = transactionData;
    } else {
      // If data is not available, fetch it and set the component property
      this.transactions = await getTransaction.allUserTransaction();
    }
    const getContact = contactStore();

    // Try to get the data from the store
    const contactData = getContact.contact;

    if (contactData) {
      this.contactData = contactData;
    } else {
      // If data is not available, fetch it and set the component property
      this.contactData = await getContact.getContact();
    }
    this.$setLoading(false);
  },
};
</script>

<style scoped>
@import "./../../assets/main.css";
</style>
