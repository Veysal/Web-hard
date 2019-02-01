<template lang="pug">
  .skills-block
    table.skills-block__table
      thead.skills-block__head
        tr.skills-block__title {{type.name}}
      skills-row(
        v-for="skill in skills"
        v-if="type.id === skill.category"
        :key="skill.id"
        :skill="skill"
      )
    skills-row(
      :editMode="true"
      :typeId="type.id"
    )

</template>

<script>
  import skillsRow from './skill';
  export default {
    components: {
      skillsRow
    },
    props: {
      type: {
        type: Object,
        default: () => {}
      },
      skills: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .skills-block {
    margin-bottom: 30px;
    &:nth-child(odd) {
    margin-right: 138px;
    }
  }
  .skills-block__table {
    border-collapse: separate;
    border-spacing: 10px;
  }
  .skills-block__title {
    font-weight: 500;
    height: 25px;
  }
</style>