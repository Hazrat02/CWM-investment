<template>
    <div>
        <DeshboardLayout>
            <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">Deposit Funds</h2>
        </div>
      </div>
            <section class="pt-0">
          <div class="container-fluid">
            <div class="row gy-4">
              <div class="col-lg-12">
                <!-- Stat card-->
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="row gx-sm-5">
                      <div class="col-6 border-sm-end border-dash-dark-1">
                            <!-- Stat item-->
                            <div class="d-flex"><i class="mt-3 fas fa-caret-up  text-success"></i>
                              <div class="ms-2">
                                <p class="text-xl fw-normal mb-0">5.657</p>
                                <p class="text-uppercase text-sm fw-light mb-2">Wallet Account Balance</p>
                                <div class="progress" style="height: 2px">
                                  <div class="progress-bar bg-dash-color-1" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="col-6">
                            <!-- Stat item-->
                            <div class="d-flex"><i class="mt-3 fas  fa-caret-down text-danger "></i>
                              <div class="ms-2">
                                <p class="text-xl fw-normal mb-0">00.00</p>
                                <p class="text-uppercase text-sm fw-light mb-2">Live Account Balance</p>
                                <div class="progress" style="height: 2px">
                                  <div class="progress-bar bg-dash-color-2" role="progressbar" style="width: 35%;" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div class="col-lg-12">                           
                <div class="card">
                  <div class="card-header">
                    <h3 class="h4 mb-0">Deposit Your Money</h3>
                  </div>
                  <div class="card-body pt-0">
                    <form class="row g-3 align-items-center">
                        
                        <div class="col-lg-6">
                        <label class="" for="Account">Account Category</label>
                        <select class="form-select" id="Account">
                          <option selected>Select...</option>
                          <option value="1">Wallet Account</option>
                          <option value="2">Live Account</option>
                          
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="Amount">Deposit Amount</label>
                        <div class="input-group">
                          <div class="input-group-text">$</div>
                          <input class="form-control" id="Amount" type="text" placeholder="Min 10">
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="inlineFormSelectPref">Payment Method</label>
                        <select class="form-select" id="inlineFormSelectPref">
                          <option selected>Select...</option>
                          <option value="1">Bitcoin</option>
                          <option value="2">BNB</option>
                          <option value="3">Lite Coin</option>
                          <option value="3">Trust Wallet</option>
                          <option value="3">Bit Pay</option>
                        </select>
                      </div>
                      <div class="">
                        <button class="btn btn-primary" type="submit">Deposit Now</button>
                      </div>
                    </form>
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

import { useAuthUserStore } from "../../store/user";
import isAuthenticated from "../../midleware/auth";
import { vipStore } from "../../store/vip";
import { workStore } from "../../store/work";
import MultiSelect from "../../components/others/MultiSelect.vue"; // Adjust the path to the MultiSelect component
import axios from "axios";

export default {
    components: {
        MultiSelect,
    },
    data() {
        return {
            options: [
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
                { label: "Option 3", value: "3" },
            ],
            showEditModal: false,
            editId: "",
            name: '',
            vip_id: '1',
            description: '',
            earn: '',
            icon: '',
            component: '',

            selectedOptions: [], // Initialize it as an empty ar
            work: [],
            authUser: "",
            vip: "",
            active: "",
            isLoading: true,
            cryptoData: {},
            showModal: false,
            modalHeight: "auto",
            modalPosition: "justify-content-center align-items-center", // Set the default position here, other options: top, right, bottom, left
            modalWidth: "col-11 col-md-6 bg-white rounded-4 top-0 ",
        };
    },

    methods: {
        workdelete(id) {


            this.$setLoading(true);
            console.log(id)
            axios.delete(`api/work.delete/${id}`)
                .then((response) => {



                    this.$notify({
                        title: "message",
                        text: response.data.message,
                        type: "success",
                    });
                    const works = workStore();
                    this.work = works.deletework(id);
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


        WorkStore() {
            this.$setLoading(true);
            const data = {
                name: this.name,

                vip_id: this.vip_id,
                description: this.description,
                earn: this.earn,
                icon: this.icon,
                component: this.component,
            };
            axios
                .post("/api/work.create", data)
                .then((response) => {
                    this.showModal = false


                    this.$notify({
                        title: "message",
                        text: response.data.message,
                        type: "success",
                    });

                    const works = workStore();
                    this.work = works.addWork(response.data.work);
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
        workeditmodal(id) {

            const item = this.work.find(item => item.id === id);
            this.name = item.name

            this.vip_id = item.vip_id

            this.description = item.description

            this.earn = item.earn
            this.component = item.component



            this.icon = item.icon
            this.editId = id

            this.showEditModal = true


        },
        workEdit() {

            this.showeditModal = false
            this.$setLoading(true);


            const id = this.editId
            const data = {
                name: this.name,
                description: this.description,
                earn: this.earn,
                vip_id: this.vip_id,
                component: this.component,
                icon: this.icon,

            }


            axios.put(`api/work.edit/${id}`, data)
                .then((response) => {

                    this.$notify({
                        title: "message",
                        text: response.data.message,
                        type: "success",
                    });
                    this.showEditModal = false
                    const index = this.work.findIndex(item => item.id === id);
                    if (index !== -1) {

                        this.work[index].name = this.name;
                        this.work[index].description = this.description;
                        this.work[index].earn = this.earn;
                        this.work[index].vip_id = this.vip_id;
                        this.work[index].icon = this.icon;
                        this.work[index].component = this.component;


                        this.$set(this.work, index, this.work[index]);
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

        },

        // Multiselect(event) {
        //     console.log(event)
        // }
    },


    async created() {
        this.$setLoading(false);
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
            // worrk dataaaa------------------------------------------
            const works = workStore();
            const allwork = works.work;
            if (allwork) {
                this.work = allwork;
            } else {
                // userStore.reSetAuthUser();
                this.work = await works.getWork();
            }

            console.log(this.work)
        } else {
            this.authUser = "";
            this.work = "";
        }

        console.log(this.work);
        // auth user data +++++++++++++++++++++++++++++

        const vipPlan = vipStore();
        const allVip = vipPlan.vip;

        if (allVip) {
            this.vip = allVip;
        } else {
            // userStore.reSetAuthUser();
            this.vip = await vipPlan.getVip();
        }

        this.$setLoading(false);
    },

};
</script>
  
<style scoped>
a {
    color: black !important;
    text-decoration: none;
    transition: 0.3s;
}

a:hover {
    color: rgb(1, 9, 17) !important;
    text-decoration: none;
}
</style>
  