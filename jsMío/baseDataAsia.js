class Product {
	constructor(id, name, price, img) {
		this.name = name;
		this.id = id;
		this.price = price;
		this.img = img;
	}
}

function getProducts() {
	let productsAsObjects = JSON.parse(DATABASE);
	let products = productsAsObjects.map(
		(value) => new Product(value.id, value.name, value.price, value.img)
	);

	return products;
}
 
const DATABASE = `[{
    "id": 1,
    "name": "Continente Asiático <br> ",
    "price": 15,
    "img": "../img/Banderas.jpg"
  }, {
    "id": 2,
    "name": "Blue Temple  <br> Thailandia",
    "price": 10,
    "img": "../img/blueTemple.jpg"
  }, {
    "id": 3,
    "name": "Buda <br>  Thailandia",
    "price": 12,
    "img": "../img/buda-Thailandia.jpg"
  }, {
    "id": 4,
    "name": "Elefantes <br> Thailandia ",
    "price": 13,
    "img": "../img/caraElefante.jpg"
  }, {
    "id": 5,
    "name": "Decoraciones Thailandesa <br> ",
    "price": 12,
    "img": "../img/decoracion-Thailandesa.jpg"
  }, {
    "id": 6,
    "name": "Elefantes en su hábitat <br> Thailandia ",
    "price": 10,
    "img": "../img/elefanteEnEstadoPuro.jpg"
  }, {
    "id": 7,
    "name": "Isla Kho Thao <br> Thailandia",
    "price": 10,
    "img": "../img/islaKhoThao-Thailandia.jpg"
  }, {
    "id": 8,
    "name": "Mujeres Jirafa <br> Thailandia",
    "price": 10,
    "img": "../img/mujerJirafaThailandesa.jpg"
  }, {
    "id": 9,
    "name": "Jardines del Templo <br> Thailandia",
    "price": 11,
    "img": "../img/PaisajeBudista.jpg"
  }, {
    "id": 10,
    "name": "Rezo Budista <br> Thailandia",
    "price": 10,
    "img": "../img/rezoBudista-Thailandia.jpg"
  }, {
    "id": 11,
    "name": "Templos <br> Thailandia",
    "price": 8,
    "img": "../img/templo-Thailandia.jpg"
  }, {
    "id": 12,
    "name": "Tribu Thailandesa <br> ",
    "price": 9,
    "img": "../img/tribuThailandesa.jpg"
  }]
  `;
