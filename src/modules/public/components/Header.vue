<template>
  <nav class="header">
    <v-container style="max-width: 1320px">
      <div class="d-flex justify-space-between align-center">
        <div class="navigation d-flex justify-start align-center">
          <img
            class="mr-16"
            src="@/assets/images/global/logo.webp"
            alt="Logo"
            width="120"
            height="44"
          />

          <ul class="nav-links pa-0 ma-0 d-flex justify-start align-center">
            <li class="d-inline-block mr-2">
              <v-btn
                class="text-subtitle-2 font-weight-light active"
                min-height="44"
                elevation="0"
                variant="text"
                @click="scrollToSection('banner')"
              >
                Home
              </v-btn>
            </li>

            <li class="d-inline-block mr-2">
              <v-btn
                class="text-subtitle-2 font-weight-light"
                min-height="44"
                elevation="0"
                variant="text"
                @click="scrollToSection('trusted-by')"
              >
                Parteners
              </v-btn>
            </li>

            <li class="d-inline-block mr-2">
              <v-btn
                class="text-subtitle-2 font-weight-light"
                min-height="44"
                elevation="0"
                variant="text"
                @click="scrollToSection('services')"
              >
                Services
              </v-btn>
            </li>

            <li class="d-inline-block mr-2">
              <v-btn
                class="text-subtitle-2 font-weight-light"
                min-height="44"
                elevation="0"
                variant="text"
                @click="scrollToSection('how-it-work')"
              >
                How it works
              </v-btn>
            </li>

            <li class="d-inline-block">
              <v-btn
                class="text-subtitle-2 font-weight-light"
                min-height="44"
                elevation="0"
                variant="text"
                @click="scrollToSection('statistics')"
              >
                Success stories
              </v-btn>
            </li>
          </ul>
        </div>

        <div class="actions">
          <v-btn
            class="mr-2 bg-yellow font-weight-bold text-capitalize"
            min-height="44"
            elevation="0"
          >
            Build your team
          </v-btn>

          <v-btn
            class="text-white font-weight-medium text-capitalize hidden-sm-and-down"
            min-height="44"
            elevation="0"
            variant="text"
          >
            Login
          </v-btn>
        </div>
      </div>
    </v-container>
  </nav>
</template>

<script>
export default {
  name: "Header",

  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    scrollToSection(id) {
      // scroll to section by id
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    },

    handleScroll() {
      // add class bg-white to header when scroll
      const header = document.querySelector(".header");

      if (window.scrollY > 0) {
        header.classList.add("bg-primary");
      } else {
        header.classList.remove("bg-primary");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: transparent;
  z-index: 100;
  transition: 0.3s;

  .nav-links {
    list-style: none;
    @media (max-width: 960px) {
      display: none !important;
    }

    li {
      button {
        position: relative;
        color: #d8cdff;

        &.active {
          position: relative;
          color: #ffce44;

          &::before {
            position: absolute;
            content: "";
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 5px;
            height: 5px;
            background-color: #ffce44;
            border-radius: 50%;
          }
        }

        &:hover {
          color: #ffce44;
        }
      }
    }
  }
}
</style>
