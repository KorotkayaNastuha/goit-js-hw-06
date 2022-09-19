const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
input.oninput = function () {
    if (input.value === '') {
        output.innerHTML = 'Anonymous';
    }
    else {
        output.innerHTML = input.value;
    }
}