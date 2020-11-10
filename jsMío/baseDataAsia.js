class Product {
	constructor(id, name, price, img) {
		this.name = name;
		this.id = id;
		this.price = price;
		this.img = img;
	}
}

function getProducts() {
	let productsAsObjects = JSON.parse(DATA_FROM_DATABASE);
	let products = productsAsObjects.map(
		(value) => new Product(value.id, value.name, value.price, value.img)
	);

	return products;
}
 
const DATA_FROM_DATABASE = `[{
    "id": 1,
    "name": " Continente Asiático - Asia_1",
    "price": 15,
    "img": "../img/Banderas.jpg"
  }, {
    "id": 2,
    "name": " Blue Temple en Thailandia -  Asia_2",
    "price": 10,
    "img": "../img/blueTemple.jpg"
  }, {
    "id": 3,
    "name": "Buda -  Asia_3",
    "price": 12,
    "img": "../img/buda-Thailandia.jpg"
  }, {
    "id": 4,
    "name": "Elefantes en Thailandia -  Asia_4",
    "price": 13,
    "img": "../img/caraElefante.jpg"
  }, {
    "id": 5,
    "name": "Decoraciones Thailandesa -  Asia_5",
    "price": 12,
    "img": "../img/decoracion-Thailandesa.jpg"
  }, {
    "id": 6,
    "name": "Elefantes en su hábitat -  Asia_6",
    "price": 10,
    "img": "../img/elefanteEnEstadoPuro.jpg"
  }, {
    "id": 7,
    "name": "Isla Kho Thao -  Asia_7",
    "price": 10,
    "img": "../img/islaKhoThao-Thailandia.jpg"
  }, {
    "id": 8,
    "name": "Mujeres Jirafa en Thailandia -  Asia_8",
    "price": 10,
    "img": "../img/mujerJirafaThailandesa.jpg"
  }, {
    "id": 9,
    "name": " Jardines del Templo -  Asia_9",
    "price": 11,
    "img": "../img/PaisajeBudista.jpg"
  }, {
    "id": 10,
    "name": "Rezo Budista -  Asia_10",
    "price": 10,
    "img": "../img/rezoBudista-Thailandia.jpg"
  }, {
    "id": 11,
    "name": "Templos -  Asia_11",
    "price": 8,
    "img": "../img/templo-Thailandia.jpg"
  }, {
    "id": 12,
    "name": "Tribu Thailamdesa -  Asia_12",
    "price": 9,
    "img": "../img/tribuThailandesa.jpg"
  }]
  `;
