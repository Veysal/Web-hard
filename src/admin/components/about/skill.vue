<template lang="pug">
  tr(v-if="editMode === false").skill
    td.skill__name {{editingMode? '' : skill.title}}
      input(
        v-show='editingMode'
        type='text'
        :placeholder='newSkill.title'
        v-model='newSkill.title'
      ).skill__input.skill__input--name
    td.skill__percentage {{editingMode? '' : skill.percents}}
      input(
        v-show='editingMode'
        type='text'
        pattern="\d [0-9]"
        :placeholder='newSkill.percents'
        v-model='newSkill.percents'
        :class="{error: validation.hasError('newSkill.percents')}"
      ).skill__input.skill__input--percentage
    td.skill__percent %
    td.skill__button--container
      button(
        v-show='!editingMode'
        @click="editExistedSkill(skill)"
        type='button'
      ).button
        img(src="../../../assets/images/admin/pencil.png")
      button(
        v-show='editingMode'
        type='button'
        @click="editingSkill(newSkill)"
      ).button
        img(src="../../../assets/images/admin/checked.png")
    td.skill__button--container
      button(
        type='button'
        @click="removeSkill(skill.id)"
      ).button
        img(src="../../../assets/images/admin/cancel.png")

  .skills-input__container(v-else)
    input( :class="{error: validation.hasError('newSkill.title')}" type='text' placeholder="Название" v-model='newSkill.title').skill__input.skills-input__item
    button(type='button' @click="addNewSkill(newSkill)").skills-input__btn Добавить

</template>

<script>
  import {mapActions} from 'vuex';
  import SimpleVueValidator from 'simple-vue-validator';
  const Validator = SimpleVueValidator.Validator;
  export default {
    mixins: [SimpleVueValidator.mixin],
    validators: {
      'newSkill.title'(value) {
        return Validator.value(value).required('Заполните все поля');
      },
      'newSkill.percents'(value) {
        return Validator.value(value).lessThanOrEqualTo(100).required('Заполните все поля');
      }
    },
    props: {
      skill: {
        type: Object,
        default: () => {
        }
      },
      editMode: {
        type: Boolean,
        default: false
      },
      typeId: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        editingMode: false,
        newSkill: {
          id: 0,
          title: "",
          percents: 0,
          category: this.typeId
        }
      }
    },
    methods: {
      ...mapActions({
        addNewSkillAction: "skills/add",
        removeSkill: "skills/remove",
        editSkill: 'skills/edit'
      }),
      addNewSkill(newSkill) {
        this.$validate().then(success => {
          if (!success) return;
          this.addNewSkillAction(newSkill).then(response => {
            this.newSkill.title = '';
            console.log(response)
          })
        })
      },
      editExistedSkill(existedSkill) {
        this.editingMode = true;
        this.newSkill.id = existedSkill.id;
        this.newSkill.title = existedSkill.title;
        this.newSkill.percents = existedSkill.percents;
        this.newSkill.category = existedSkill.category;
      },
      editingSkill(newSkill) {
        this.$validate().then(success => {
          if (!success) return;
          this.editSkill(newSkill);
          this.editingMode = false;
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .skill {
    height: 33px;
  }
  .skill__name {
    padding-left: 20px;
    max-width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .skill__input-wrap {
    padding-left: 20px;
  }
  .skill__input--name {
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    height: 31px;
  }
  .skill__input--percentage {
    width: 43px;
    height: 31px;
    text-align: center;
  }
  .skill__percentage {
    width: 45px;
    background: white;
    text-align: center;
    border-radius: 5px;
  }
  .button {
    width: 20px;
    height: 20px;
    cursor: pointer;
    outline: none;
    background-color: transparent;
  }
  .skills-input__container {
    display: flex;
    padding-left: 30px;
    padding-top: 10px;
  }
  .skills-input__item {
    width: 190px;
    height: 45px;
    padding-left: 20px;
    margin-right: 10px;
  }
  .skills-input__btn {
    background-color: $main;
    border-radius: 5px;
    outline: none;
    padding: 0 20px;
    color: white;
    transition: all .2s;
    &:hover {
      background-color: $secondary;
    }
  }
  .skill__input {
    border: 2px solid transparent;
    border-radius: 5px;
    outline: none;
    transition: all .1s;
    &:focus {
      border: 2px solid $main;
    }
    &.error {
      border: 2px solid $red;
    }
  }
</style>