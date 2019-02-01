<template lang="pug">
  header.header
    h1.title Панель администрирования
    a.toSite(href="") Вернуться на сайт
</template>

<style lang="scss" scoped>

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: $main;
    padding: 30px;
    color: white;
  }

  .title {
    font-size: 28px;
    font-weight: 500;
  }

  .toSite {
    position: relative;
    margin-left: auto;
    color: rgba(white, .7);
    transition: all .2s;
    text-decoration: none;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #fff;
      top: 100%;
      opacity: .7;
      transition: all .2s;

    }

    &:hover {
      color: white;

      &:before {
        opacity: 0;
      }
    }
  }
</style>