
const inputEl = document.getElementById("validation-input")
    inputEl.onblur = function() {
    if (inputEl.getAttribute('data-length') < inputEl.value.length) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
        }
    };
