const productsContainer = document.querySelector('#products-container')

async function getProducts() {
	const respons = await fetch('./js/products.json')
	const productsArray = await respons.json();
	renderProducts(productsArray)
}

getProducts()

function renderProducts(productsArray) {
	productsArray.forEach(element => {
		const productHTML = `
			
		<!-- Ролл -->
		<div class="col-md-6">
			<div class="card mb-4" data-id="${element.id}">
				<img class="product-img" src="${element.imgSrc}" alt="">
				<div class="card-body text-center">
					<h4 class="item-title">${element.text}</h4>
					<p><small data-items-in-box class="text-muted">${element.itemsInBox}</small></p>

					<div class="details-wrapper">
						<!-- счетчик -->
						<div class="items counter-wrapper">
							<div class="items__control" data-action="minus">-</div>
							<div class="items__current" data-counter>1</div>
							<div class="items__control" data-action="plus">+</div>
						</div>
						<!-- // счетчик -->
						<div class="price">
							<div class="price__weight">${element.weight}</div>
							<div class="price__currency">${element.price}</div>
						</div>
					</div>

					<button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

				</div>
			</div>
		</div>
		<!-- // Ролл -->
		`
		productsContainer.insertAdjacentHTML('beforeend', productHTML)
	});
}

