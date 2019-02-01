(function () {

  let parallax = (function () {
    let bg = document.querySelector('.js_hero__bg');
    let bgText = document.querySelector('.js_hero__title');
    let user = document.querySelector('.js_hero__content');

    return {
      move(block, windowScroll, strafeAmount) {
        let strafe = windowScroll / -strafeAmount + '%';
        let style = block.style;
        let transformString = `translate3d(0, ${strafe}, 0)`;

        style.transform = transformString;
        style.webkitTransform = transformString;
      },

      init(wScroll) {
        this.move(bg, wScroll, 100);
        this.move(bgText, wScroll, 40);
        this.move(user, wScroll, 5);
      }
    }
  })();

  window.onscroll = function () {
    let wScroll = window.pageYOffset;

    parallax.init(wScroll);
  };
})();
