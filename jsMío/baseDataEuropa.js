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
    "name": "Vistas de Lisboa <br> ",
    "price": 15,
    "img": "../img/vistas-Lisboa.jpg"
  }, {
    "id": 2,
    "name": " Torre Eiffel nocturna <br> Paris",
    "price": 10,
    "img": "../img/torreEiffelNoche-Paris.jpg"
  }, {
    "id": 3,
    "name": "Torre de Belen <br> Lisboa",
    "price": 12,
    "img": "../img/TorreDeBelen-Lisboa.jpg"
  }, {
    "id": 4,
    "name": "Arco del Triunfo  <br> Paris ",
    "price": 13,
    "img": "../img/arcoDelTriunfo-Paris.jpg"
  }, {
    "id": 5,
    "name": "Atardecer  <br>Budapest ",
    "price": 12,
    "img": "../img/atardecer-Budapest.jpg"
  }, {
    "id": 6,
    "name": "Antigua bodeda de Vino en Chinchon <br>Madrid",
    "price": 10,
    "img": "../img/BodegaVino-Chinchon.jpg"
  }, {
    "id": 7,
    "name": "Auschwitz <br>Cracovia",
    "price": 10,
    "img": "../img/Auschwitz-PoloniaCracovia.jpg"
  }, {
    "id": 8,
    "name": "Wroclaw<br>Polonia",
    "price": 10,
    "img": "../img/calles-Wroclaw.jpg"
  }, {
    "id": 9,
    "name": " Jardines Palacio de Versalles <br>Francia",
    "price": 11,
    "img": "../img/jardinesPalacioVersalles-Francia.jpg"
  }, {
    "id": 10,
    "name": "Lago de Covadonga en Asturias <br>Asturias",
    "price": 10,
    "img": "../img/LagoDeCovadonga-Asturias.jpg"
  }, {
    "id": 11,
    "name": "Gran vía de Madrid <br>Madid",
    "price": 8,
    "img": "../img/Madrid-Groumet.jpg"
  }, {
    "id": 12,
    "name": "Parlamento de Budapest <br>",
    "price": 9,
    "img": "../img/Parlamento-Budapest.jpg"
  }]
  `;
