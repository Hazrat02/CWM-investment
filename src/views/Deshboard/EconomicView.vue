<template>
  <div>
    <DeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class="h5 mb-0">Profile Information</h2>
        </div>
      </div>
      <section class="pt-0" v-if="!authPayment">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header"></div>
                  <div class="card-body pt-0">
                    <form
                      class="row g-3 align-items-center"
                      @submit.prevent="payment"
                      enctype="multipart/form-data"
                    >
                      <div class="col-lg-6">
                        <label class="" for="inlineFormSelectPref">
                          Employment status</label
                        >
                        <select
                          class="form-select"
                          id="inlineFormSelectPref"
                          v-model="employ"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Employed">Employed</option>
                          <option value="Unemployed">Unemployed</option>
                          <option value="Self Employed">Self Employed</option>
                          <option value="Retired">Retired</option>
                          <option value="Student">Student</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="inlineFormSelectPref">
                          Industry</label
                        >

                        <select
                          class="form-select"
                          id="inlineFormSelectPref"
                          v-model="industry"
                          required
                        >
                          <option selected disabled>Select</option>

                          <option value="Accountancy">Accountancy</option>
                          <option value="Admin/ Secretarial">
                            Admin/ Secretarial
                          </option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Financial Services – Banking">
                            Financial Services – Banking
                          </option>
                          <option value="Catering/ Hospitality">
                            Catering/ Hospitality
                          </option>
                          <option value="Creative/ Media">
                            Creative/ Media
                          </option>
                          <option value="Education">Education</option>
                          <option value="Emergency Services">
                            Emergency Services
                          </option>
                          <option value="Engineering">Engineering</option>
                          <option value="Financial Services – Other">
                            Financial Services – Other
                          </option>
                          <option value="Health/Medicine">
                            Health/Medicine
                          </option>
                          <option value="HM Forces">HM Forces</option>
                          <option value="HR">HR</option>
                          <option value="Financial Services – Insurance">
                            Financial Services – Insurance
                          </option>
                          <option value="IT">IT</option>
                          <option value="Legal">Legal</option>
                          <option value="Leisure/ Entertainment/ Tourism">
                            Leisure/ Entertainment/ Tourism
                          </option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Marketing/PR/Advertising">
                            Marketing/PR/Advertising
                          </option>
                          <option value="Pharmaceutical">Pharmaceutical</option>
                          <option value="Property/Constructions/Trades">
                            Property/Constructions/Trades
                          </option>
                          <option value="Retail">Retail</option>
                          <option value="Sales">Sales</option>
                          <option value="Social Care/ Services">
                            Social Care/ Services
                          </option>
                          <option value="Telecommunications">
                            Telecommunications
                          </option>
                          <option value="Transport/Logistics">
                            Transport/Logistics
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="inlineFormSelectPref">
                          Source of Income/Funds</label
                        >

                        <select
                          class="form-select"
                          id="inlineFormSelectPref"
                          v-model="source_of_income"
                          required
                        >
                          <option selected disabled>Select</option>

                          <option value="Employment">Employment</option>
                          <option value="Savings/ Investments">
                            Savings/ Investments
                          </option>
                          <option value="Partner/ Parent/ Family">
                            Partner/ Parent/ Family
                          </option>
                          <option value="Private Pension">
                            Private Pension
                          </option>
                          <option value="Benefits/ Borrowing">
                            Benefits/ Borrowing
                          </option>
                          <option value="State Pension">State Pension</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="est_annual_income">
                          Estimated Annual Income (USD)</label
                        >

                        <select
                          class="form-select"
                          id="est_annual_income"
                          v-model="est_annual_income"
                          required
                        >
                          <option selected disabled>Select</option>

                          <option value="Less than 15,000">
                            Less than $15,000
                          </option>
                          <option value="15001 – 25000">
                            $15,001 – $25,000
                          </option>
                          <option value="25001 – 50000">
                            $25,001 – $50,000
                          </option>
                          <option value="50001 – 100000">
                            $50,001 – $100,000
                          </option>
                          <option value="100001 – 150000">
                            $100,001 – $150,000
                          </option>
                          <option value="150001 – 200000">
                            $150,001 – $200,000
                          </option>
                          <option value="More than 200000">
                            More than $200,000
                          </option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="est_net_worth">
                          Estimated Net Worth (USD)</label
                        >

                        <select
                          class="form-select"
                          id="est_net_worth"
                          v-model="est_net_worth"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Less than 15,000">
                            Less than $15,000
                          </option>
                          <option value="15001 – 25000">
                            $15,001 – $25,000
                          </option>
                          <option value="25001 – 50000">
                            $25,001 – $50,000
                          </option>
                          <option value="50001 – 100000">
                            $50,001 – $100,000
                          </option>
                          <option value="100001 – 150000">
                            $100,001 – $150,000
                          </option>
                          <option value="150001 – 200000">
                            $150,001 – $200,000
                          </option>
                          <option value="More than 200000">
                            More than $200,000
                          </option>
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="are_you_us_citizen">
                          Are you a US citizen for tax purposes?</label
                        >

                        <select
                          class="form-select"
                          id="are_you_us_citizen"
                          v-model="are_you_us_citizen"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Yes">
                            Yes
                          </option>
                          <option value="No">
                            No
                          </option>
                          
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="ever_traded">
                          Have you ever traded in derivatives or FX & CFD
                          products before?</label
                        >

                        <select
                          class="form-select"
                          id="ever_traded"
                          v-model="ever_traded"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Yes">
                            Yes
                          </option>
                          <option value="No">
                            No
                          </option>
                          
                        </select>
                      </div>
                      <div class="col-lg-6">
                        <label class="" for="previous_work_exp">
                          
Do you have previous work experience or any qualification that can help you to understand the risks related to trading in leveraged products?</label
                        >

                        <select
                          class="form-select"
                          id="previous_work_exp"
                          v-model="previous_work_exp"
                          required
                        >
                          <option selected disabled>Select</option>
                          <option value="Yes">
                            Yes
                          </option>
                          <option value="No">
                            No
                          </option>
                          
                        </select>
                      </div>

                      <div class="">
                        <button class="btn btn-primary" type="submit">
                          Update
                        </button>
                      </div>
                    </form>
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
              <form>
                <div class="mb-3">
                  <label class="form-label" for="modalInputEmail1"
                    >Date of birth</label
                  >
                  <input
                    class="form-control"
                    id="modalInputEmail1"
                    type="date"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label" for="mobile">Mobile Number</label>
                  <input class="form-control" id="mobile" type="text" />
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
                    <label class="form-label" for="modalInputPassword1"
                      >New Password</label
                    >
                    <input
                      class="form-control"
                      id="modalInputPassword1"
                      type="password"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="modalInputPassword1"
                      >Confirm Password</label
                    >
                    <input
                      class="form-control"
                      id="modalInputPassword1"
                      type="password"
                    />
                  </div>
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
    </DeshboardLayout>
  </div>
</template>
      
    <script>
import { useAuthUserStore } from "../../store/user";
import { transactionStore } from "../../store/transaction";

export default {
  data() {
    return {
      checkbox: "",
      alluser: [],
      userCount: "",
      userChange: "",
      transaction: [],

      employ: "Select",
      industry: "Select",
      source_of_income: "Select",
      est_annual_income: "Select",
      est_net_worth: "Select",
      ever_traded: "Select",
      previous_work_exp: "Select",
      are_you_us_citizen: "Select",
    };
  },

  // computed: {
  //   filteredUsers() {
  //     const oneMonthAgoUser = this.alluser.filter((item) => {
  //       const itemDate = new Date(item.created_at);
  //       const thirtyDaysAgo = new Date();
  //       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  //       return item.vip > 0 && itemDate < thirtyDaysAgo;
  //     });
  //     const lastMonthUser = this.alluser.filter((item) => {
  //       const itemDate = new Date(item.created_at);
  //       const thirtyDaysAgo = new Date();
  //       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  //       return item.vip > 0 && itemDate >= thirtyDaysAgo;
  //     });

  //     return {
  //       count: this.alluser
  //         .filter((user) => user.vip > 0)
  //         .length.toString()
  //         .padStart(4, "0"),
  //       change: (lastMonthUser.length / oneMonthAgoUser.length) * 100,
  //     };
  //   },
  //   filterTrx() {
  //     const oneMonthAgotransaction = this.transaction.filter((item) => {
  //       const itemDate = new Date(item.created_at);
  //       const thirtyDaysAgo = new Date();
  //       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  //       return itemDate < thirtyDaysAgo;
  //     });
  //     const lastMonthtransaction = this.transaction.filter((item) => {
  //       const itemDate = new Date(item.created_at);
  //       const thirtyDaysAgo = new Date();
  //       thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  //       return itemDate >= thirtyDaysAgo;
  //     });

  //     return {
  //       count: this.transaction.length.toString().padStart(4, "0"),
  //       change:
  //         (lastMonthtransaction.length / oneMonthAgotransaction.length) * 100,
  //     };
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
    // this.userCount = this.alluser.length.toString().padStart(4, "0");

    // const oneMonthAgoUser = this.alluser.filter((item) => {
    //   const itemDate = new Date(item.created_at); // Convert itemDate to a Date object
    //   const thirtyDaysAgo = new Date();
    //   thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    //   return itemDate < thirtyDaysAgo;
    // });
    // const lastMonthUser = this.alluser.filter((item) => {
    //   const itemDate = new Date(item.created_at); // Convert itemDate to a Date object
    //   const thirtyDaysAgo = new Date();
    //   thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    //   return itemDate >= thirtyDaysAgo;
    // });
    // this.userChange = (lastMonthUser.length / oneMonthAgoUser.length) * 100;

    // const getTransaction = transactionStore();

    // // Try to get the data from the store
    // const transactionData = getTransaction.allTransaction;

    // if (transactionData) {
    //   this.transaction = transactionData;
    // } else {
    //   // If data is not available, fetch it and set the component property
    //   this.transaction = await getTransaction.allUserTransaction();
    // }

    this.$setLoading(false);
  },
};
</script>
   
  <style scoped>
@import "./../../assets/main.css";
</style>