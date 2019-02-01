<template lang="pug">
  <template lang="pug">
  #works
    .works__container
      work-form
      work-table
</template>

<script>
  import workForm from './works/workForm';
  import workTable from './works/workTable';

  export default {
    components:{
      workForm, workTable
    }
  }
</script>

<style lang="scss" scoped>
  .works__container {
    display: flex;
    flex-wrap: wrap;
  }
</style>