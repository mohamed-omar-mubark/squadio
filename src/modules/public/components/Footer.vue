<template>
  <footer class="footer bg-primary">
    <v-container style="max-width: 1320px">
      <v-row>
        <v-col cols="12" md="3">
          <div class="column">
            <div class="brand mb-4">
              <img
                class="mt-2 mt-md-0"
                src="@/assets/images/global/logo.webp"
                alt="Logo"
                width="120"
                height="44"
              />
            </div>
            <p class="text-white mb-4" style="line-height: 1.9">
              We form dedicated Squads of our top-notch engineers and tech
              experts to build your product up digitally.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="1"></v-col>

        <v-col cols="12" md="3">
          <div class="column">
            <span
              class="column-title d-block mb-8 text-yellow text-h6 font-weight-medium"
            >
              Quick Links
            </span>
            <router-link
              to="#"
              class="text-white d-block mb-2"
              style="text-decoration: none"
            >
              Build your team
            </router-link>

            <router-link
              to="#"
              class="text-white d-block"
              style="text-decoration: none"
            >
              Apply as a talent
            </router-link>
          </div>
        </v-col>

        <v-col cols="12" md="3">
          <div class="column">
            <div
              class="social-media d-flex justify-start align-center mt-4 mt-md-0"
            >
              <a
                class="bg-white text-secondary pa-2 rounded-circle"
                href="#"
                aria-label="facebook"
              >
                <v-icon icon="mdi-facebook"></v-icon>
              </a>

              <a
                class="bg-white pa-2 text-secondary ml-3 rounded-circle"
                href="#"
                aria-label="twitter"
              >
                <v-icon icon="mdi-twitter"></v-icon>
              </a>

              <a
                class="bg-white pa-2 text-secondary ml-3 rounded-circle"
                href="#"
                aria-label="instagram"
              >
                <v-icon icon="mdi-instagram"></v-icon>
              </a>

              <a
                class="bg-white pa-2 text-secondary ml-3 rounded-circle"
                href="#"
                aria-label="linkedin"
              >
                <v-icon icon="mdi-linkedin"></v-icon>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="copyright pa-5 text-center">
      <span class="text-caption">
        © {{ currentYear }}
        <span class="text-yellow font-weight-medium">Squadio</span>, All rights
        reserved.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 100px 0 0;

  .social-media {
    a {
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        background-color: #ffce44 !important;
        color: #392481 !important;
      }
    }
  }

  .copyright {
    background-color: #392481;
    margin-top: 80px;
  }
}
</style>
