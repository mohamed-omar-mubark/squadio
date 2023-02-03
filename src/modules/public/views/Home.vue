<template>
  <v-card>
    <v-layout>
      <v-app-bar elevation="0" color="transparent">
        <v-toolbar-title class="text-h5">Home</v-toolbar-title>
      </v-app-bar>

      <v-main style="min-height: 150vh">
        <banner />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import Banner from "../components/home/Banner.vue";

export default {
  name: "Home",

  components: {
    Banner,
  },
};
</script>
