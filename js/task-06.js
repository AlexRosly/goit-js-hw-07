// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputPlace = document.querySelector('#validation-input');
const dataLength = Number(inputPlace.dataset.length);

// Вариант 1
const onInputBlur = () => {
    if (dataLength !== inputPlace.value.length) {
        inputPlace.classList.add('invalid');
        inputPlace.classList.remove('valid');
    } else {
        inputPlace.classList.add('valid');
        inputPlace.classList.remove('invalid');
    }
};
inputPlace.addEventListener('blur', onInputBlur);
inputPlace.addEventListener('blur', onInputBlur);


//Вариант 2
// const onInputBlur = () => {
//     dataLength !== inputPlace.value.length ?
//         inputPlace.classList.add('invalid') :
//         inputPlace.classList.replace('invalid', 'valid')
// };
