<script>
import { RouterLink, RouterView } from "vue-router";
export default {};
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

</style>