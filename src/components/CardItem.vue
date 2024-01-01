<template>
  <v-card class="mx-auto my-3 card" :style="{borderLeftColor: card.completed ? 'yellowgreen' : 'tomato'}" width="344" elevation="5">
    <v-card-item>
      <v-chip v-for="tag in card.tags" :style="{background: tag.color}" class="mr-2 chip"  density="compact">{{ tag.name }}</v-chip>
      <v-card-title>{{ card.name }}</v-card-title>
      <div class="d-flex justify-space-between">
        <v-card-subtitle @click="asd">
          {{ card.deadline }}
        </v-card-subtitle>
        <v-card-subtitle class="float-right">
          Время выполнения: {{ card.estimated_hours }} ч.
        </v-card-subtitle>
      </div>
    </v-card-item>
  </v-card>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    asd(){
      console.log(123)
    }
  }
}
</script>
<style>
.card {
  border-left: 4px solid;
}
</style>