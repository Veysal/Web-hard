(function () {

  const arrowDown = document.getElementById('js_arrowDown');
  const arrowUp = document.getElementById('js_arrowUp');
  const container = document.querySelector('.wrapper');
  const header = document.getElementById('js_header');

    container.onclick = function (e) {
      let target = e.target;

      if (target === arrowDown) {
        scrollIt(header.nextElementSibling)
      }

      if (target === arrowUp) {
        scrollIt(header)
      }
    };

  function scrollIt(element) {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': element.offsetTop
    });
  }
})();
