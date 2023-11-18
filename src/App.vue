<script setup>
import { ref } from "vue";

import Diolog from "@/components/Diolog.vue";

const EatInput = ref("");
const desserts = ref([
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
]);

function addFood() {
  desserts.value = [...desserts.value, { name: EatInput, calories: 100 }];
}
</script>

<template>
  <div class="main">
    <div>
      <a href="https://vuetifyjs.com/en/components/buttons/">
        <v-btn>Сайт Vuetify</v-btn>
      </a>
    </div>
    <div class="block">
      <Diolog
        text="у каждого компоненты из Vuetify есть много стилей(их можно задавать через пропсы). Всех их можно посмотреть у них на сайте https://vuetifyjs.com/en/components/all/#containment"
        name="советик :)"
      />
    </div>
    <div>
      <v-table height="300px">
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
            <th class="text-left">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>100+</td>
          </tr>
        </tbody>
      </v-table>
      <div>
        <v-text-field v-model="EatInput" label="Название еды" hide-details="auto"></v-text-field>
        <v-btn @click="addFood">Добавить</v-btn>
      </div>
      <div class="ma-4" style="text-align: center">
        <h1 class="text-h2">Нажав сюда можно смотреть код компонента</h1>
        <img src="@/assets/img.png" alt="" />
        <div class="text-amber-lighten-1 text-h4">
          Так же не стоит забывать что Vuetify предлагает свои стили, у него уже есть заготовленные
          классы
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block {
  margin: 10px 0;
}

.main {
  display: flex;
  flex-direction: column;
}
</style>
