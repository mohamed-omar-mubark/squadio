<template>
  <section class="services" id="services">
    <v-container style="max-width: 1320px">
      <v-row>
        <v-col cols="12" md="5">
          <span class="d-block text-h4 text-black font-weight-bold mb-2">
            Explore <span class="text-green">Services</span>
          </span>

          <p class="text-secondary mb-4" style="line-height: 1.9">
            Squadio is an exclusive network of top-notch software developers,
            designers, data experts, product managers, and project managers in
            the world.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" sm="6">
          <div class="service-box pa-10 rounded-lg bg-white">
            <div
              class="icon mb-7 d-flex justify-center align-center rounded-circle"
            >
              <img
                src="@/assets/images/home/services/user.webp"
                alt="User"
                width="42"
                height="45"
              />
            </div>
            <span class="d-block text-black text-h5 font-weight-medium mb-2">
              CTO as a service
            </span>
            <p class="text-secondary mb-4" style="line-height: 1.9">
              Hire a Chief Technology Officers in a short-term or long-term
              basis to lead your development teams and develop your technology
              strategy.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="4" sm="6">
          <div class="service-box pa-10 rounded-lg bg-white">
            <div
              class="icon mb-7 d-flex justify-center align-center rounded-circle"
            >
              <img
                src="@/assets/images/home/services/group.webp"
                alt="User"
                width="43"
                height="50"
              />
            </div>
            <span class="d-block text-black text-h5 font-weight-medium mb-2">
              Squad as a service
            </span>
            <p class="text-secondary mb-4" style="line-height: 1.9">
              Get matched with vetted engineers from around the world and hire
              them without the overhead.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="service-box pa-10 rounded-lg bg-white">
            <div
              class="icon mb-7 d-flex justify-center align-center rounded-circle"
            >
              <img
                src="@/assets/images/home/services/idea.webp"
                alt="User"
                width="50"
                height="63"
              />
            </div>
            <span class="d-block text-black text-h5 font-weight-medium mb-2">
              Creative Lab
            </span>
            <p class="text-secondary mb-4" style="line-height: 1.9">
              We provide you a product manager and a product designer to start
              working on your product's idea with the most suitable methodology
              and provide you with a prototype.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style lang="scss" scoped>
.services {
  padding: 100px 0;

  .service-box {
    box-shadow: 0 24px 48px 0 rgb(0 0 0 / 6%);
    min-height: 100%;

    .icon {
      width: 120px;
      height: 120px;
      background-color: #fbfaf9;
    }
  }
}
</style>
