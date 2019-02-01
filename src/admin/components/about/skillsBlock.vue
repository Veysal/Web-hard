<template lang="pug">
  .skills-block
    table.skills-block__table
      thead.skills-block__head
        tr.skills-block__title Frontend
      skills-row

</template>

<script>
  import skillsRow from './skillsRow';

  export default {
    components: {
      skillsRow
    }
  }
</script>

<style lang="scss" scoped>

  .skills-block__table {
    border-collapse: separate;
    border-spacing: 10px;
  }

  .skills-block__title {
    font-weight: 500;
    height: 25px;
  }
</style>