// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

//<input type="text" placeholder="Ваше имя?" id="name-input" />
//<h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputPlace = document.querySelector('#name-input');
const outputPlace = document.querySelector('#name-output');
const initialValue = outputPlace.textContent;

function onInputChange(event) {
  outputPlace.textContent = event.currentTarget.value || 'незнакомец';
};

inputPlace.addEventListener('input', onInputChange);


// function onInputBlur() {
//     outputPlace.textContent = initialValue;
// };

// inputPlace.addEventListener('blur', onInputBlur);

