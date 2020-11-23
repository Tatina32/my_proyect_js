var cart

 if (localStorage.getItem('cart')) {
     cart = JSON.parse(localStorage.getItem('cart'))
 } else {
     cart = []
 }
 
 
 var productos = [{
  "productId": 1,
  "productName": "Amanecer en el Desierto de Zagora <br>Marrakech",
  "productPrice": 15,
  "productImage": "../img/amanecerCamping.jpg"
}, {
  "productId": 2,
  "productName": "Música Marroquí<br>",
  "productPrice": 10,
  "productImage": "../img/musicaMarroqui.jpg"
}, {
  "productId": 3,
  "productName": "Domar Dromedario <br>Marrakech",
  "productPrice": 12,
  "productImage": "../img/BocaDromedario.jpg"
}, {
  "productId": 4,
  "productName": "Dromedario <br>Marrakech ",
  "productPrice": 13,
  "productImage": "../img/dromedario-Marrakech.jpg"
}, {
  "productId": 5,
  "productName": " Faraón <br>Egipto",
  "productPrice": 12,
  "productImage": "../img/Expo-Egipto.jpg"
}, {
  "productId": 6,
  "productName": "Mural Egipcio <br>Egipto",
  "productPrice": 10,
  "productImage": "../img/mural-Egipto.jpg"
}, {
  "productId": 7,
  "productName": " Paseo en Dromedario <br>Marrakech",
  "productPrice": 10,
  "productImage": "../img/paseoDromedario.jpg"
}, {
  "productId": 8,
  "productName": " Pueblo de Zagora <br>Marrakech",
  "productPrice": 10,
  "productImage": "../img/puebloDeSahora.jpg"
}, {
  "productId": 9,
  "productName": " Tutankamon <br>Egipto",
  "productPrice": 11,
  "productImage": "../img/Tutankamon-Egipto.jpg"
}, {
  "productId": 10,
  "productName": " Pueblos escondidos <br>Marrakech",
  "productPrice": 10,
  "productImage": "../img/pueblosMarroquis.jpg"
}, {
  "productId": 11,
  "productName": "Arte <br>Marrakech",
  "productPrice": 8,
  "productImage": "../img/cuadrosMarroqui.jpg"
}, {
  "productId": 12,
  "productName": " Dromedario hambriento <br>Marrakech",
  "productPrice": 9,
  "productImage": "../img/BocaDromedario.jpg"
}]
 
 var containerProduct = $('.productContainer')
 
 productos.forEach(function (producto) {
     containerProduct.append(`
     <div class=" ${producto.productId} col-lg-4 col-md-6 col-xs-12  p-5 d-flex flex-column align-items-center justify-items-center aling-text-center">
     
         <h3 style="text-align: center">${producto.productName}</h3>
         <img src=${producto.productImage}  width="250" height="250"> <br>
         <p>Precio: $ ${producto.productPrice}</p>
         <div style="display: flex; justify-content: space-between; ">
            <button onclick="Sumar()" style="background: olivedrab; " class="btn-sm">+</button>
            <h4 id="contador">0</h4>
            <button onclick="Restar()" style="background: olivedrab; " class="btn-sm">-</button>
         </div><br>
         <button class="btnAdd btn-lg" style="border:2px; background: olivedrab;" id="${producto.productId}"> Agregar </button>
        
     </div>
     `)
 })
 
 var btnAdd = $('.btnAdd')
 
 btnAdd.click(function (e) {
     productos.forEach(function (producto) {
         if (producto.productId == $(e.target).attr('id')) {
             cart.push(producto)
             localStorage.setItem('cart', JSON.stringify(cart))
             console.log(cart)
             $(e.target).addClass('btnAgregado')
         }
     })
 })



