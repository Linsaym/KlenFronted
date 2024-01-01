<template>
  <p v-if="loading">Подождите чуть чуть</p>
  <div class="sortedTasks d-flex ga-3 justify-center">
    <div class="doneTasks">
      <div class="cards" v-for="item in processTasks">
        <card-item :card="item" @click="$router.push({name: 'task', query: {id: item.id}})" />
      </div>
    </div>
    <div class="processTasks">
      <div class="cards" v-for="item in doneTasks">
        <card-item :card="item" @click="$router.push({name: 'task', query: {id: item.id}})"></card-item>
      </div>
    </div>
  </div>
</template>
<script>
import CardItem from "@/components/CardItem.vue";
import axios from "@/plugins/axios";
export default {
  components: { CardItem },
    data() {
        return {
          items: [],
          loading: true
        }
    },
  methods: {
    async getItems(){
      const {data} = await axios.get('/tasks');
      this.loading = false
      this.items = data;
    }
  },
  mounted() {
    this.getItems();
  },
  computed: {
      doneTasks(){
        return this.items.filter(item => !!item.completed === true)
      },
      processTasks(){
        return this.items.filter(item => !!item.completed === false)
      },
    },
}
</script>