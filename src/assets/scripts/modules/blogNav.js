(function () {

  const nav = document.querySelector('.js_aside-menu');
  const navList = nav.querySelector('.js_aside-menu__list');
  const navBtn = nav.getElementsByClassName('js_scroll-article');
  const articles = document.querySelectorAll(".js_articles__item");
  const activeBtnClass = 'aside-menu__item--active';
  const speed = 1;
  let clickAnimation = false;
  let positionArticles = [];
  let navBtnArray = Array.from(navBtn);
  const articlesArray = Array.from(articles);
  const wrapper = document.querySelector('.wrapper');

  navList.children[0].classList.add(activeBtnClass);
  wrapper.style.overflow = 'initial';

  window.addEventListener("load", init);
console.log(window.innerWidth)
  if (window.innerWidth <= 768) {

    nav.addEventListener('click', function () {
      nav.classList.toggle('aside-menu--active');
    })
  }


  function anchorActive() {
    for (let i = 0; i < navBtn.length; i++) {
      navBtn[i].addEventListener('click', function (e) {
        clickAnimation = true;
        if (!(navBtn[i].classList.contains(activeBtnClass))) {
          for (let j = 0; j < navBtn.length; j++) {
            navBtn[j].classList.remove(activeBtnClass);
            this.classList.add(activeBtnClass);
          }
        }

        let windowY = window.pageYOffset;
        const indexBtn = e.target.dataset.indexButton;
        const currentArticle = document.querySelector(`[data-article = "${indexBtn}"]`);
        const coord = currentArticle.getBoundingClientRect().top;
        let start = null;

        requestAnimationFrame(step);

        function step(time) {
          if (start === null) start = time;
          let progress = time - start;

          let coordY;
          if (coord < 0) {
            coordY = Math.max(windowY - progress / speed, windowY + coord)
          } else {
            coordY = Math.min(windowY + progress / speed, windowY + coord);
          }

          window.scrollTo(0, coordY);

          if (coordY != windowY + coord) {
            requestAnimationFrame(step);
          } else {
            clickAnimation = false;
          }
        }
      })
    }
  }

  function init() {
    positionArticles = setPositionArticles(articlesArray);

    anchorActive();
    scrollActiveClass();

    window.addEventListener("scroll", scrollActiveClass);
  }

  function scrollActiveClass() {
    positionArticles.forEach((el, i) => {
      let currentEl = navBtnArray[i];
      if (clickAnimation) return;

      if (isVisible(el)) {
        for (const iter of navBtnArray) {
          iter.classList.remove(activeBtnClass);
        }

        currentEl.classList.add(activeBtnClass);
      }
    });
  }

  function isVisible(element) {
    let scroll = window.pageYOffset;

    return scroll >= element.top - 5 && scroll < element.bottom;
  }

  function setPositionArticles(elements) {
    let position = [];
    Array.from(elements).forEach((item, i) => {
      position[i] = {};
      position[i].item = item;
      position[i].top = item.getBoundingClientRect().top + window.pageYOffset;
      position[i].bottom =
        item.getBoundingClientRect().bottom + window.pageYOffset;
    });

    return position;
  }

})();