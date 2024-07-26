const inputbox = document.getElementById('inputbox');
const buttons = Array.from(document.querySelectorAll('.btn, .btn-op'));

let previousValue = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (value === 'AC') {
            inputbox.value = '';
            previousValue = '';
        } else if (value === 'DEL') {
            inputbox.value = inputbox.value.slice(0, -1);
        } else if (value === '=') {
            inputbox.value = eval(inputbox.value);
            previousValue = inputbox.value;
        } else if (value === '%') {
            const current = parseFloat(inputbox.value);
            const percentage = (current / 100).toString();
            inputbox.value = percentage;
            previousValue = percentage;
        } else {
            inputbox.value += value;
            previousValue = inputbox.value;
        }
    });
});
