var cart

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
} else {
    cart = []
}


var productos = [{
  "productId": 1, "productName": "Continente Asiático <br> ", "productPrice": 15, "productImage": "../img/Banderas.JPG"}, 
  {"productId": 2, "productName": "Blue Temple  <br> Thailandia", "productPrice": 10, "productImage": "../img/blueTemple.JPG"}, 
  {"productId": 3, "productName": "Buda <br>  Thailandia", "productPrice": 12, "productImage": "../img/buda-Thailandia.JPG"}, 
  {"productId": 4, "productName": "Elefantes <br> Thailandia ", "productPrice": 13, "productImage": "../img/caraElefante.JPG"}, 
  {"productId": 5, "productName": "Decoraciones Thailandesa <br> ", "productPrice": 12, "productImage": "../img/decoracion-Thailandesa.JPG"}, 
  {"productId": 6, "productName": "Elefantes en su hábitat <br> Thailandia ", "productPrice": 10, "productImage": "../img/elefanteEnEstadoPuro.JPG"}, 
  {"productId": 7, "productName": "Isla Kho Thao <br> Thailandia", "productPrice": 10, "productImage": "../img/islaKhoThao-Thailandia.jpg"}, 
  {"productId": 8, "productName": "Mujeres Jirafa <br> Thailandia", "productPrice": 10, "productImage": "../img/mujerJirafaThailandesa.JPG"}, 
  {"productId": 9, "productName": "Jardines del Templo <br> Thailandia", "productPrice": 11, "productImage": "../img/PaisajeBudista.JPG"}, 
  {"productId": 10, "productName": "Rezo Budista <br> Thailandia", "productPrice": 10,  "productImage": "../img/rezoBudista-Thailandia.JPG"}, 
  {"productId": 11, "productName": "Templos <br> Thailandia", "productPrice": 8, "productImage": "../img/templo-Thailandia.JPG"}, 
  {"productId": 12, "productName": "Tribu Thailandesa <br> ", "productPrice": 9, "productImage": "../img/tribuThailandesa.JPG"
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



