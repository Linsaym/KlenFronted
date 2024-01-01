<template>
  <div class="container">
    <side-bar style="z-index: 100;position: absolute"></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'

export default {
  components: { SideBar }
}

</script>
<style>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
  position: relative;
  z-index: 0;
}
</style>