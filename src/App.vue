<script>
import { RouterLink, RouterView } from "vue-router";
export default {

  data() {
    return {
      targetDate: new Date('2023-12-05'),
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

    <div>
    <Notifications style="margin-top: 30px;"></Notifications>

    <RouterView />

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