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
    "name": "Amanecer en el Desierto de Zagora <br>Marrakech",
    "price": 15,
    "img": "../img/amanecerCamping.jpg"
  }, {
    "id": 2,
    "name": "Música Marroquí<br>",
    "price": 10,
    "img": "../img/musicaMarroqui.jpg"
  }, {
    "id": 3,
    "name": "Domar Dromedario <br>Marrakech",
    "price": 12,
    "img": "../img/BocaDromedario.jpg"
  }, {
    "id": 4,
    "name": "Dromedario <br>Marrakech ",
    "price": 13,
    "img": "../img/dromedario-Marrakech.jpg"
  }, {
    "id": 5,
    "name": " Faraón <br>Egipto",
    "price": 12,
    "img": "../img/Expo-Egipto.jpg"
  }, {
    "id": 6,
    "name": "Mural Egipcio <br>Egipto",
    "price": 10,
    "img": "../img/mural-Egipto.jpg"
  }, {
    "id": 7,
    "name": " Paseo en Dromedario <br>Marrakech",
    "price": 10,
    "img": "../img/paseoDromedario.jpg"
  }, {
    "id": 8,
    "name": " Pueblo de Zagora <br>Marrakech",
    "price": 10,
    "img": "../img/puebloDeSahora.jpg"
  }, {
    "id": 9,
    "name": " Tutankamon <br>Egipto",
    "price": 11,
    "img": "../img/Tutankamon-Egipto.jpg"
  }, {
    "id": 10,
    "name": " Pueblos escondidos <br>Marrakech",
    "price": 10,
    "img": "../img/pueblosMarroquis.jpg"
  }, {
    "id": 11,
    "name": "Arte <br>Marrakech",
    "price": 8,
    "img": "../img/cuadrosMarroqui.jpg"
  }, {
    "id": 12,
    "name": " Dromedario hambriento <br>Marrakech",
    "price": 9,
    "img": "../img/BocaDromedario.jpg"
  }]
  `;
