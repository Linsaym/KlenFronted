<template>
  <div>
    <v-icon icon="mdi-home" />
    <v-data-table :headers="headers" :items="desserts" :group-by="groupBy" item-value="name">
      <template v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }">
        <tr>
          <td :colspan="columns.length">
            <VBtn
              size="small"
              variant="text"
              :icon="isGroupOpen(item) ? '$expand' : '$next'"
              @click="toggleGroup(item)"
            ></VBtn>
            {{ item.value ? "Contains gluten" : "Gluten free" }}
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      groupBy: [
        {
          key: "gluten",
          order: "asc",
        },
      ],
      headers: [
        {
          title: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          key: "name",
        },
        { title: "Calories", key: "calories" },
        { title: "Fat (g)", key: "fat" },
        { title: "Carbs (g)", key: "carbs" },
        { title: "Protein (g)", key: "protein" },
        { title: "Iron (%)", key: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
          gluten: false,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
          gluten: false,
        },
      ],
    };
  },
};
</script>
<style></style>
