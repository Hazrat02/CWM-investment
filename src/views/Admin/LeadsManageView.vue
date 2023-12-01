<template>
  <div>
    <AdminDeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">All Message</h2>
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
                    <span> {{ this.contactData.length }}</span>
                  </div>
                 
                </div>
                <div class="card-body pt-0">
                  <div class="table-responsive">
                    <table class="table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Subject</th>
                          <th>Message</th>
                          <th>Date</th>

                         
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(contactItem, index) in displayedItems"
                          :key="index"
                        >
                          <th scope="row">{{ index }}</th>
                         

                          <td>{{ contactItem.name }}</td>
                          <td>{{ contactItem.email }}</td>
                          <td>{{ contactItem.sub }}</td>
                          <td>{{ contactItem.sms }} Account</td>
                          <td>
                            {{ contactItem.created_at.substring(0, 10) }}
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
import { contactStore } from "../../store/contact";
export default {
  data() {
    return {


      contactData: [],

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 10, // Number of items to display per page
    };
  },
  computed: {
  
   
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    totalPages() {
      return Math.ceil(this.contactData.length / this.itemsPerPage);
    },
    // Get the items to display on the current page
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.contactData.slice(start, end);
    },
  },

  async created() {
    // transactionStore===================================
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
};
</script>

<style scoped>
@import "./../../assets/main.css";
</style>
