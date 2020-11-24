var cart

 if (localStorage.getItem('cart')) {
     cart = JSON.parse(localStorage.getItem('cart'))
 } else {
     cart = []
 }
 
 var productos 

 var containerProduct = $('.productContainer')

 fetch('../Json/Africa.json').then(function (res) {
     res.json().then(function (data) {
        productos = data
         productos.forEach(function (producto) {
            containerProduct.append(`
            <div class=" ${producto.productId} col-lg-4 col-md-6 col-xs-12  p-5 d-flex flex-column align-items-center justify-items-center aling-text-center">
            
                <h2 style="text-align: center">${producto.productName}</h2>
                <img src=${producto.productImage}  width="250" height="250"> <br>
                <p>Precio: $ ${producto.productPrice}</p>
                <div style="display: flex; justify-content: space-between; ">
                   <input type="button" onclick="alert('Haz seleccionado la primera opción !---- 1. Obtener un regalo de materiales reciclados.')" value="1" style="background: olivedrab; " class="btn-sm"/>
                   <input type="button" onclick="alert('Haz seleccionado la segunda opción !---- 2. Sembrar un árbol en una reserva ecológica.')" value="2" style="background: olivedrab; " class="btn-sm"/>
                   <input type="button" onclick="alert('Haz seleccionado la tercera opción !---- 3. Donarias alimentos para las personas que viven en la calle.')" value="3" style="background: olivedrab; " class="btn-sm"/>
                </div><br>
               <button class="btnAdd btn-lg" style="border:2px; background: olivedrab;" id="${producto.productId}"> Agregar </button>
            </div>
            `)
        })
        
         var btnAdd = $('.btnAdd')
        
         btnAdd.click(function (event) {
             productos.forEach(function (producto) {
                 if (producto.productId == $(event.target).attr('id')) {
                     cart.push(producto)
                     localStorage.setItem('cart', JSON.stringify(cart))
                 }
             })
         })
       
     })
     })

     $( document ).ready(function(){
    
        setTimeout(function(){
            $("body").css({"background": "#C5E1A5"});
        }, 1000);
        
        });
 
 



