const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
    console.log(email.value, password.value);
    if (email.value === '' || password.value === '') {
        return alert('All fields must be hidden');
    }
    event.currentTarget.reset()
});
