<template lang="pug">
  tr(:class="work.id === editItem? 'edit' : '' ").work
    td.work__title {{work.title}}
    td.work__techs {{work.techs}}
    td.work__link
      a(href='work.title' ).work__link-text {{work.link}}
    td.work__photo
      .work__photo-wrap
        img(:src="`https://webdev-api.loftschool.com/${work.photo}`").work__photo-pic
    td.work__buttons
      .work__buttons-wrap
        button(
          type='button'
          @click="getWork(work); tooglingMode(); setEditItem(work.id); toogleIsEdit()"
          :class="work.id === editItem? 'edit' : '' "
        ).button
          img(src="../../../assets/images/admin/pencil.png")
        button(type='button' @click="removeWork(work.id)").button
          img(src="../../../assets/images/admin/cancel.png")

</template>

<script>
  import {mapActions, mapState} from "vuex";
  export default {
    props: {
      work: {
        type: Object,
        default: () => {
        }
      }
    },
    data() {
      return {
        isEdit: false
      }
    },
    computed: {
      ...mapState('works', {
        editMode: state => state.editMode,
        editItem: state => state.editItem
      })
    },
    methods: {
      ...mapActions({
        getWork: "works/getExistedWork",
        tooglingMode: "works/tooglingMode",
        setEditItem: "works/setEditItem",
        removeWork: "works/remove"
      }),
      toogleIsEdit() {
        this.isEdit = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .work {
    height: 95px;
    font-size: 14px;
    &:nth-child(even) {
      background-color: #f9f9f9;
    }
    &.edit {
      background-color: rgba($main, .15);
    }
  }
  .work__title {
    padding-left: 30px;
  }
  .work__techs {
    text-transform: uppercase;
  }
  .work__link {
    max-width: 106px;
    padding-right: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    &-text {
      color: inherit;
      &:hover {
        text-decoration: none;
      }
    }
  }
  .work__photo-wrap {
    width: 125px;
    height: 72px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .work__photo-pic {
    max-width: 65.6%;
  }
  .work__buttons-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .button {
    background-color: transparent;
    outline: none;
    &:first-child {
      margin-bottom: 10px;
    }
    &.edit {
      display: none;
    }
  }
</style>