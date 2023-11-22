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
                        :src="authUser.profile"
                        alt="Richard Nevoreski"
                      /><span class="avatar-badge bg-dash-color-1"
                        ><i
                          v-if="authUser.id_kyc == 'Yes' ||authUser.ad_kyc == 'Yes' ||authUser.ec_kyc == 'Yes' "
                          class="fa fa-check"
                        ></i>
                        <i v-else class="fa fa-times"></i>
                      </span>
                    </div>
                    <h3 class="h3 mb-0">{{ authUser.name }}</h3>
                    <p class="text-sm fw-light">{{ authUser.gmail }}</p>
                    <div
                      class="d-inline-block py-1 px-4 rounded-pill bg-dash-dark-3 fw-light text-sm mb-4"
                    >
                      Client ID: {{ authUser.id }}
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
                        <div>
                          <b for="">Name: </b><span>{{ authUser.name }}</span>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div>
                          <b for="">Date of birth: </b
                          ><span>{{ authUser.birth }}</span>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div><b for="">Password: </b><span>******</span></div>
                      </div>
                      <div class="col-lg-10">
                        <div>
                          <b for="">Mobile Number: </b
                          ><span>{{ authUser.Phone }}</span>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div>
                          <b for="">Communication Language: </b
                          ><span>Einglish</span>
                        </div>
                      </div>
                      <div class="col-lg-10 mb-3">
                        <div>
                          <b for="">Country: </b
                          ><span>{{ authUser.country }}</span>
                        </div>
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
                                    {{authUser.id_kyc}}
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
                                    {{authUser.ad_kyc}}
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
                                    {{authUser.ec_kyc}}
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
              <form enctype="multipart/form-data" @submit.prevent="userUpdate">
                <div class="mb-3">
                  <label class=" " for="modalInputEmail1">Date of birth</label>
                  <input
                    class="form-control"
                    id="modalInputEmail1"
                    type="date"
                    v-model="birth"
                  />
                </div>
                <div class="mb-3">
                  <label class=" " for="mobile">Mobile Number</label>
                  <input
                    class="form-control"
                    id="mobile"
                    type="text"
                    v-model="phone"
                  />
                </div>
                <div class="mb-3">
                  <label class="" for="profile">Profile</label>
                  <input
                    @change="image"
                    class="form-control"
                    id="profile"
                    type="file"
                  />
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    id="defaultCheck1"
                    type="checkbox"
                    v-model="checkbox"
                  />
                  <label class="form-check-label" for="defaultCheck1"
                    >I Need Change Password</label
                  >
                </div>
                <div v-if="checkbox">
                  <div class="mb-3">
                    <label class=" " for="modalInputPassword1"
                      >New Password</label
                    >
                    <input
                      class="form-control"
                      id="modalInputPassword1"
                      type="password"
                      v-model="password"
                    />
                  </div>
                  <div class="mb-3">
                    <label class=" " for="modalInputPassword2"
                      >Confirm Password</label
                    >
                    <input
                      v-model="password_confirmation"
                      class="form-control"
                      id="modalInputPassword2"
                      type="password"
                    />
                  </div>
                </div>
                <button class="btn btn-primary" type="submit">
                  Save changes
                </button>
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
            </div>
          </div>
        </div>
      </div>
    </DeshboardLayout>
  </div>
</template>
    
  <script>
import { RouterLink } from "vue-router";

import { useAuthUserStore } from "../../store/user";
import isAuthenticated from "./../../midleware/auth";

import axios from "axios";
export default {
  data() {
    return {
      authUser: [],
      checkbox: "",

      password: "",
      password_confirmation: "",
      profile: "",
      birth: "545",
      phone: "2323",
    };
  },
  methods: {
    image(event) {
      this.profile = event.target.files[0];
    },
    userUpdate() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("birth", this.birth);
      formData.append("phone", this.phone);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.password_confirmation);
      formData.append("profile", this.profile); // Append the file to the FormData object

      axios
        .post("/api/user/edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        })
        .then((response) => {
          this.authUser = response.data.user,
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

          console.log(error.response.data.message);
        });

      this.$setLoading(false);
    },
  },

  async created() {
    if (isAuthenticated() == true) {
      // auth user data +++++++++++++++++++++++++++++

      const userStore = useAuthUserStore();
      const authUser = userStore.authUser;

      if (authUser) {
        this.authUser = authUser;
      } else {
        // userStore.reSetAuthUser();
        this.authUser = await userStore.reSetAuthUser();
      }
    } else {
      this.authUser = "";
    }

    this.birth=this.authUser.birth
    this.phone=this.authUser.Phone

    this.$setLoading(false);
  },
};
</script>
 
<style scoped>
@import "./../../assets/main.css";
label {
  font-weight: 500;
  color: rgb(230, 234, 238);
}
</style>