<template>
  <section class="pre-loader d-flex justify-center align-center" v-if="show">
    <div class="wrap">
      <div class="loading">
        <div class="bounceball"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Preloader",

  data: () => ({
    show: true,
  }),

  mounted() {
    this.toggleLoading();
  },

  methods: {
    // toggleLoading
    toggleLoading() {
      setTimeout(() => {
        this.show = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss">
.pre-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-animation: bg 4s;

  body {
    position: relative;
    width: 100%;
    height: 100vh;
    font-family: Montserrat;
  }

  .wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .text {
    color: #ffce44;
    display: inline-block;
    margin-left: 5px;
  }

  .bounceball {
    position: relative;
    display: inline-block;
    height: 37px;
    width: 15px;
    &:before {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #ffce44;
      transform-origin: 50%;
      animation: bounce 500ms alternate infinite ease;
    }
  }

  @keyframes bounce {
    0% {
      top: 30px;
      height: 5px;
      border-radius: 60px 60px 20px 20px;
      transform: scaleX(2);
    }
    35% {
      height: 15px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0;
    }
  }
}
</style>
