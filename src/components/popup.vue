<script>
export default {
    
}
</script>

<template>


		
		<div class="">
		  <div class="" >
		    <div class="">
		
		      <div class="row no-gutters">
			      <div class="col-md-5 d-flex">
				      <div class="modal-body p-5 color-1 d-flex">
				      	<span class="icon-2 flaticon-snowflake"></span>
				      	<div class="w-100 text text-center">
				      		<span class="subheading">Winter</span>
					      	<h3 class="sale">Sale
					      		<span class="icon flaticon-snowflake"></span>
					      	</h3>
					      	<h2><span>40</span><sup>%</sup><sub>off</sub></h2>
					      	<p class="upper">To all colorlib products</p>
				      	</div>
				      </div>
				    </div>
				    <div class="col-md-7 d-flex">
				      <div class="modal-body p-5 img d-flex align-items-center" style="background-image: url(images/bg-1.jpg);">
				      	<div class="text w-100">
				      		<a href="#" class="btn btn-primary d-block py-3">Shop now</a>
				      	</div>
				      </div>
				    </div>
				  </div>
		    </div>
		  </div>
		</div>

</template>
<style scoped>
/* :root {
  --font-primary: 'Lato', Arial, sans-serif;
  --font-secondary: 'Pacifico', cursive;
  --primary: #39bdc8;
  --black: #000;
  --white: #fff;
}

body {
  font-family: var(--font-primary);
  font-size: 15px;
  line-height: 1.8;
  font-weight: normal;
} */

a {
  transition: .3s all ease;
  color: var(--primary);
}
a:hover, a:focus {
  text-decoration: none !important;
  outline: none !important;
  box-shadow: none;
}

button {
  transition: .3s all ease;
}
button:hover, button:focus {
  text-decoration: none !important;
  outline: none !important;
  box-shadow: none !important;
}

h1, h2, h3, h4, h5,
.h1, .h2, .h3, .h4, .h5 {
  line-height: 1.5;
  font-weight: 400;
  font-family: var(--font-primary);
}

.img,
.blog-img,
.user-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.ftco-footer-social li {
  list-style: none;
  margin: 0 10px 0 0;
  display: inline-block;
}

.ftco-footer-social li a {
  height: 40px;
  width: 40px;
  display: block;
  background: rgba(0, 0, 0, .05);
  border-radius: 50%;
  position: relative;
}

.ftco-footer-social li a span {
  position: absolute;
  font-size: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ftco-footer-social li a:hover {
  color: var(--white);
}

.form-control {
  height: 52px;
  background: var(--white);
  color: var(--black);
  font-size: 15px;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, .1);
}

.form-control:focus, .form-control:active {
  outline: none !important;
  box-shadow: none;
  border: 1px solid var(--primary);
}

textarea.form-control {
  height: inherit !important;
}

.btn {
  cursor: pointer;
  border-radius: 4px;
  box-shadow: none !important;
  font-size: 15px;
}
.btn:hover, .btn:active, .btn:focus {
  outline: none;
}

.btn-primary {
  background: var(--primary) !important;
  border: 1px solid var(--primary) !important;
  color: var(--white) !important;
}

.btn-primary:hover {
  border: 1px solid var(--primary);
  background: transparent;
  color: var(--primary);
}

.btn-outline-primary {
  border: 1px solid var(--primary);
  background: transparent;
  color: var(--primary);
}

.btn-outline-primary:hover {
  border: 1px solid transparent;
  background: var(--primary);
  color: var(--white);
}

.ftco-section {
  background: var(--white);
}

.ftco-section h2 {
  margin-bottom: 0;
}

.modal {
}

.modal-dialog {
  max-width: 700px;
}

.modal-content {
  border: none;
  position: relative;
  padding: 0 !important;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  border-radius: 0;
  box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
}

.modal-content h3 {
  color: var(--white);
  font-weight: 300;
}

.modal-header {
  padding: 0;
  border: none;
}

button.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  margin: 0;
  width: 40px;
  height: 40px;
  z-index: 1;
  text-shadow: none;
  background: rgba(0, 0, 0, .1);
}

.modal-body {
  border: none;
  position: relative;
  z-index: 0;
}

.modal-body .icon-2 {
  font-size: 120px;
  position: absolute;
  top: 0;
  right: 0;
  line-height: 0;
  z-index: -1;
  color: rgba(255, 255, 255, .3);
}

.modal-body.color-1 {
  background: var(--primary);
}

.modal-body .subheading {
  font-size: 14px;
  text-transform: uppercase;
  color: var(--black);
  letter-spacing: 1px;
}

.modal-body .sale {
  font-size: 105px;
  font-family: var(--font-secondary);
  color: var(--black);
  position: relative;
  margin-bottom: 30px;
  z-index: 0;
}

.modal-body .sale .icon {
  font-size: 60px;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 0;
  z-index: 1;
  color: var(--white);
}

.modal-body .sale:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  width: 50px;
  height: 2px;
  background: var(--white);
  margin: 0 auto;
}

.modal-body h2 {
  position: relative;
  display: inline-block;
  line-height: 1;
}

.modal-body h2 span {
  font-size: 130px;
  font-weight: 700;
  margin-left: -40px;
  color: var(--white);
}

.modal-body h2 sup {
  position: absolute;
  top: 50%;
  right: -30px;
  font-size: 30px;
  font-weight: 700;
  margin-top: 10px;
}

.modal-body h2 sub {
  position: absolute;
  bottom: 50%;
  right: -30px;
  margin-bottom: -35px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
}

.modal-body .upper {
  text-transform: uppercase;
}

.modal-body .btn-primary {
  color: var(--black) !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
}

.img {
  height: 300px;
}


</style>