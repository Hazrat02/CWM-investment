<template>
  <div>
    <DeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4 d-flex justify-content-between px-3">
        <div class="">
          <span class="h5 mb-0">Upload Payment Details</span>
        </div>
        <div class="">
          <button v-if="authPayment"
            class="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Edit 
          </button>
        </div>
      </div>
      <!-- Breadcrumb-->
      <section class="pt-0" v-if="!authPayment">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-lg-12">
            
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header">
                    
                  </div>
                  <div class="card-body pt-0">
                    <form
                      class="row g-3 align-items-center"
                      @submit.prevent="payment" enctype="multipart/form-data"
                    >
                      
                      
                      <div class="col-lg-6">
                        <label class="" for="inlineFormSelectPref"
                          >Payment Method</label
                        >
                        <select
                          class="form-select"
                          id="inlineFormSelectPref"
                          v-model="method" required
                        >
                          <option selected disabled>Select</option>
                          <option value="bank">Bankwire</option>
                          <option value="crypto">Crypto Currency</option>
                        
                        </select>
                      </div>
                      <div class="col-lg-6" v-if="method == 'crypto'">
                        <label class="" for="Amount">Wallet Address</label>
                        <div class="input-group">
                          
                          <input required
                            v-model="wallet_address"
                            class="form-control"
                            id="Amount"
                            type="text"
                            placeholder="1x23dfsdf4re43"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'crypto'">
                        <label class="" for="Amount">Currency</label>
                        <div class="input-group">
                          
                          <input style="color: black;"  disabled
                            
                            class="form-control"
                            id="Amount"
                            type="text"
                            value="Usdt"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'crypto'">
                        <label class="" for="Amount">Wallet Tag Number for XRP and BNB currency</label>
                        <div class="input-group">
                          
                          <input 
                            
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="tag"
                            placeholder="Wallet Tag Number for XRP and BNB currency"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'crypto'">
                        <label class="" for="Amount">Address QR</label>
                        <div class="input-group">
                          
                          <input style="color: black;" 
                            @change="qrimage"
                            class="form-control"
                            id="Amount"
                            type="file"
                            
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'bank'">
                        <label class="" for="Amount">Bank Holder Name</label>
                        <div class="input-group">
                          
                          <input
                            
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="holder"
                            placeholder="Bank Holder Name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'bank'">
                        <label class="" for="Amount">Account Number</label>
                        <div class="input-group">
                          
                          <input 
                            
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="bank_address"
                            placeholder="Account Number"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'bank'">
                        <label class="" for="Amount">Recipient Bank Name</label>
                        <div class="input-group">
                          
                          <input 
                            
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="bank_name"
                            placeholder="Recipient Bank Name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'bank'">
                        <label class="" for="Amount">Recipient Bank IFSC</label>
                        <div class="input-group">
                          
                          <input 
                            placeholder="Recipient Bank IFSC"
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="ifsc"
                            
                          />
                        </div>
                      </div>
                      <div class="col-lg-6" v-if="method == 'bank'">
                        <label class="" for="Amount">Document</label>
                        <div class="input-group">
                          
                          <input 
                            @change="docimage"
                            class="form-control"
                            id="Amount"
                            type="file"
                            
                          />
                        </div>
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
      <section class="pt-0 mt-4" v-if="authPayment">
        <div class="container-fluid">
          <div class="row justify-content-center gy-4">
            

            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="row gy-3 align-items-center" v-if="authPayment.method == 'bank'">
                    <div class="col-md-6 col-12" >
                      <div class="col-lg-10">
                        <div>
                          <b for="">Payment Method: </b><span>{{ authPayment.method }}</span>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div>
                          <b for="">Bank Holder Name: </b
                          ><span>{{ authPayment.holder }}</span>
                        </div>
                      </div>
                      
                      <div class="col-lg-10">
                        <div>
                          <b for="">Account Number: </b
                          ><span>{{ authPayment.bank_address }}</span>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div>
                          <b for="">Recipient Bank Name: </b
                          ><span>{{ authPayment.bank_name }}</span>
                        </div>
                      </div>
                      <div class="col-lg-10 mb-3">
                        <div>
                          <b for="">Recipient Bank IFSC: </b
                          ><span>{{ authPayment.ifsc }}</span>
                        </div>
                      </div>
                      
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
                               <img class="img-fluid" :src="authPayment.doc" alt="">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row gy-3 align-items-center" v-if="authPayment.method == 'crypto'">
                    <div class="col-md-6 col-12" >
                      <div class="col-lg-10">
                        <div>
                          <b for="">Payment Method: </b><span>{{ authPayment.method }}</span>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div>
                          <b for="">Wallet Address: </b
                          ><span>{{ authPayment.wallet_address }}</span>
                        </div>
                      </div>
                      
                      <div class="col-lg-10">
                        <div>
                          <b for="">Currency: </b
                          ><span>USDT</span>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div>
                          <b for="">Wallet Tag Number: </b
                          ><span>{{ authPayment.tag }}</span>
                        </div>
                      </div>
                      
                      
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
                               <img class="img-fluid"  :src="authPayment.qr" alt="">
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
              <h5 class="modal-title" id="myModalLabel">Update Payment</h5>
              <button
                class="btn-close btn-close-white"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                      class="row g-3 align-items-center"
                      @submit.prevent="paymentEdit" enctype="multipart/form-data"
                    >
                      
                      
                      <div class="">
                        <label class="" for="inlineFormSelectPref"
                          >Payment Method</label
                        >
                        <select
                          class="form-select"
                          id="inlineFormSelectPref"
                          v-model="method" required
                        >
                          <option selected disabled>Select</option>
                          <option value="bank">Bankwire</option>
                          <option value="crypto">Crypto Currency</option>
                        
                        </select>
                      </div>
                      <div class="" v-if="method == 'crypto'">
                        <label class="" for="Amount">Wallet Address</label>
                        <div class="input-group">
                          
                          <input required
                            v-model="wallet_address"
                            class="form-control"
                            id="Amount"
                            type="text"
                            placeholder="1x23dfsdf4re43"
                          />
                        </div>
                      </div>
                      <div class="" v-if="method == 'crypto'">
                        <label class="" for="Amount">Currency</label>
                        <div class="input-group">
                          
                          <input style="color: black;"  disabled
                            
                            class="form-control"
                            id="Amount"
                            type="text"
                            value="Usdt"
                          />
                        </div>
                      </div>
                      <div class="" v-if="method == 'crypto'">
                        <label class="" for="Amount">Wallet Tag Number for XRP and BNB currency</label>
                        <div class="input-group">
                          
                          <input 
                            
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="tag"
                            placeholder="Wallet Tag Number for XRP and BNB currency"
                          />
                        </div>
                      </div>
                      <div class="" v-if="method == 'crypto'">
                        <label class="" for="Amount">Address QR</label>
                        <div class="input-group">
                          
                          <input style="color: black;" 
                            @change="qrimage"
                            class="form-control"
                            id="Amount"
                            type="file"
                            
                          />
                        </div>
                      </div>
                      <div class="" v-if="method == 'bank'">
                        <label class="" for="Amount">Bank Holder Name</label>
                        <div class="input-group">
                          
                          <input
                            
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="holder"
                            placeholder="Bank Holder Name"
                          />
                        </div>
                      </div>
                      <div class="" v-if="method == 'bank'">
                        <label class="" for="Amount">Account Number</label>
                        <div class="input-group">
                          
                          <input 
                            
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="bank_address"
                            placeholder="Account Number"
                          />
                        </div>
                      </div>
                      <div class="" v-if="method == 'bank'">
                        <label class="" for="Amount">Recipient Bank Name</label>
                        <div class="input-group">
                          
                          <input 
                            
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="bank_name"
                            placeholder="Recipient Bank Name"
                          />
                        </div>
                      </div>
                      <div class="" v-if="method == 'bank'">
                        <label class="" for="Amount">Recipient Bank IFSC</label>
                        <div class="input-group">
                          
                          <input 
                            placeholder="Recipient Bank IFSC"
                            class="form-control"
                            id="Amount"
                            type="text"
                            v-model="ifsc"
                            
                          />
                        </div>
                      </div>
                      <div class="" v-if="method == 'bank'">
                        <label class="" for="Amount">Document</label>
                        <div class="input-group">
                          
                          <input 
                            @change="docimage"
                            class="form-control"
                            id="Amount"
                            type="file"
                            
                          />
                        </div>
                      </div>
                      <div class="">
                        <button class="btn btn-primary" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
              
            </div>
           
          </div>
        </div>
      </div>
    
    </DeshboardLayout>
  </div>
</template>
    
  <script>
import axios from 'axios';
// import { useAuthUserStore } from "../../store/user";
// import { transactionStore } from "../../store/transaction";

export default {
  data() {
    return {
   
        wallet_address: "",
        bank_address: "",
        tag: "",
        qr: "",
        holder: "",
        bank_name: "",
        ifsc: "",
        doc: "",
        authPayment: [],

      method:'Select',
      alluser: [],
      userCount: "",
      userChange: "",
      transaction: [],
    };
  },

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
  methods: {
    qrimage(event) {
      this.qr = event.target.files[0];
    },
    docimage(event) {
      this.doc = event.target.files[0];
    },

    payment() {
      this.$setLoading(true);

        const formData = new FormData(); // Create a FormData object
        formData.append("method", this.method);
        formData.append("qr", this.qr);
        formData.append("doc", this.doc);
        formData.append("wallet_address", this.wallet_address);
        formData.append("bank_address", this.bank_address);
        formData.append("tag", this.tag);
        formData.append("holder", this.holder); // Append the file to the FormData object
        formData.append("bank_name", this.bank_name); // Append the file to the FormData object
        formData.append("ifsc", this.ifsc); // Append the file to the FormData object

        axios
          .post("/api/payment.store", formData, {
            headers: {
              "Content-Type": "multipart/form-data", // Set content type for file upload
            },
          })
          .then((response) => {

            this.authPayment=response.data.payment

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
    paymentEdit() {
      this.$setLoading(true);

        const formData = new FormData(); // Create a FormData object
        formData.append("method", this.method);
        formData.append("qr", this.qr);
        formData.append("doc", this.doc);
        formData.append("wallet_address", this.wallet_address);
        formData.append("bank_address", this.bank_address);
        formData.append("tag", this.tag);
        formData.append("holder", this.holder); // Append the file to the FormData object
        formData.append("bank_name", this.bank_name); // Append the file to the FormData object
        formData.append("ifsc", this.ifsc); // Append the file to the FormData object

        axios
          .post("/api/payment.edit", formData, {
            headers: {
              "Content-Type": "multipart/form-data", // Set content type for file upload
            },
          })
          .then((response) => {

            this.authPayment=response.data.payment


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

   await axios.get("/api/payment")
          .then((response) => {

            this.authPayment = response.data.payment;

            if (response.data.payment) {


              this.wallet_address=this.authPayment.wallet_address
              this.bank_address = response.data.payment.bank_address
              this.tag = response.data.payment.tag
  
              this.holder=response.data.payment.holder
              this.bank_name=response.data.payment.bank_name
              this.ifsc=response.data.payment.ifsc
   
      

            }
          })
          
      

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

    this.$setLoading(false);
  },
};
</script>
 
<style scoped>
@import "./../../assets/main.css";
b{
  color: rgb(214, 221, 228);
}
</style>