import Vue from 'vue';

const info = {
  template: "#slider-info",
  props: {
    work: Object
  },
  methods: {
    enterCb(el, done) {
      const sentense = el.innerText.trim();

      const sentenseWrappedInSpans = sentense.split('').map(letter => {
        return `<span class="${letter === " " ? "whitespace" : ""}">${letter}</span>`;
      }).join('');

      el.innerHTML = sentenseWrappedInSpans;

      const letters = Array.from(el.children);

      let i = 0;
      function animate(letters) {
        const currentLetter = letters[i];
        let timer = setTimeout(() => {
          animate(letters);
        }, 20);

        currentLetter.classList.add('bounceIn');
        i++;

        if (i >= letters.length) {
          clearTimeout(timer);
        }

      }

      animate(letters);

      done();
    }
  }
};

const display = {
  template: "#slider-display",
  props: {
    work: Object
  }
};

const btns = {
  template: "#slider-btns",
  props: {
    works: Array,
    index: Number
  },
  data() {
    return {
      prevBtnWorks: [],
      nextBtnWorks: []
    }
  },
  created() {
    this.prevBtnWorks = this.transformWorksArrForBtn('prev');
    this.nextBtnWorks = this.transformWorksArrForBtn('next');
  },
  methods: {
    slide(direction) {
      this.$emit('slide', direction);
    },
    transformWorksArrForBtn(btnDirection) {
      const worksArray = [...this.works];
      const lastItem = worksArray[worksArray.length - 1];

      switch (btnDirection) {
        case 'next' :
          worksArray.push(worksArray[0]);
          worksArray.shift();
          break;

        case 'prev' :
          worksArray.unshift(lastItem);
          worksArray.pop();
          break;
      }

      return worksArray;
    }
  }
};

new Vue({
  el: "#slider-component",
  components: {
    info: info, display, btns
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteSliding(value);
    }
  },
  created() {
    this.works = require('../../../data/works.json');
  },
  methods: {
    makeInfiniteSliding(value) {
      const worksAmountMinusOne = this.works.length - 1;

      if (value > worksAmountMinusOne) {
        this.currentIndex = 0;
      }

      if (value < 0) {
        this.currentIndex = worksAmountMinusOne;
      }
    },
    handleSlide(direction) {
      switch (direction) {
        case "next" :
          this.currentIndex += 1;
          break
        case "prev" :
          this.currentIndex -= 1;
          break
      }
    }
  },
  template: "#slider-root"
});
