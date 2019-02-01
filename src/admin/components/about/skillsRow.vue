<template lang="pug">
  tr.skills-row
    td.skills-row__name Html
    td.skills-row__percentage 100
    td.skills-row__percent %
    td.skills-row__button--container
      button(type='button').button
        img(src="../../../assets/images/admin/pencil.png")
    td.skills-row__button--container
      button(type='button').button
        img(src="../../../assets/images/admin/cancel.png")

</template>

<style lang="scss" scoped>

  .skills-row__name {
    padding-right: 20px;
    padding-left: 20px;
  }

  .skills-row__percentage {
    width: 45px;
    background: white;
    text-align: center;
    border-radius: 5px;
    padding: 8px 0;
  }

  .button {
    width: 20px;
    height: 20px;
    cursor: pointer;
    outline: none;
    background-color: transparent;
  }
</style>