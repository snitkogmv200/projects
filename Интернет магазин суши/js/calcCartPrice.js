function calcCartPrice() {
	const cartItem = document.querySelectorAll('.cart-item')
	const totalPriceEl = document.querySelector('.total-price')
	const deliveryCost = document.querySelector('.delivery-cost')
	const cartDelivery = document.querySelector('[data-cart-delivery]')

	let totalPrice = 0

	cartItem.forEach(item => {

		const quantityEl = item.querySelector('.items__current')

		const priceEl = item.querySelector('.price__currency')

		const currentPrice = parseInt(quantityEl.innerText) * parseInt(priceEl.innerText)

		totalPrice += currentPrice
	})

	totalPriceEl.innerText = totalPrice

	if (totalPrice > 0) {
		cartDelivery.classList.remove('none')
	} else {
		cartDelivery.classList.add('none')
	}

	if (totalPrice > 800) {
		deliveryCost.classList.add('free')
		deliveryCost.innerText = 'бесплатно'
	} else {
		deliveryCost.classList.remove('free')
		deliveryCost.innerText = '250 ₽'
	}
}