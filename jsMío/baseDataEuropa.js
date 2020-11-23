var cart

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
} else {
    cart = []
}

var productos = [{
  "productId": 1, "productName": "Vistas de Lisboa <br> ", "productPrice": 15, "productImage": "../img/vistas-Lisboa.jpg"}, 
  {"productId": 2, "productName": " Torre Eiffel nocturna <br> Paris", "productPrice": 10, "productImage": "../img/torreEiffelNoche-Paris.jpg"}, 
  {"productId": 3, "productName": "Torre de Belen <br> Lisboa", "productPrice": 12, "productImage": "../img/TorreDeBelen-Lisboa.jpg"}, 
  {"productId": 4, "productName": "Arco del Triunfo  <br> Paris ", "productPrice": 13, "productImage": "../img/arcoDelTriunfo-Paris.jpg"}, 
  {"productId": 5, "productName": "Atardecer  <br>Budapest ", "productPrice": 12, "productImage": "../img/atardecer-Budapest.jpg"}, 
  {"productId": 6, "productName": "Antigua bodeda de Vino en Chinchon <br>Madrid", "productPrice": 10, "productImage": "../img/BodegaVino-Chinchon.jpg"}, 
  {"productId": 7, "productName": "Auschwitz <br>Cracovia", "productPrice": 10, "productImage": "../img/Auschwitz-PoloniaCracovia.jpg"}, 
  {"productId": 8, "productName": "Wroclaw<br>Polonia", "productPrice": 10, "productImage": "../img/calles-Wroclaw.jpg"}, 
  {"productId": 9, "productName": " Jardines Palacio de Versalles <br>Francia", "productPrice": 11, "productImage": "../img/jardinesPalacioVersalles-Francia.jpg"}, 
  {"productId": 10, "productName": "Lago de Covadonga en Asturias <br>Asturias", "productPrice": 10, "productImage": "../img/LagoDeCovadonga-Asturias.jpg"}, 
  {"productId": 11, "productName": "Gran vía de Madrid <br>Madid", "productPrice": 8, "productImage": "../img/Madrid-Groumet.jpg"}, 
  {"productId": 12, "productName": "Parlamento de Budapest <br>", "productPrice": 9, "productImage": "../img/Parlamento-Budapest.jpg"
}]

var containerProduct = $('.productContainer')

productos.forEach(function (producto) {
    containerProduct.append(`
    <div class=" ${producto.productId} col-lg-4 col-md-6 col-xs-12  p-5 d-flex flex-column align-items-center justify-items-center aling-text-center">
    
        <h2 style="text-align: center">${producto.productName}</h2>
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


