<template>
  <v-app>
    <v-navigation-drawer app>
      <p>Навбар</p>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>I Can</h1>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <p>Footer</p>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
