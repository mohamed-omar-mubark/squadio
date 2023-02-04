<template>
  <v-card rounded="0">
    <v-layout>
      <!-- <v-app-bar elevation="0" color="transparent">
        <v-toolbar-title class="text-h5">Home</v-toolbar-title>
      </v-app-bar> -->

      <v-main style="min-height: 150vh">
        <public-header />
        <banner />
        <trusted-by />
        <services />
        <how-to-hire />
        <statistics />
        <public-footer />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import Header from "../components/Header.vue";
import Banner from "../components/home/Banner.vue";
import TrustedBy from "../components/home/TrustedBy.vue";
import Services from "../components/home/Services.vue";
import HowToHire from "../components/home/HowToHire.vue";
import Statistics from "../components/home/Statistics.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",

  components: {
    "public-header": Header,
    Banner,
    TrustedBy,
    Services,
    HowToHire,
    Statistics,
    "public-footer": Footer,
  },
};
</script>
