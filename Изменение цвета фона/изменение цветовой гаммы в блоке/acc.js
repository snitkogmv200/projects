let button = document.querySelector(".btn")
let text = document.querySelector(".text")
let block = document.querySelector(".block")

button.addEventListener("click", () => {
	const hash = "#" + (Math.floor(Math.random() * 16200000)).toString(16)
	block.style.backgroundColor = hash
	text.textContent = ` ${hash}`
	text.style.color = hash
})