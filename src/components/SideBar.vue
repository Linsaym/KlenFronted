<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item prepend-avatar="https://randomuser.me/api/portraits/lego/8.jpg" title="Petrova Yulya"
            subtitle="petrova_you@mail.ru"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="products"><v-list-item prepend-icon="mdi-folder" title="Products page"
              value="myfiles"></v-list-item></router-link>
          <router-link to="/"><v-list-item prepend-icon="mdi-account-multiple" title="Main page"
              value="shared"></v-list-item></router-link>
          <router-link to="tasks"><v-list-item prepend-icon="mdi-star" title="Tasks"
              value="starred"></v-list-item></router-link>
          <router-link to="task"><v-list-item prepend-icon="mdi-star" title="One Task"
              value="starred"></v-list-item></router-link>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>