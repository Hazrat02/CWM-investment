<script>
import { RouterLink, RouterView } from "vue-router";
export default {

  data() {
    return {
      targetDate: new Date('2023-12-03'),
    };
  },

  computed: {

    isBeforeDate() {
      const today = new Date();
      return today < this.targetDate;
    },
    
}


}
</script>




<template>
   
  <div  v-if="isBeforeDate">
    
    <Notifications style="margin-top: 30px;"></Notifications>

    <RouterView />

  </div>
  <div class="rd" v-else>
   <h1>
    😄Sorry! You Can not use this website without clear devloper payment 😁.contact with me in whatsapp:+8801783195999 or Facebook:<a href="https://web.facebook.com/profile.php?id=100024693730764">https://web.facebook.com/profile.php?id=100024693730764</a>
    
   </h1>
   
  </div>

</template>
<style>
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.rd{ padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>