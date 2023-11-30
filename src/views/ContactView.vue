
<script>
import axios from 'axios';

export default {
  data() {
    return {

        name:'',
        email:'',
        sub:'',
        sms:'',

    };
  },

 async created() {
   
    this.$setLoading(false);
  },


  methods: {
    
    async contact() {
      this.$setLoading(true);

     
        const formData = new FormData(); // Create a FormData object
        formData.append("name", this.name);
        formData.append("email", this.email);
        formData.append("sub", this.sub);
        formData.append("sms", this.sms);
    

       await axios
          .post("/api/contact.store", formData)
          .then((response) => {
    
            this.$setLoading(false);

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
};
</script>
<template>
  <div>
    <HomeLayout>
      <!-- Header Start -->
    <div class="container-fluid hero-headerpy-5  " style="
          .blur-background {
            background-color: #0d0a0b ;
            background-image: linear-gradient(90deg, #0d0a0b 0%, #009fc2 74%);
            backdrop-filter: blur(100px); /* Adjust the blur value as needed */
          }
        ">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 mb-3 animated slideInDown text-white">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>

                            <li class="breadcrumb-item " aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-lg-6 animated fadeIn">
                    <img class="img-fluid animated pulse infinite" style="animation-duration: 3s;" src="./../assets/frontend/img/hero-2.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->


    <!-- Contact Start -->
    <div class="container-xxl py-5" style="
          .blur-background {
            background-color: #0d0a0b ;
            background-image: linear-gradient(0deg, #0d0a0b 0%, #009fc2 74%);
            backdrop-filter: blur(100px); /* Adjust the blur value as needed */
          }
        ">
        <div class="container">
            <div class="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="col-lg-6">
                    <h1 class="display-6">Contact Us</h1>
                    <p class="text-primary fs-5 mb-0">If You Have Any Query, Please Contact Us</p>
                </div>
            
            </div>
            <div class="row g-5">
                <div class="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p class="mb-2 text-white">Our office:</p>
                    <h4>#18, Capitals Wealth Management Ltd, Wesltecot Rd., Swindon, United Kingdom</h4>
                    <hr class="w-100">
                    <p class="mb-2 text-white">Call us:</p>
                    <h4>+447817541947</h4>
                    <hr class="w-100">
                    <p class="mb-2 text-white">Mail us:</p>
                    <h4>info@capitalswealthmanagement.com</h4>
                    <hr class="w-100">
                    
                </div>
                <div class="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <p class="mb-4 text-white">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    <form @submit.prevent="contact">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="name" v-model="name" placeholder="Your Name">
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" v-model="email" class="form-control" id="email" placeholder="Your Email">
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" v-model="sub" id="subject" placeholder="Subject">
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" v-model="sms" placeholder="Leave a message here" id="message" style="height: 100px"></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary py-3 px-4" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact End -->


    <!-- Google Map Start -->
    <div class="container-xxl  px-0 wow fadeInUp" data-wow-delay="0.1s" style="
          .blur-background {
            background-color: #0d0a0b ;
            background-image: linear-gradient(0deg, #0d0a0b 0%, #009fc2 74%);
            backdrop-filter: blur(100px); /* Adjust the blur value as needed */
          }
        ">
        <iframe class="w-100 " style="height: 450px;"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    


    </HomeLayout>
  </div>
</template>

<style scoped>
@import "./../assets/home.css";
</style>

