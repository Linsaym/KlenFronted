<template>
  <div>
    <div class="topBlock">
      <v-card class="flex-1-1 pa-8">
        <v-autocomplete label="Товар" />
        <v-text-field label="Количество" maxlength="4" />
        <v-btn variant="tonal">Добавить продажу</v-btn>
      </v-card>
    </div>
    <vue-date-picker
      style="width: 100%"
      v-model="date"
      model-auto
      range
      :enable-time-picker="false"
      preview-format
    />
    <v-data-table
      v-model:expanded="expanded"
      :headers="headers"
      :items="sales"
      item-value="name"
      show-expand
    >
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
            <div>Calories {{ item.calories }}</div>
            <div>345</div>
          </td>
        </tr>
      </template>
      <template v-slot:no-data></template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: new Date(),
      expanded: [],
      headers: [
        { title: "Товар", key: "calories" },
        { title: "Цена", key: "fat" },
        { title: "Количество", key: "carbs" },
        { title: "Дата", key: "protein" },
        { title: "Iron (%)", key: "iron" },
        { title: "", key: "data-table-expand" },
      ],
      sales: [],
    };
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
