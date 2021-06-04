// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const valueEl = document.querySelector('#value');
const decrementButton = document.querySelector('button[data-action = "decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const textContent = valueEl.textContent;

let counterValue = Number(textContent);

const increment = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);

