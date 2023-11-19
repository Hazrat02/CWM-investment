// import Backgrounds from './components/others/Bgs.vue'
// import Footer from './components/others/Footer.vue'
// import Header from './components/others/Header.vue'
// import Loading from './components/others/Loading.vue'
// import Dropdown from './components/others/Dropdown.vue'
// import MobileNav from './components/others/MobileNav.vue'
// import GoogleAds from './components/earn/GoogleAds.vue'
// import Modal from "./components/others/Modal.vue";



import {setloading,isLoading,setbackedUrl} from './utils/extra.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from 'vue3-particles'
import Notifications from '@kyvg/vue3-notification'





// pinia store==============================
import { createPinia } from 'pinia';


// const userStore = useUserStore();
// userStore.loadUserFromLocalStorage();




// ==========package=============
//
// import './assets/deshboard/vendor/bootstrap/js/bootstrap.bundle.min.js';
// import './assets/main.css';

// layouts
import HomeLayout from "./Layouts/HomeLayout.vue";
import DeshboardLayout from "./Layouts/DeshboardLayout.vue";
import AdminDeshboardLayout from "./Layouts/AdminDeshboardLayout.vue";




const app = createApp(App)
const pinia = createPinia();
app.use(router);

app.use(pinia);

app.use(Notifications);
app.use(Particles);
// Vue.use(Trend)
// =================component=============

app.component('HomeLayout', HomeLayout);
app.component('DeshboardLayout', DeshboardLayout);
app.component('AdminDeshboardLayout', AdminDeshboardLayout);







// extra==========================================
app.config.globalProperties.$setLoading = setloading;
app.config.globalProperties.$isLoading = isLoading;

app.config.globalProperties.$setbackedUrl = setbackedUrl;

app.mount('#app')

