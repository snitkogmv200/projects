const btnsTime = document.querySelectorAll(".block span")
const countDownDate = new Date(2023, 10, 30, 11, 24, 0).getTime()
const block = document.querySelector(".blocks")

function getCountdownTime() {
	// текушее время
	const now = new Date().getTime()
	// разница во времени
	const distance = countDownDate - now

	// 1c = 1000mc
	// 1m = 60s
	//1ch = 60m
	//1d = 24ch

	const oneDay = 24 * 60 * 60 * 1000
	const oneHour = 60 * 60 * 1000
	const oneMinute = 60 * 1000

	// Подсчёт

	let days = Math.floor(distance / oneDay)
	let hours = Math.floor((distance % oneDay) / oneHour)
	let minets = Math.floor((distance % oneHour) / oneMinute)
	let seconds = Math.floor((distance % oneMinute) / 1000)

	const values = [days, hours, minets, seconds]

	// Подстановка значений в блоки

	btnsTime.forEach(function (item, index) {
		item.textContent = values[index]
	})

	if (distance < 0) {
		clearInterval(countdown)
		block.innerHTML = "<h2 class = 'time'>Time out</h2>"
	}
}

// Инициализация текущего времени

let countdown = setInterval(getCountdownTime, 1000)

// Запуск функции для моментального отоюражения 

getCountdownTime()