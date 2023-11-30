const board = document.querySelector("#board")
let SQUARES_NUMBER = 600
let massColor = ["red", "blue", "green", "yellow", "white"]

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add("square")

	square.addEventListener("mouseover", setColor)

	square.addEventListener("mouseleave", removeColor)

	board.append(square)
}

function setColor(event) {
	const element = event.target
	const color = getRandomColor()
	element.style.background = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
	const element = event.target
	element.style.backgroundColor = "#252828";
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
	return massColor[Math.floor(Math.random() * massColor.length)]
}