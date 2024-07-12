let input = document.getElementById('numberInput');
let fact = document.querySelector('#fact');
let display = document.getElementById('factText');

input.addEventListener('input', loadText);

function loadText() {
    const inputNo = input.value;
    if (inputNo != '') {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `http://numbersapi.com/${inputNo}`);
        xhr.onload = function () { // Changed this line
            if (this.status == 200) {
                fact.style.display = 'block';
                display.innerText = this.responseText;
            }
        };
        xhr.send();
    }
}
