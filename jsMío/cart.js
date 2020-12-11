//hago otro js y una view para el carrito
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
      <td width="150px">Cantidad</td>
      <td width="150px">Precio Ud</td>
      <td width="150px">SubTotal</td>
      <td width="150px"></td>
    </tr>
    
    <tr>
      <td height="150"><img src=${producto.productImage} width="100" height="100"><br></td>
      <td>${producto.productName}</td>
      <td>
                <form class="form-inline" style="text-align: center; display: flex; justify-content: center;"  >
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                       <option selected>0</option>
                       <option value="1">1</option>
                       <option value="1">2</option>
                       <option value="2">3</option>
                       <option value="3">4</option>
                     </select>
                 </form>
      </td>
      <td>$${producto.productPrice}</td>
      <td>$0000</td>
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
});

$(".totalPagar").append(`
<div  style="text-align: center; border: 0px;">
        <h2>Total de tu Compra</h2><br>
        <table class="tabla">
          <tr height="60px">
           <td width="250px">Total productos Sin IVA :  </td>
           <td width="150px"> $</td>               
          </tr>
          <tr height="60px">
            <td width="250px">Total envío :  </td>
            <td width="150px"> $ 5 </td>
          </tr>
          <tr height="60px">
            <td width="250px">IVA 12% : </td>
            <td width="150px"> $ 00</td>
          </tr>
          <tr height="60px">
            <td width="250px">Total a Pagar : </td>
            <td width="150px">$</td>
          </tr>                                       
        </table> 
         <br>
        <button style="background: olivedrab;" class="btn-lg">Pagar</button><br><br>
        <h3>Gracias por confiar en nosotros</h3>
    </div><br>
    `)


  precioFinal.forEach(function(){
    var totalPagar = 0;
    totalPagar += producto.productPrice;

  })
    
    precioFinal = function(){
  let totalPagar= 0;
  for (let cart of this.containerCart ) {
    totalPagar += productPrice;
  }
  return  totalPagar;
};






/**<div class="${producto.productId}" style="text-align: center"">
        <h3>${producto.productName}</h3>
        <img src=${producto.productImage} width="280" height="280"><br>
        <p>Precio : $ ${producto.productPrice}</p>
        <div style="display: flex; justify-content: center; ">
                  <form class="form-inline" style="color: black; border: brown;"  >
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                       <option selected>0</option>
                       <option value="1">1</option>
                       <option value="1">2</option>
                       <option value="2">3</option>
                       <option value="3">4</option>
                     </select>
                 </form> 
        </div>
        <p>Total : $ </p>
        <br>
        <button class="btnRemove btn-lg" style="border:2px; background: olivedrab;" id="${producto.productId}"> Eliminar </button>
    </div><br> */

