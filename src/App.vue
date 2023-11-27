<script >
// import { ref } from "vue";

// const input_content = ref("");
// const providers = ref([
//   {
//     code: 1,
//     name: "Агро миллион",
//     description: "Предлагаем саженцы и рассаду клубники, лучших сортов питомника",
//     phone: "+791344833**",
//     email: "zakaz@agromilli**.ru",
//     region: "Красноярский край",
//     locality: "Красноярск",
//     address: "Затонская 4",
//     date: "23.11.2023"
//   }
// ]);

// function addProvider() {
//   providers.value = [...providers.value, { name: input_content }];
//   console.log('rabotaet')
// }

export default {
  data: () => ({
      first: null,
      last: null,
      email: null,
      password: null,
      terms: false,
    }),
    data () {
      return {
        search: '',
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Поставщик',
          },
          { key: 'code', title: 'Код поставщика' },
          { key: 'name', title: 'Поставщик' },
          { key: 'description', title: 'Описание' },
          { key: 'phone', title: 'Телефон' },
          { key: 'email', title: 'Почта' },
          { key: 'region', title: 'Регион, область' },
          { key: 'locality', title: 'Населенный пункт' },
          { key: 'address', title: 'Адрес' },
          { key: 'date', title: 'Дата парсинга' },
        ],
        providers: [
          {
            code:  1,
            name: 'Агро миллион',
            description: 'Предлагаем саженцы и рассаду клубники, лучших сортов питомника',
            phone: '+791344833**',
            email: 'zakaz@agromilli**.ru',
            region: 'Красноярский край',
            locality: 'Красноярск',
            address: 'Затонская 4',
            date: '23.11.2023',
          },
          {
            code:  2,
            name: 'Питомник растений Малиновский',
            description: 'Оптовая продажа саженцев различных растений',
            phone: '+796184695**',
            email: 'malin**@mail.ru',
            region: 'Новосибирская область',
            locality: 'Новосибирск',
            address: 'Новосибирская 67',
            date: '24.11.2023',
          }
        ]
      }
    }
  }
</script>

<template>
  <div class="main">

    <v-card flat title="Поиск поставщика">
      <template v-slot:text>
        <v-text-field v-model="search" label="Поиск" prepend-inner-icon="mdi-magnify" single-line variant="outlined" hide-details></v-text-field>
      </template>
      <v-data-table :headers="headers" :items="providers" :search="search"></v-data-table>
    </v-card>
    <v-text-field v-model="input_content" label="Поствщик" hide-details="auto"></v-text-field>
    <v-btn @click="addProvider">Добавить</v-btn>
    <!-- <div>
      <v-table height="300px">
        <thead>
          <tr>
            <th class="text-left">Код поставщика</th>
            <th class="text-left">Поставщик</th>
            <th class="text-left">Описание</th>
            <th class="text-left">Телефон</th>
            <th class="text-left">Почта</th>
            <th class="text-left">Регион, область</th>
            <th class="text-left">Населенный пункт</th>
            <th class="text-left">Адрес</th>
            <th class="text-left">Дата парсинга</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in providers" :key="item.name">
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.region }}</td>
            <td>{{ item.locality }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.date }}</td>
          </tr>
        </tbody>
      </v-table>
      <div> -->
        <v-card
    class="mx-auto"
    max-width="344"
    title="Запись поставщика"
  >
    <v-container>
      <v-text-field
        v-model="first"
        color="primary"
        label="Код поставщика"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="last"
        color="primary"
        label="Поставщик"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Описание"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Телефон"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Почта"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Населенный пункт"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Адрес"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Дата парсинга"
        variant="underlined"
      ></v-text-field>

  
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success">
        Записать
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
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
