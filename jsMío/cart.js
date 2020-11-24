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
        <h3>${producto.productName}</h3>
        <img src=${producto.productImage} width="280" height="280"><br>
        <p>Precio : $ ${producto.productPrice}</p>
        <div style="display: flex; justify-content: center;">
        <input type="button" id="${producto.productId}" onclick="Sumar('anadirProducts${producto.productId}')"  style="background: olivedrab; " value="+" class="btn-sm"/>
        <h4 id="anadirProducts">0</h4>
        <input type="button" id="${producto.productId}" onclick="Restar('anadirProducts${producto.productId}')" style="background: olivedrab; " class="btn-sm" value="-"/>
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

function Sumar(){
    var sumar = document.getElementById("anadirProducts");
    valor++
    sumar.innerHTML = valor;
}
function Restar(){
    if(document.getElementById("anadirProducts").innerText  !== '0'){
        var restar = document.getElementById("anadirProducts");
        valor--
        restar.innerHTML = valor;
    }  
}

//sumar el precio de cada producto

    $(".totalPagar").append(`
    <div>
        <h2>Total de tu Compra</h2>
        <h3>Precio a pagar : $</h3>
        <button style="background: olivedrab;" class="btn-lg">Pagar</button><br>
        <h3>Gracias por confiar en nosotros</h3>
    </div><br>
    `)

   button.addEventListener('click', () => {
       cart.push(producto);
       cartT += producto.productPrice;
       $(".totalPagar").html("$"+cartT);
       localStorage.setItem('cart', JSON.stringify(cart));

   }) 



