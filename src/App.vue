<template>
  <v-app>
    <v-main>
      <!-- loading -->
      <loader />
      <!-- router view -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Preloader from "@/modules/loading/components/Preloader.vue";

export default {
  name: "App",

  components: {
    loader: Preloader,
  },
};
</script>
