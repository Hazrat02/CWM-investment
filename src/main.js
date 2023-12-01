import {setloading,isLoading} from './utils/extra.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'





// pinia store==============================
import { createPinia } from 'pinia';


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
// Vue.use(Trend)
// =================component=============

app.component('HomeLayout', HomeLayout);
app.component('DeshboardLayout', DeshboardLayout);
app.component('AdminDeshboardLayout', AdminDeshboardLayout);







// extra==========================================
app.config.globalProperties.$setLoading = setloading;
app.config.globalProperties.$isLoading = isLoading;


app.mount('#app')

