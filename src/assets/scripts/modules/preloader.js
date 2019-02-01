// declarate variables
const preloader = document.querySelector('.js_preloader');
const rounds = document.querySelector('.js_preloader__img');
const progress = document.querySelector('.js_preloader__progress');
const images = Array.from(document.querySelectorAll("img"));
const imagesCount = images.length;
const initStrokeDashOffset = 439;
let loadedImg = 0;


// if container is exist get promise
const preloaderPromise = new Promise(function (resolve) {
  if (preloader) {
    resolve();
  }
});

preloaderPromise.then(function () {

  // images.forEach(imageLoaded);
  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img = new Image();
    img.src = images[i].src;
    img.onload = imageLoaded;
  }


  function imageLoaded() {
    loadedImg++;
    
    const curStrokeDashArray = Math.round(initStrokeDashOffset / imagesCount * loadedImg);
    rounds.style.strokeDashoffset = initStrokeDashOffset - curStrokeDashArray;

    const percent = Math.round(100 / imagesCount * loadedImg);
    progress.innerHTML = percent;
    
    if (loadedImg >= imagesCount) {
      setTimeout(function () {
        if (!preloader.classList.contains('done')) {
          preloader.classList.add('done');
        }
      }, 1000);
      setTimeout(function () {
        rounds.style.strokeDashoffset = initStrokeDashOffset;
        progress.innerHTML = 0;
      }, 2000);
    }
  }
});
