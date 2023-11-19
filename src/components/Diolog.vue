<script setup>
const props2 = defineProps(["text", "name"]);
</script>

<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn variant="outlined" v-bind="props" :text="props2.name"></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
          {{ props2.text }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped></style>
