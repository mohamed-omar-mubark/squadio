<template>
  <section class="how-to-hire bg-primary" id="how-it-work">
    <v-container style="max-width: 1320px">
      <div
        class="section-title d-flex flex-column flex-md-row justify-center align-center"
      >
        <span class="mr-2 text-h4 font-weight-medium">
          How to <span class="text-yellow">Hire</span> Through
        </span>
        <img
          class="mt-2 mt-md-0"
          src="@/assets/images/global/logo.webp"
          alt="Logo"
          width="120"
          height="44"
        />
      </div>

      <v-row>
        <v-col cols="12" md="4" sm="6">
          <div class="column pt-5 px-3">
            <span
              class="number d-block mb-5 text-h1 text-yellow font-weight-black"
            >
              1
            </span>
            <span class="column-title d-block mb-10 text-h5 font-weight-medium">
              Brief your business
            </span>
            <p class="mb-4" style="color: #aba2c9; line-height: 1.9">
              After you fill out the Build your team form, a member of our
              Matching team will reach-out to you at your selected time-slot; to
              fully understand your technical needs, culture, and strategic
              route.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="4" sm="6">
          <div class="column pt-5 px-3">
            <span
              class="number d-block mb-5 text-h1 text-yellow font-weight-black"
            >
              2
            </span>
            <span class="column-title d-block mb-10 text-h5 font-weight-medium">
              Find your matched talents
            </span>
            <p class="mb-4" style="color: #aba2c9; line-height: 1.9">
              Start browsing through our system generated matched talents. You
              are ensured not only of velocity but of top quality.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="column pt-5 px-3">
            <span
              class="number d-block mb-5 text-h1 text-yellow font-weight-black"
            >
              3
            </span>
            <span class="column-title d-block mb-10 text-h5 font-weight-medium">
              Kickstart your squad
            </span>
            <p class="mb-4" style="color: #aba2c9; line-height: 1.9">
              We offer a no-risk trial period and then will be with you every
              step of the onboarding process to ensure a seamless process and
              team integration.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-btn
        class="py-4 px-8 mt-10 mx-auto d-block bg-yellow font-weight-bold text-capitalize"
        min-height="52"
        elevation="0"
      >
        Build your team
      </v-btn>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "HowToHire",
};
</script>

<style lang="scss" scoped>
.how-to-hire {
  padding: 100px 0;

  .section-title {
    margin-bottom: 100px;
  }

  .column {
    background: url("@/assets/images/home/how-to-hire/column-number-bg.webp")
      no-repeat;
    background-size: 59px 72px;

    .column-title {
      position: relative;

      &::before {
        position: absolute;
        content: "";
        bottom: -15px;
        left: 0;
        width: 90px;
        height: 4px;
        background: #ffc629;
        border-radius: 2000px;
      }
    }
  }
}
</style>
