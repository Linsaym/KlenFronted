<template>
  <sideBar></sideBar>
  <router-view></router-view>
</template>

<script>
import sideBar from './views/SideBar.vue'

export default {
  components: { sideBar }
}

</script>