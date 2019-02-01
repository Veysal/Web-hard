//declaire a variables
const myForm = document.querySelector('#callback'),
  sendBtn = document.querySelector('#sendBtn'),
  name = myForm.elements.name,
  email = myForm.elements.email,
  comment = myForm.elements.comment,
  body = document.querySelector('body');

// check the name field validity for letters only
name.addEventListener('keydown', function (event) {
  let isLetter = false,
    isControl = false;

  if (isFinite(event.key) === false) {
    isLetter = true;
  }

  if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Backspace" || event.keyCode === '32') {
    isControl = true;
  }

  if (!isLetter && !isControl) {
    event.preventDefault();
  }
});

function sendFile(file) {
  const promise = new Promise(function (resolve) {
    const xhr = new XMLHttpRequest();
    const preloader = document.querySelector('.js_preloader');
    const rounds = document.querySelector('.js_preloader__img');
    const progress = document.querySelector('.js_preloader__progress');


    xhr.responseType = 'json';

    //launch and reset the preloader when upload had started
    xhr.upload.onloadstart = function () {
      preloader.classList.toggle('done');
      preloader.classList.toggle('preloader--callback');
    };

    xhr.upload.onprogress = function (event) {
      uploadProgress(rounds, progress, event);
    };

    xhr.onloadend = function () {
      preloader.classList.toggle('done');
    };


    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(file);
    xhr.addEventListener('load', () => {
      if (xhr.response.status) {
        const message = xhr.response.message;
        resolve(message);
      }
    });
  })

  return promise;
}

sendBtn.addEventListener('click', function (e) {
  e.preventDefault();

  //check fields on validity
  if (validateForm(myForm)) {

    //bundling a json file consisting of fields value
    let formData = new FormData(myForm);
    formData.append("name", name.value);
    formData.append("phone", email.value);
    formData.append("comment", comment.value);
    formData.append("to", 'mail@mail.com');

    //send the bundle
    sendFile(formData)
      .then(function (message) {
        body.appendChild(createResponse(message));
        document.body.style.overflow = 'hidden';
      })
  }
});

//checking the validity of an input fields
function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }

  if (!validateField(form.elements.email)) {
    valid = false;
  }

  if (!validateField(form.elements.comment)) {
    valid = false;
  }

  return valid;
}

//function for checking validity
function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;

  if (!field.checkValidity()) {
    field.classList.add('callback__input--error');
    field.nextElementSibling.classList.add('error-window--active');
  } else {
    field.classList.remove('callback__input--error');
    field.nextElementSibling.classList.remove('error-window--active');
  }
  return field.checkValidity();
}

//function for creating of an overlay window
function createResponse(text) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#responseTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".overlay__btn");
  closeElement.addEventListener("click", function () {
    body.removeChild(overlayElement);
    document.body.style.overflow = 'initial';
  });

  const wrapElement = overlayElement.querySelector(".overlay__container");
  wrapElement.addEventListener("click", function () {
    body.removeChild(overlayElement);
    document.body.style.overflow = 'initial';
  });

  const messageElement = overlayElement.querySelector(".overlay__message");
  messageElement.innerHTML = text;

  return overlayElement;
}

function uploadProgress(rounds, progress, event) {
  const initStrokeDashOffset = 439;
  const curStrokeDashArray = Math.round(initStrokeDashOffset / event.total * event.loaded);

  rounds.style.strokeDashoffset = initStrokeDashOffset - curStrokeDashArray;

  progress.textContent = (100 / event.total * event.loaded);
}


