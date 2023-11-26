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
                  <div class="table-responsive">
                    <table
                      class="table mb-0"
                      style="overflow-x: auto !important"
                    >
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
                        <tr
                          v-for="(user, index) in displayedItems"
                          :key="index"
                        >
                          <th scope="row">{{ index }}</th>
                          <td>{{ user.name }}</td>
                          <td>{{ user.created_at.substring(0, 10) }}</td>
                          <td>{{ user.country }}</td>
                          <td>{{ user.Phone }}</td>
                          <td>{{ user.email }}</td>
                          <td>
                            <div class="d-flex justify-content-center gap-2">
                              
                              <router-link :to="{ name: 'userdetails', params: { id: user.id } }"> <i class="fa fa-eye" style="color: beige"></i></router-link>


                              <a>
                                <i
                                  class="fa fa-trash"
                                  style="color: brown"
                                  @click="userDelete(user.id)"
                                ></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <nav v-show="totalPages > 1" aria-label="Page navigation example mt-3">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item" :class="{
                                            disabled: currentPage === 1,
                                        }">
                                            <button class="page-link" @click="previousPage" :disabled="currentPage === 1">
                                                Previous
                                            </button>
                                        </li>
                                        <li class="page-item">
                                            <span class="btn ">Page {{ currentPage }} of {{ totalPages }}</span>
                                        </li>

                                        <li class="page-item">
                                            <button class="page-link" @click="nextPage" :class="{
                                                disabled: currentPage === totalPages,
                                            }">
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
import { useAuthUserStore } from "../../store/user";

export default {
  data() {
    return {
      alluser: "",

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 10, // Number of items to display per page
    };
  },
  methods: {
    userDelete(id) {
      axios
        .get(`/api/user.delete/${id}`)
        .then((response) => {






          const User = useAuthUserStore();
          this.alluser = User.deleteUser(id);

          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });
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
    },
  },

  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    totalPages() {
      return Math.ceil(this.alluser.length / this.itemsPerPage);
    },
    // Get the items to display on the current page
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.alluser.slice(start, end);
    },
  },

  async created() {
    // auth user data +++++++++++++++++++++++++++++

    const userStore = useAuthUserStore();
    const alluser = userStore.allUser;

    if (alluser) {
      this.alluser = alluser;
    } else {
      // userStore.reSetAuthUser();
      this.alluser = await userStore.getAllUser();
    }
    this.$setLoading(false);
  },
};
</script>


<style scoped>
@import "./../../assets/main.css";
</style>
