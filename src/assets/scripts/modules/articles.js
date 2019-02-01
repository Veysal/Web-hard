import Vue from 'vue';

const asideMenu = {
  props: {
    articlesData: Array
  },
  template: '#aside-menu'
};

const articles = {
  props: {
    articlesData: Array
  },
  template: '#articles__section'
};

new Vue({
  el: "#articles-component",
  components: {
    asideMenu, articles
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.articles = require('../../../data/articles.json');
  },
  template: "#articles"
});

