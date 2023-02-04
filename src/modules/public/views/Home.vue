<template>
  <v-card>
    <v-layout>
      <!-- <v-app-bar elevation="0" color="transparent">
        <v-toolbar-title class="text-h5">Home</v-toolbar-title>
      </v-app-bar> -->

      <v-main style="min-height: 150vh">
        <banner />
        <trusted-by />
        <services />
        <how-to-hire />
        <public-footer />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import Banner from "../components/home/Banner.vue";
import TrustedBy from "../components/home/TrustedBy.vue";
import Services from "../components/home/Services.vue";
import HowToHire from "../components/home/HowToHire.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",

  components: {
    Banner,
    TrustedBy,
    Services,
    HowToHire,
    "public-footer": Footer,
  },
};
</script>
