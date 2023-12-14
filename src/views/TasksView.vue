<template>
  <div class="cards">
    <div class="cards-card" v-for="item in items">
      <v-card class="mx-auto my-3 card" :style="{borderLeftColor: item.completed ? 'yellowgreen' : 'tomato'}" width="344" elevation="5">
        <v-card-item>
          <v-chip v-for="tag in item.tags" :style="{background: tag.color}" class="mr-2 chip"  density="compact">{{ tag.text }}</v-chip>
          <v-card-title>{{ item.name }}</v-card-title>
          <!--            <v-card-text class="pa-0 pb-3">{{ item.description }}</v-card-text>-->
          <div class="d-flex justify-space-between">
            <v-card-subtitle>
              {{ item.deadline }}
            </v-card-subtitle>
            <v-card-subtitle class="float-right">
              Время выполнения: {{ item.estimated_hours }} ч.
            </v-card-subtitle>
          </div>
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {

            items: [
                {
                    "id": 1,
                    "name": "Подготовить презентацию",
                    "description": "Создать презентацию для встречи с клиентами",
                    "tags": [{ id: 1, text: 'Работа', color: 'LightCoral' }, { id: 2, text: 'Презентация', color: 'Plum' }, { id: 2, text: 'Клиенты', color: 'LightBlue' }],
                    "deadline": "2023-12-30",
                    "estimated_hours": 5,
                    "completed": false
                },
                {
                    "id": 2,
                    "name": "Закупить продукты",
                    "description": "Купить продукты для приготовления ужина",
                    "tags": [{ id: 1, text: 'Покупки', color: 'SandyBrown' }, { id: 2, text: 'Ужин', color: 'Teal' }],
                    "deadline": "2023-12-15",
                    "estimated_hours": 1,
                    "completed": true
                },
                {
                    "id": 3,
                    "name": "Прочитать книгу",
                    "description": "Закончить чтение 'Мастер и Маргарита'",
                    "tags": [{ id: 1, text: 'Чтение', color: 'OliveDrab' }, { id: 2, text: 'Литература', color: 'IndianRed' }],
                    "deadline": "2023-12-20",
                    "estimated_hours": 10,
                    "completed": true
                }
            ]
        }
    },
    computed: {
      
    }
};
</script>
<style>
.card {
  border-left: 4px solid;
}
.chip{
  color: white;
}
</style>