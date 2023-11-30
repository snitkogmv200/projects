// Находим элелменты на странице

const btnMinus = document.querySelector('[data-action="minus"]')
const btnPlus = document.querySelector('[data-action="plus"]')
const counter = document.querySelector('[data-counter]')

btnMinus.addEventListener('click', function () {

})

//  Отслеживание кнопки плюс

btnPlus.addEventListener('click', function () {
	counter.innerText = ++counter.innerText
})

//  Отслеживание кнопки минус

btnMinus.addEventListener('click', function () {
	if (parseInt(counter.innerText) > 0) {
		counter.innerText = --counter.innerText
	}
})

