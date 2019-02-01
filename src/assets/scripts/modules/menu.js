(function () {
  const btn = document.getElementById('js_menuBtn');
  const menu = document.getElementById('js_menu');
  const body = document.body;

  const menuPromise = new Promise(function (resolve) {
    if (btn) {
      resolve();
    }
  });

  menuPromise.then(function () {

    btn.addEventListener('click', function () {
      btn.classList.toggle('burger-btn--active');
      menu.classList.toggle('nav--active');

      body.classList.toggle('noscroll')
    });

  });
})();