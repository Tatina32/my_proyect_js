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
    "name": "Ciudad ecuatoriana <br>Baños",
    "price": 15,
    "img": "../img/BañosEcuador.jpg"
  }, {
    "id": 2,
    "name": "Grietas  <br>Galápagos",
    "price": 10,
    "img": "../img/grietas-Galapagos.jpg"
  }, {
    "id": 3,
    "name": "Isla Bartolomé  <br>Galápagos",
    "price": 12,
    "img": "../img/islaBartolomé-Galápagos.jpg"
  }, {
    "id": 4,
    "name": "Tortugas <br>Galápagos",
    "price": 13,
    "img": "../img/Tortugas-Galápagos.jpg"
  }, {
    "id": 5,
    "name": "Especies endémicas <br>Galápagos",
    "price": 12,
    "img": "../img/tortugaComiendo.jpg"
  }, {
    "id": 6,
    "name": "Guacamayo <br>Puyo",
    "price": 10,
    "img": "../img/loro.jpg"
  }, {
    "id": 7,
    "name": "Salinas <br>Galápagos",
    "price": 10,
    "img": "../img/salinas-Galápagos.jpg"
  }, {
    "id": 8,
    "name": "Río Pastaza <br>Puyo",
    "price": 10,
    "img": "../img/ríoPastaza-Ecuador.jpg"
  }, {
    "id": 9,
    "name": "Pinguinos <br>Galápagos",
    "price": 11,
    "img": "../img/pinguinos-Galápagos.jpg"
  }, {
    "id": 10,
    "name": "Mono <br>Puyo",
    "price": 10,
    "img": "../img/Mono.jpg"
  }, {
    "id": 11,
    "name": "Lobo Marino  <br>Galápagos",
    "price": 8,
    "img": "../img/loboMarino-SantaCruz.jpg"
  }, {
    "id": 12,
    "name": "Iguana Marina<br>Galápagos",
    "price": 9,
    "img": "../img/iguanaMarina.jpg"
  }]
  `;
