<template>
  <section class="banner bg-primary">
    <h1>home banner</h1>
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
}
</style>
