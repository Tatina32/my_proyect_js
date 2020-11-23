var cart

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
} else {
    cart = []
}


var productos = [{
  "productId": 1, "productName": "Ciudad ecuatoriana <br>Baños", "productPrice": 15, "productImage": "../img/BañosEcuador.jpg"}, 
  {"productId": 2, "productName": "Grietas  <br>Galápagos", "productPrice": 10, "productImage": "../img/grietas-Galapagos.jpg"}, 
  {"productId": 3, "productName": "Isla Bartolomé  <br>Galápagos", "productPrice": 12, "productImage": "../img/islaBartolomé-Galápagos.jpg"}, 
  {"productId": 4, "productName": "Tortugas <br>Galápagos", "productPrice": 13, "productImage": "../img/Tortugas-Galápagos.jpg"}, 
  {"productId": 5, "productName": "Especies endémicas <br>Galápagos", "productPrice": 12, "productImage": "../img/tortugaComiendo.jpg"}, 
  {"productId": 6, "productName": "Guacamayo <br>Puyo", "productPrice": 10, "productImage": "../img/loro.jpg"}, 
  {"productId": 7, "productName": "Salinas <br>Galápagos", "productPrice": 10, "productImage": "../img/salinas-Galápagos.jpg"}, 
  {"productId": 8, "productName": "Río Pastaza <br>Puyo", "productPrice": 10, "productImage": "../img/ríoPastaza-Ecuador.jpg"}, 
  {"productId": 9, "productName": "Pinguinos <br>Galápagos", "productPrice": 11, "productImage": "../img/pinguinos-Galápagos.jpg"}, 
  {"productId": 10, "productName": "Mono <br>Puyo", "productPrice": 10, "productImage": "../img/Mono.jpg"}, 
  {"productId": 11, "productName": "Lobo Marino  <br>Galápagos", "productPrice": 8, "productImage": "../img/loboMarino-SantaCruz.jpg"}, 
  {"productId": 12, "productName": "Iguana Marina<br>Galápagos", "productPrice": 9, "productImage": "../img/iguanaMarina.jpg"
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


