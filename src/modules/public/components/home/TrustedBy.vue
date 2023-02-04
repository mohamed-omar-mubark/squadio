<template>
  <section class="trusted-by py-7">
    <v-container style="max-width: 1320px">
      <v-row class="align-center">
        <v-col cols="12" md="3">
          <span class="text-h5 font-weight-medium">Proudly Served</span>
        </v-col>

        <v-col cols="12" md="9">
          <v-row>
            <v-col v-for="company in 5" :key="company">
              <div
                class="company bg-white rounded-lg d-flex justify-center align-center"
              >
                <img
                  src="@/assets/images/home/trusted-by/company-5.webp"
                  alt="Company 1"
                  width="100%"
                  height="100%"
                />
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "TrustedBy",
};
</script>

<style lang="scss" scoped>
.trusted-by {
  background: #f3f3f3;

  .company {
    width: 100%;
    height: 90px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 6%);

    img {
      width: 70px;
      height: auto;
      max-height: 60px;
      object-fit: contain;
    }
  }
}
</style>
