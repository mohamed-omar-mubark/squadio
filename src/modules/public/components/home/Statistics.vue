<template>
  <section class="statistics" ref="statistics">
    <div class="absolute-bg hidden-sm-and-down"></div>
    <v-container style="max-width: 1320px">
      <v-row>
        <v-col cols="12" md="6">
          <div class="image-content"></div>
        </v-col>

        <v-col cols="12" md="6">
          <div class="text-content text-center text-md-left">
            <span
              class="d-block text-h4 text-md-h3 font-weight-bold text-black mb-6"
              style="line-height: 1.2"
            >
              We’re proud of how far we’ve become and how more we’ll go!
            </span>

            <p class="text-secondary mb-4" style="line-height: 1.9">
              Squadio is a reliable technical partner of more than 50 entities
              of governmental institutions, enterprises and thriving startups.
            </p>

            <div class="mt-12">
              <v-row>
                <v-col cols="12" sm="4">
                  <div
                    class="box d-flex flex-column justify-center align-center align-md-start"
                  >
                    <span
                      class="number text-primary text-h3 font-weight-black mb-2"
                    >
                      {{ talents.toFixed(0) }} +
                    </span>
                    <span class="name text-black text-h6 font-weight-medium">
                      Talents
                    </span>
                  </div>
                </v-col>

                <v-col cols="12" sm="4">
                  <div
                    class="box d-flex flex-column justify-center align-center align-md-start"
                  >
                    <span
                      class="number text-primary text-h3 font-weight-black mb-2"
                    >
                      {{ squads.toFixed(0) }} +
                    </span>
                    <span class="name text-black text-h6 font-weight-medium">
                      Squads
                    </span>
                  </div>
                </v-col>

                <v-col cols="12" sm="4">
                  <div
                    class="box d-flex flex-column justify-center align-center align-md-start"
                  >
                    <span
                      class="number text-primary text-h3 font-weight-black mb-2"
                    >
                      {{ projects.toFixed(0) }} +
                    </span>
                    <span class="name text-black text-h6 font-weight-medium">
                      Launched Projects
                    </span>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Statistics",

  data: () => ({
    talents: 0,
    squads: 0,
    projects: 0,
  }),

  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const { statistics } = this.$refs;
      const { top } = statistics.getBoundingClientRect();

      if (top < window.innerHeight) {
        this.animate();
        document.removeEventListener("scroll", this.handleScroll);
      }
    },

    animate() {
      gsap.to(this.$data, {
        talents: 400,
        squads: 100,
        projects: 200,
        duration: 3,
        ease: "power4.out",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  position: relative;
  padding: 100px 0;

  .absolute-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 620px;
    background: url(@/assets/images/home/statistics/absolute-bg.webp) no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 959px) {
      left: -200px;
    }
  }

  .text-content {
    position: relative;
  }
}
</style>
