<template>
  <div>
    <form class="mb-3" @submit.prevent="">
      <v-text-field v-model="newProduct.name" label="Имя продукта"></v-text-field>

      <v-text-field v-model="newProduct.price" label="Цена"></v-text-field>

      <v-checkbox v-model="isPlant" label="Растение" type="checkbox" />

      <v-text-field v-model="newProduct.height" v-if="isPlant" label="Высота"></v-text-field>

      <v-select v-model="newProduct.pot" v-if="isPlant" :items="items" label="Тип горшка"></v-select>

      <v-btn @click="send" class="me-4" type="submit">Отправить</v-btn>

      <v-btn @click="">Очистить</v-btn>
    </form>

    <v-data-table :headers="headers" :items="products"></v-data-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isPlant: true,
      items: ["P9", "D12", "C3", "C5"],
      headers: [
        { title: "Имя продукта", key: "name" },
        { title: "Высота", key: "height" },
        { title: "Цена", key: "price" },
        {
          title: "Тип горшка",
          key: "" + "pot",
        },
      ],
      products: [
        {
          name: "Кедр",
          height: 2.0,
          price: 4699,
          pot: "P9",
        },
      ],
      newProduct: {
        name: "",
        height: null,
        price: null,
        pot: null,
      },
    };
  },
  methods: {
    getProducts() {
      axios.get("http://127.0.0.1:8000/products").then((response) => {
        this.products = response.data;
      });
    },
    send() {
      this.newProduct.name = null;
      this.newProduct.height = null;
      this.newProduct.price = null;
      this.newProduct.pot = null;
    },
  },
  mounted() {
    // this.getProducts();
    axios.get('/345');
  },
};
</script>
