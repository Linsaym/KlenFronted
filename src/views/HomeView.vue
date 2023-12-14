<template>
  <main>
    <div>
      <div>

      </div>
      <div class="topBlock">
        <v-card class="flex-1-1 pa-8">
          <v-autocomplete v-model="product_id" label="Товар" :items="products" item-value="id" item-title="name" />
          <v-text-field v-model="count" label="Количество" maxlength="4" :rules="[rules.required, rules.number]" />
          <v-btn class="mt-3" variant="tonal" @click="postSale">Добавить продажу</v-btn>
        </v-card>
      </div>
      <vue-date-picker style="width: 100%" v-model="date" model-auto range :enable-time-picker="false" preview-format />
      <v-data-table v-model:expanded="expanded" :headers="headers" :items="sales" item-value="id" show-expand>
        <template v-slot:item.created_at="{ item }">
          <div>{{ getFormatedDate(item.created_at) }}</div>
        </template>
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>
              <div class="d-flex ga-4">Продажи</div>
            </v-toolbar-title>
          </v-toolbar>
        </template>
        <template v-slot:expanded-row="{ columns, item }">
          <tr>
            <td :colspan="columns.length">
              <div>345</div>
            </td>
          </tr>
        </template>
        <template v-slot:no-data></template>
        <template #tfoot>
          <div>
            <v-label class="ml-4">Итоговая выручка {{ revenue }}</v-label>
          </div>
        </template>
      </v-data-table>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import repository from "@/plugins/axios"

export default {
  data() {
    return {
      date: new Date(),
      expanded: [],
      product_id: null,
      count: 1,
      headers: [
        { title: "Товар", key: "name" },
        { title: "Цена", key: "price" },
        { title: "Количество", key: "count" },
        { title: "Дата", key: "created_at" },
      ],
      sales: [],
      products: [],
      rules: {
        required: (value) => !!value || "Поле обязательно для заполнения",
        number: (value) => !isNaN(value) || "Поле должно быть числом",
      },
    };
  },
  computed: {
    revenue() {
      let revenue = 0;
      if (this.sales.length > 0) {
        this.sales.forEach((el) => {
          revenue += el.price * el.count;
        });
      }
      return revenue;
    },
  },
  methods: {
    async getProducts() {
      const { data } = await axios.get("http://192.168.0.113:8000/products");
      this.products = data;
    },
    async getSales() {
      const { data } = await axios.get("http://192.168.0.113:8000/sales");
      this.sales = data;
    },
    getFormatedDate(inputDate) {
      const dateObject = new Date(inputDate);
      const day = dateObject.getDate();
      const month = dateObject.getMonth() + 1; // Месяцы в JavaScript нумеруются с 0, поэтому добавляем 1
      const year = dateObject.getFullYear();
      const hours = dateObject.getHours();
      const minutes = dateObject.getMinutes().toString().padStart(2, "0");
      return `${day}.${month}.${year} ${hours}:${minutes}`;
    },
    async postSale() {
      const { data } = await axios.post("http://192.168.0.113:8000/sales", {
        count: this.count,
        product_id: this.product_id,
      });
      this.sales = [...this.sales, data];
    },
  },
  mounted() {
    // this.getProducts();
    // this.getSales();
    repository.get()
  },
};

</script>
<style scoped>
.topBlock {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
}

@media screen and (max-width: 1200px) {
  .topBlock {
    flex-direction: column;
  }

  .topBlock_datePicker {
    margin: 0;
  }
}
</style>
