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
    "name": "Foto - America_1",
    "price": 15,
    "img": "../img/BañosEcuador.jpg"
  }, {
    "id": 2,
    "name": "Foto - America_2",
    "price": 10,
    "img": "../img/grietas-Galapagos.jpg"
  }, {
    "id": 3,
    "name": "Foto - America_3",
    "price": 12,
    "img": "../img/islaBartolomé-Galápagos.jpg"
  }, {
    "id": 4,
    "name": "Foto - America_4",
    "price": 13,
    "img": "../img/Tortugas-Galápagos.jpg"
  }, {
    "id": 5,
    "name": "Foto - America_5",
    "price": 12,
    "img": "../img/tortugaComiendo.jpg"
  }, {
    "id": 6,
    "name": "Foto - America_6",
    "price": 10,
    "img": "../img/tortugasblackwhite.jpg"
  }, {
    "id": 7,
    "name": "Foto - America_7",
    "price": 10,
    "img": "../img/salinas-Galápagos.jpg"
  }, {
    "id": 8,
    "name": "Foto - America_8",
    "price": 10,
    "img": "../img/ríoPastaza-Ecuador.jpg"
  }, {
    "id": 9,
    "name": "Foto - America_9",
    "price": 11,
    "img": "../img/pinguinos-Galápagos.jpg"
  }, {
    "id": 10,
    "name": "Foto - America_10",
    "price": 10,
    "img": "../img/Mono.jpg"
  }, {
    "id": 11,
    "name": "Foto - America_11",
    "price": 8,
    "img": "../img/loboMarino-SantaCruz.jpg"
  }, {
    "id": 12,
    "name": "Foto - America_12",
    "price": 9,
    "img": "../img/iguanaMarina.jpg"
  }]
  `;
