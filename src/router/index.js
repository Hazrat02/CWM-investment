import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'

// user
import DeshboardView from '../views/Deshboard/DeshboardView.vue'
import UserView from '../views/Deshboard/UserView.vue'
import KycView from '../views/Deshboard/KycView.vue'
import DepositView from '../views/Deshboard/DepositView.vue'
import WithdrawView from '../views/Deshboard/WithdrawView.vue'
import EconomicView from '../views/Deshboard/EconomicView.vue'
import TransactionView from '../views/Deshboard/TransactionView.vue'
import PaymentDetailsView from '../views/Deshboard/PaymentDetailsView.vue'
import AccountView from '../views/Deshboard/AccountView.vue'


// admin
import AdminDeshboardview from '../views/Admin/DeshboardView.vue'
import UserManageview from '../views/Admin/UserManageview.vue'
import LeadsManageview from '../views/Admin/LeadsManageview.vue'
import OfferManageview from '../views/Admin/OfferManageview.vue'
import PortfolioManageView from '../views/Admin/PortfolioManageView.vue'
import AdminTransactionView from '../views/Admin/TransactionView.vue'


import LoginComponent from '../views/Auth/Login.vue'
// import GoogleAds from '../components/earn/GoogleAds.vue'
import RegisterComponent from '../views/Auth/Register.vue'
import ForgetComponent from '../views/Auth/Forget.vue'
import authenticated from '../midleware/auth.js';
import { logout } from "../midleware/auth.js";
import { setloading } from '../utils/extra'
import axios from 'axios';



const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [



    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        // Layout:HomeLayout,
        // requiresAuth:'auth'
      },
      
    },
    {
      path: '/about',
      name: 'about',
     
      component: AboutView,
      meta:{
        // Layout:HomeLayout,
      },
    },
    {
      path: '/login',
      name: 'login',
   
      component:LoginComponent,
      meta:{
      requiresGuest:true,
      },
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:RegisterComponent,
      meta:{
        requiresGuest:true,
      },
    },
    {
      path: '/forget',
      name: 'forget',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:ForgetComponent,
      meta:{
        // Layout:AuthLayout,
      },
    },
    {
      path: '/servics',
      name: 'servics',

      component:ServicesView,
     
    },
    {
      path: '/contact',
      name: 'contactUs',
  
      component:ContactView,
 
    },
    


    // user Deshboard--------------------------------------------------
    {
      path: '/dashboard',
      name: 'dashboard',

      component:DeshboardView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/kyc',
      name: 'kyc',

      component:KycView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/profile',
      name: 'profile',

      component:UserView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/economic',
      name: 'economic',

      component:EconomicView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/deposit',
      name: 'deposit',

      component:DepositView,
      meta:{
        requiresAuth:true,
      },
    },
    
    {
      path: '/withdraw',
      name: 'withdraw',

      component:WithdrawView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/transaction',
      name: 'transaction',

      component:TransactionView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/payment/details',
      name: 'payment',

      component:PaymentDetailsView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/account',
      name: 'account',

      component:AccountView,
      meta:{
        requiresAuth:true,
      },
    },




    // admin----------------------------
    {
      path: '/admin/dashboard',
      name: 'admindashboard',

      component:AdminDeshboardview,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/admin/user',
      name: 'alluser',

      component:UserManageview,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/admin/leads',
      name: 'leads',

      component:LeadsManageview,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/admin/offer',
      name: 'offer',

      component:OfferManageview,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/admin/portfolio',
      name: 'portfolio',

      component:PortfolioManageView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/admin/transaction',
      name: 'Admintransaction',

      component:AdminTransactionView,
      meta:{
        requiresAuth:true,
      },
    },
    
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },

})




router.beforeEach((to, from, next) => {
  // Function to check if the JWT token is expired
  function isTokenExpired(token) {
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = tokenData.exp * 1000; // Convert expiration time to milliseconds
    return Date.now() >= expirationTime;
  }
  const jwtToken = localStorage.getItem('token');
  if (jwtToken && isTokenExpired(jwtToken)) {
    // Clear the localStorage and redirect to the login page
    localStorage.removeItem('token');
    logout();
    next('/login');
  } else {
    // Allow navigation to the next route
    
  // Check if the route requires authentication and user is not authenticated
  if (to.meta.requiresAuth && !authenticated()) {
    // Redirect to login page or any other desired route
    next('/login');
  } else {
    // Check if the route requires a guest (unauthenticated user) and user is authenticated
    if (to.meta.requiresGuest && authenticated()) {
      next('/');
    } else {
      // https://api.capitalswealthmanagement.com/
      axios.defaults.baseURL='http://127.0.0.1:8000';
      axios.defaults.headers.common['Authorization']='bearer'+localStorage.getItem('token');
     

      next();
      setloading(true);
    
    }
  }
  }
})






export default router
