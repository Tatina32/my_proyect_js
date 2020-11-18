
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

function createProductCardCombination(product) {
	let productCard = document.createElement("div");
	productCard.id = product.id;
	productCard.classList ="productCard  col-lg-4 col-md-6 col-xs-12 p-5 d-flex flex-column align-items-center justify-items-center aling-text-center";

	let code = `
			<div class="aling-text-center"><h4>${[product.name]}</h4></div><br>
			<img src='${product.img}', width="250" height="250"/><br>
			<div>Precio : $${[product.price]}</div>
			
	`;

	let button = document.createElement("button");
	button.addEventListener('mouseover', cambiarColorBoton);
	button.addEventListener('mouseout', cambiarAlSalir);
	button.addEventListener('mouseout', cambiaBorde )
	button.innerHTML = "Añadir al carrito";
	function cambiarColorBoton(evento){
		evento.target.style.background = "violet";
	}
	
	function cambiarAlSalir(evento){
		evento.target.style.background = "salmon";
	}
	function cambiaBorde(evento){
		evento.target.style.bordercolor = "green";
	}
	
	button.addEventListener("click", () => {
		
		cart.push(product);
		localStorage.setItem("cart", JSON.stringify(cart));
	});


	productCard.innerHTML = code;
	productCard.appendChild(button);
	return productCard;
}

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
			document.write(objectsFromLocalStorage)
		});
	} else {
		console.log("ENTRAMOS AL ELSE");
	}
}
