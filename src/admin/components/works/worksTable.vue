<template lang="pug">
  .table-container
    h3.table__title Последние работы
    .table__wrap
      table.table
        thead.table__header
          tr.table__row
            td.table__data.table__data--title Название
            td.table__data.table__data--techs Технологии
            td.table__data.table__data--link Ссылка
            td.table__data.table__data--photo Превью
            td.table__data.table__data--btns
        work(
          v-for="work in works"
          :key="work.id"
          :work="work"
        )
</template>

<script>
  import work from './work';
  import { mapActions, mapState } from "vuex";
  export default {
    components: {
      work
    },
    computed: {
      ...mapState('works', {
        works: state => state.works
      })
    },
    created() {
      this.fetchWorks()
    },
    methods: {
      ...mapActions({
        fetchWorks: 'works/fetch',
      })
    }
  }
</script>

<style lang="scss" scoped>
  .table-container {
    width: 628px;
  }
  .table__title {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .table__wrap {
    height: 450px;
    background-color: white;
    border-radius: 10px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .table {
    width: 630px;
    border-collapse: collapse;
  }
  .table__header {
    border-bottom: 1px solid $secondary;
  }
  .table__data {
    padding: 20px 0;
    font-weight: 500;
    &:first-child {
      padding-left: 30px;
    }
    &--title{
      width: 180px;
    }
    &--techs{
      width: 117px;
    }
    &--link{
      width: 106px;
    }
    &--photo{
      width: 170px;
    }
    &--btns {
      width: 55px;
    }
  }
</style>