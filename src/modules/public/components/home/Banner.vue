<template>
  <section class="banner bg-primary">
    <v-container style="max-width: 1320px">
      <v-row class="align-center" style="height: 100vh">
        <v-col cols="12" md="6" class="order-1 order-md-0">
          <div class="text-content text-center text-md-left">
            <h1 class="text-h4 text-md-h2 font-weight-bold text-white mb-4">
              <span class="text-yellow">Build</span> Your team
            </h1>
            <p class="text-h5 text-white font-weight-medium">
              With Remote Top-Notch Talents
            </p>
            <v-btn
              class="py-4 px-8 my-4 bg-yellow font-weight-bold text-capitalize"
              min-height="52"
              elevation="0"
            >
              Build your team
            </v-btn>
            <span class="d-block">
              Looking for jobs instead?
              <a href="#" class="text-yellow">Apply as a talent</a>
            </span>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="order-0 order-md-1">
          <div class="image-content text-center">
            <img
              src="@/assets/images/home/banner/banner-main-image.webp"
              alt="Banner Image"
              width="100%"
              height="auto"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: auto;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    right: -100px;
    width: 65%;
    background-image: url(@/assets/images/home/banner/banner-before.webp);
    background-position: bottom;
    background-size: cover;
  }

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: -120px;
    width: 400px;
    height: 330px;
    background-image: url(@/assets/images/home/banner/banner-after.webp);
    background-position: top;
    background-size: cover;
  }

  .text-content {
    position: relative;
    z-index: 1;
  }

  .image-content {
    position: relative;

    img {
      width: 100%;
      max-width: 526px;
      height: auto;
    }
  }
}
</style>
