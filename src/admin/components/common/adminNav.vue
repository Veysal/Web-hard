<template lang="pug">
  nav.nav
    ul.nav__list
      li(
      v-for="page in pages"
      :class=""
      ).nav__item
        router-link(
        :to="page.href"
        ).nav__link {{page.title}}

</template>

<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState({
        pages: state => state.adminPages.pages
      }),
    }
  }
</script>

<style lang="scss" scoped>
  .nav {
    background-color: #f0efe9;
    width: 100%;
    height: 60px;
    font-weight: 500;
  }

  .nav__list {
    display: flex;
    width: 100%;
  }

  .nav__item {
    border-right: 2px solid white;
    width: 180px;
    text-align: center;
    overflow: hidden;
  }

  .nav__link {
    position: relative;
    display: block;
    height: 100%;
    width: 200%;
    line-height: 60px;
    text-decoration: none;
    color: rgba($text-color, .7);
    cursor: pointer;
    padding-right: 180px;
    transition: all .2s;

    &:after {
      content: 'Перейти';
      display: block;
      visibility: visible;
      position: absolute;
      color: rgba($text-color, 1);
      width: 50%;
      top: 0;
      right: 0;
    }

    &:hover {
      transform: translateX(-50%);
    }
  }

  .router-link-exact-active {
    background-color: white;
    color: $main;
    transition: all 0s;

    &:after {
      visibility: hidden;
      transform: translateX(50%);
    }


    &:hover {
      transform: translateX(0);
    }
  }

</style>