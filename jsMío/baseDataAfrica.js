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
    "name": "Amanecer en el Desierto de Zagora - África_1",
    "price": 15,
    "img": "../img/amanecerCamping.jpg"
  }, {
    "id": 2,
    "name": "Artesania Marroquí - África_2",
    "price": 10,
    "img": "../img/artesaniaMarroqui.jpg"
  }, {
    "id": 3,
    "name": "Domar Dromedario - África_3",
    "price": 12,
    "img": "../img/BocaDromedario.jpg"
  }, {
    "id": 4,
    "name": "Dromedario - África_4",
    "price": 13,
    "img": "../img/dromedario-Marrakech.jpg"
  }, {
    "id": 5,
    "name": " Faraón- África_5",
    "price": 12,
    "img": "../img/Expo-Egipto.jpg"
  }, {
    "id": 6,
    "name": "Mural Egipcio - África_6",
    "price": 10,
    "img": "../img/mural-Egipto.jpg"
  }, {
    "id": 7,
    "name": " Paseo en Dromedario - África_7",
    "price": 10,
    "img": "../img/paseoDromedario.jpg"
  }, {
    "id": 8,
    "name": " Pueblos de Zagora - África_8",
    "price": 10,
    "img": "../img/puebloDeSahora.jpg"
  }, {
    "id": 9,
    "name": " Tutankamon - África_9",
    "price": 11,
    "img": "../img/Tutankamon-Egipto.jpg"
  }, {
    "id": 10,
    "name": " - África_10",
    "price": 10,
    "img": "../img/.jpg"
  }, {
    "id": 11,
    "name": " - África_11",
    "price": 8,
    "img": "../img/.jpg"
  }, {
    "id": 12,
    "name": " - África_12",
    "price": 9,
    "img": "../img/.jpg"
  }]
  `;
