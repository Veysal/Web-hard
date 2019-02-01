<template lang="pug">
  #root

    admin-header

    admin-nav

    main.content
      .content__bg
      transition(name="fade" mode="out-in")
        router-view
</template>

<script>
  import adminHeader from './components/common/adminHeader';
  import adminNav from './components/common/adminNav';

  export default {
    components: {
      adminHeader, adminNav
    }
  };
</script>

<style lang="scss">
  html {
    font-size: 16px;
    user-select: none;
  }

  body, html {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Roboto', Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: $text-color;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
    display: flex;
    flex-flow: column;
  }

  .wrapper {
    overflow: hidden;
    height: 100%;
  }

  .content {
    position: relative;
    height: 100%;
    padding: 55px 30px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(white, .85);
      z-index: -5;
    }
  }

  .content__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("../assets/images/bg/bg-admin.jpg") center 0 / cover no-repeat;
    z-index: -10;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
