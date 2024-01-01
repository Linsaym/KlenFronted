<template>

<!--  <v-chip v-for="tag in item.tags" :style="{background: tag.color}" class="mr-2 chip"  density="compact">{{ tag.name }}</v-chip>-->
  <v-card-title>{{ name }}</v-card-title>
</template>
<script>
import CardItem from "@/components/CardItem.vue";
import axios from "@/plugins/axios";

export default {
  components: {CardItem},
  data() {
    return {
      name: "",

      }
    },
  mounted() {
    axios.get('/tasks/' + this.$route.query.id).then((response) => {
      this.name = response.data.name
    })
  }
}

</script>