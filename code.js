const button = document.getElementById("button");
const input = document.getElementById("temperature");
const select = document.getElementById("unit");
const outCome = document.getElementById('outcome'); // Change to getElementById for consistency

function convertor(event) {
    event.preventDefault(); // Prevent form submission and page reload

    const theValue = select.value;

    if (input.value) {
        if (theValue === 'F') {
            const theTemp = input.value * 9 / 5 + 32;
            return alert(`${theTemp} Fahrenheit`);
        } else if (theValue === 'C') {
            const theTemp = (input.value - 32) * 5 / 9;
            return alert(`${theTemp} Celsius`);
        }
    }
}

button.addEventListener('click', convertor);
