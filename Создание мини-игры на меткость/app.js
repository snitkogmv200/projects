const btnStart = document.querySelector("#start")
const timeList = document.querySelector("#time-list")
const timeEl = document.querySelector("#time")
const board = document.querySelector("#board")
const colors = ["green", "blue", "black", "white", "gray"]
let time = 0
let score = 0

btnStart.addEventListener("click", function (event) {
	event.preventDefault()
	this.parentElement.classList.add("up")
})

timeList.addEventListener("click", event => {
	if (event.target.classList.contains("time-btn")) {
		time = parseInt((event.target.getAttribute("data-time")))
		timeList.parentElement.classList.add("up")
		startGame()
	}
})

board.addEventListener("click", event => {
	if (event.target.classList.contains('circle')) {
		score++
		event.target.remove()
		createRandomCircle()
	} else { finishGame() }
})

function startGame() {
	setInterval(decreaseTime, 1000)
	createRandomCircle()
	SetTime(time)
}

function decreaseTime() {
	if (time === 0) {
		finishGame()
	} else {
		let current = --time

		if (current < 10) {
			current = "0" + current
		}

		SetTime(current)
	}

}

function SetTime(value) {
	timeEl.innerHTML = `00:${value}`
}

function finishGame() {
	board.innerHTML = `
	<h1>Вы набрали ${score} очков</h1>
	<div class = "active">Начать заново</div>
	`
	timeEl.parentElement.remove()
}

function createRandomCircle() {
	const circle = document.createElement('div')
	const size = getRandomNumber(10, 80)
	const { width, height } = board.getBoundingClientRect()
	const x = getRandomNumber(0, width - size)
	const y = getRandomNumber(0, height - size)
	const colorBgc = Math.floor(Math.random() * colors.length)

	circle.style.background = colors[colorBgc]
	circle.style.top = `${x}px`
	circle.style.left = `${y}px`
	circle.classList.add('circle')
	circle.style.width = `${size}px`
	circle.style.height = `${size}px`
	board.append(circle)
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

