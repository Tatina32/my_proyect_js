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
    "name": "Vistas de Lisboa - Europa_1",
    "price": 15,
    "img": "../img/vistas-Lisboa.jpg"
  }, {
    "id": 2,
    "name": " Torre Eiffel nocturna - Europa_2",
    "price": 10,
    "img": "../img/torreEiffelNoche-Paris.jpg"
  }, {
    "id": 3,
    "name": "Torre de Belen - Europa_3",
    "price": 12,
    "img": "../img/TorreDeBelen-Lisboa.jpg"
  }, {
    "id": 4,
    "name": "Arco del Triunfo en Paris - Europa_4",
    "price": 13,
    "img": "../img/arcoDelTriunfo-Paris.jpg"
  }, {
    "id": 5,
    "name": "Atardecer en Budapest - Europa_5",
    "price": 12,
    "img": "../img/atardecer-Budapest.jpg"
  }, {
    "id": 6,
    "name": "Antigua bodeda de Vino en Chinchon - Europa_6",
    "price": 10,
    "img": "../img/BodegaVino-Chinchon.jpg"
  }, {
    "id": 7,
    "name": "Sierra de Madrid- Europa_7",
    "price": 10,
    "img": "../img/bosque-Madrid.jpg"
  }, {
    "id": 8,
    "name": "Basilica de Chinchon - Europa_8",
    "price": 10,
    "img": "../img/iglesi-Chinchon.jpg"
  }, {
    "id": 9,
    "name": " Jardines Palacio de Versalles - Europa_9",
    "price": 11,
    "img": "../img/jardinesPalacioVersalles-Francia.jpg"
  }, {
    "id": 10,
    "name": "Lago de Covadonga en Asturias - Europa_10",
    "price": 10,
    "img": "../img/LagoDeCovadonga-Asturias.jpg"
  }, {
    "id": 11,
    "name": "Gran vía de Madrid - Europa_11",
    "price": 8,
    "img": "../img/Madrid-Groumet.jpg"
  }, {
    "id": 12,
    "name": "Parlamento de Budapest - Europa_12",
    "price": 9,
    "img": "../img/Parlamento-Budapest.jpg"
  }]
  `;
