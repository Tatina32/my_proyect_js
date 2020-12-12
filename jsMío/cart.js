
var cart

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
} else {
    cart = []
}

var containerCart = $('.cart')

cart.forEach(function (producto) {

    containerCart.append(`
    
    <div class="${producto.productId}  col-md-12 col-sm-12" style="text-align: center; display: flex; justify-content: center;">
    <table border="1" class="tabla">
    <tr>
      <td width="200px">Producto</td>
      <td width="200px">Nombre</td>
      <td width="150px">Precio</td>
      <td width="150px"></td>
    </tr>
    
    <tr>
      <td height="150"><img src=${producto.productImage} width="100" height="100"><br></td>
      <td>${producto.productName}</td>
      <td>$${producto.productPrice}</td>
      <td><button class="btnRemove btn-sm" style="border:2px; background: olivedrab;" id="${producto.productId}"> Eliminar </button></td>
    </tr>
    </table>   
    </div><br>
    `)
});

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

    removeTotalPagar();
    calcularTotalPrice();
    printTotalAPagar();
});

var totalPrice = 0;
var totalPricePagar = 0;
var totalEnvío = 5;
var iva = 12;
var totalIva = 0;

function calcularTotalPrice(){
  totalPrice = 0;

  cart.forEach(function (producto) {
    totalPrice += producto.productPrice;
    totalIva = totalPrice * (iva/100);
  });

  totalPricePagar = totalPrice + totalEnvío + totalIva;
};
 
calcularTotalPrice();

function printTotalAPagar() {

  if (cart.length == 0) return;

  $(".totalPagar").append(`
<div  id="totalPagarView" style="text-align: center; border: 0px; font-size: 23px;">
        <h2>Total de tu Compra</h2><br>
        <table class="tabla">
          <tr height="60px">
           <td width="250px">Total Sin IVA :  </td>
           <td width="150px"> $${totalPrice}</td>               
          </tr>
          <tr height="60px">
            <td width="250px">Total envío :  </td>
            <td width="150px"> $ ${totalEnvío} </td>
          </tr>
          <tr height="60px">
            <td width="250px">IVA ${iva}% : </td>
            <td width="150px"> $ ${totalIva.toFixed(2)}</td>
          </tr>
          <tr height="60px">
            <td width="250px">Total a Pagar : </td>
            <td width="150px">$${totalPricePagar}</td>
          </tr>                                       
        </table> 
         <br>
        <button style="background: olivedrab;" class="btn-lg">Pagar</button><br><br>
        <h3>Gracias por confiar en nosotros</h3>
    </div><br>
    `);
};

function removeTotalPagar() {
  $("#totalPagarView").remove();
};

printTotalAPagar();

    





