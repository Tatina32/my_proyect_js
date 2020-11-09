
const products = getProducts();

// Array Carrito
const cart = [];
getProductsFromLocalStorage();

const productsContainer = document.getElementById("productsContainer");
productsContainer.innerHTML = "";
let containerContent = "";


products.forEach((product) => {
	let productCard = createProductCardCombination(product);
	productsContainer.appendChild(productCard);
});

/*La carta combinando ambos metodos*/
function createProductCardCombination(product) {
	let productCard = document.createElement("div");
	productCard.id = product.id;
	productCard.classList ="productCard col-4 p-2 d-flex flex-column align-items-center justify-items-center";

	let code = `
			<div>${[product.name]}</div>
			<img src='${product.img}', width="200" height="200"/>
			<div>Precio : $${[product.price]}</div>
			
	`;

	let button = document.createElement("button");
	button.innerHTML = "Agregar al carrito";

	button.addEventListener("click", () => {
		cart.push(product);
		localStorage.setItem("cart", JSON.stringify(cart));
	});

	productCard.innerHTML = code;
	productCard.appendChild(button);
	return productCard;
}

/*La carta solamente con codigo HTML*/
/*function createProductCardWithString(product) {
	let code = `
		<div id='${
			product.id
		}' class='productCard col-4 p-2 d-flex flex-column align-items-center justify-items-center width="200" height="200">
			<div>${[product.name]}</div>
			<img src='${product.img} '/>
			<div>El precio del producto es $${[product.price]}</div>
			<button class='productButton'>Agregar al carrito</button>		
		</div>
	`;
	return code;
}

/*La carta solamente con elementos de Javascript*/
/*function createProductCard(product) {
	let productCard = document.createElement("div");
	productCard.id = product.id;
	productCard.classList =
		"productCard col-4 p-2 d-flex flex-column align-items-center justify-items-center";

	let nameDiv = document.createElement("div");
	nameDiv.innerHTML = product.name;

	let imgDiv = document.createElement("img");
	imgDiv.src = product.img;

	let priceDiv = document.createElement("div");
	priceDiv.innerHTML = " Precio : $" + product.price;

	let button = document.createElement("button");
	button.innerHTML = "Agregar al carrito";

	button.addEventListener("click", () => {
		cart.push(product);
		console.log(cart);
	});

	productCard.appendChild(nameDiv);
	productCard.appendChild(imgDiv);
	productCard.appendChild(priceDiv);
	productCard.appendChild(button);
	return productCard;
}*/





function getProductsFromLocalStorage() {
	const cartFromLocalStorage = localStorage.getItem("cart");
	if (cartFromLocalStorage) {
		const objectsFromLocalStorage = JSON.parse(cartFromLocalStorage);
		objectsFromLocalStorage.forEach((object) => {
			let product = new Product(
				object.id,
				object.name,
				object.price,
				object.img,
			);
			cart.push(product);
		});
	} else {
		console.log("ENTRAMOS AL ELSE");
	}
}
