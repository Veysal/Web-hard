(function () {
  const form = document.querySelector(".js_auth__form");
  const enterBtn = document.getElementById('js_enterBtn');
  const login = form.elements.login;
  const password = form.elements.password;
  const isMan = form.elements.man;
  const radioBtns = form.elements.isRobot;
  const errorWindow = document.querySelector(".js_error-window");


  enterBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (validateForm(form)) {

      //bundling a json file consisting of fields value
      let formData = new FormData(form);
      formData.append("login", login.value);
      formData.append("password", password.value);

      console.log('succsesful')

      //send the bundle
      // sendFile(formData)
      //   .then(function (message) {
      //     body.appendChild(createResponse(message));
      //     document.body.style.overflow = 'hidden';
      //   })
    }

  });

  function validateForm(form) {
    let valid = true;
    errorWindow.classList.remove('error-window--active');

    if (!validateField(form.elements.login)) {
      valid = false;
    }

    if (!validateField(form.elements.password)) {
      valid = false;
    }

    if (!isMan.checked) {
      valid = false;
    }

    if (!radioBtns[0].checked) {
      valid = false;
    }

    if (!valid) {
      errorWindow.classList.add('error-window--active');
      errorWindow.textContent = 'Необходимо заполнить все поля';
    }

    return valid;
  }

  function validateField(field) {
    const formIcon = field.previousSibling.firstChild;

    if (!field.checkValidity()) {
      field.classList.add('auth__input--error');
      field.classList.remove('auth__input--success');

      formIcon.classList.add('auth__row-icon--error');
      formIcon.classList.remove('auth__row-icon--success');
    } else {
      field.classList.remove('auth__input--error');
      field.classList.add('auth__input--success');

      formIcon.classList.remove('auth__row-icon--error');
      formIcon.classList.add('auth__row-icon--success');
    }
    return field.checkValidity();
  }

  // function validate() {
  //
  // }
})();