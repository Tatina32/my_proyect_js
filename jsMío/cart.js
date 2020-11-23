//hago otro js y una view para el carrito
var cart

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
} else {
    cart = []
}


var containerCart = $('.cart')

cart.forEach(function (producto) {
    containerCart.append(`
    <div class="${producto.productId} style="text-align: center"">
        <h2>${producto.productName}</h2>
        <img src=${producto.productImage} width="400" height="400">
        <p>Precio : $ ${producto.productPrice}</p>
        <div style="display: flex; justify-content: center;">
            <button onclick="Sumar()" style="background: olivedrab;  text-aling: center"  class="btn-sm">+</button>
            <h4 id="contador">0</h4>
            <button onclick="Restar()" style="background: olivedrab;  text-aling: center"  class="btn-sm">-</button>
         </div><br>
        <button class="btnRemove btn-lg" style="border:2px; background: olivedrab;" id="${producto.productId}"> Eliminar </button>
    </div><br>
    `)
})

var btnRemove = $('.btnRemove')

btnRemove.click(function (event) {
    cart = cart.filter(function (product) { return product.productId != $(event.target).attr('id')})
    if (cart.length) {
        localStorage.setItem('cart', JSON.stringify(cart))
        $(`.${$(event.target).attr('id')}`).remove()
    } else {
        localStorage.removeItem('cart')
        containerCart.html('')
    }
})


    $(".totalPagar").append(`
    <div>
        <h2>Total de tu Compra</h2>
        <h3>Precio a pagar : $</h3>
        <button style="background: olivedrab;" class="btn-lg">Pagar</button>
    </div><br>
    `)



