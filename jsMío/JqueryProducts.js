
 var cart;
 var valor = 0;

 if (localStorage.getItem('cart')) {
     cart = JSON.parse(localStorage.getItem('cart'))
 } else {
     cart = []
 }

 var productos
 
 var containerProduct = $('.productContainer')

 fetch('../Json/Products.json').then(function (res) {
     res.json().then(function (data) {
        productos = data
         productos.forEach(function (producto) {
            containerProduct.append(`
            <div class=" ${producto.productId} col-lg-4 col-md-6 col-xs-12  p-5 d-flex flex-column align-items-center justify-items-center aling-text-center">
            
                <h2 style="text-align: center">${producto.productName}</h2>
                <img src=${producto.productImage}  width="250" height="250"> <br>
                <p>Precio: $ ${producto.productPrice}</p>
                <div style="display: flex; justify-content: space-between; ">
                   <input type="button" id="${producto.productId}" onclick="Sumar('anadirProducts${producto.productId}')"  style="background: olivedrab; " value="+" class="btn-sm"/>
                   <h4 id="anadirProducts">0</h4>
                   <input type="button" id="${producto.productId}" onclick="Restar('anadirProducts${producto.productId}')" style="background: olivedrab; " class="btn-sm" value="-"/>
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
                     localStorage.setItem('cart', JSON.stringify(cart));
                     console.log(cart);
                     alert(productName + "----Ha sido agregado al carrito correctamente." )
                 }
             })
         })
       
     })
     })
 
 //solo me suma en el primer producto 

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

var estado = false; 
var intervalo;

$( document ).ready(function(){
    const parrafo = $("#parrafo");
    alert("Estos productos tiene garantia de 3 meses, en el caso de ruptura.");
    parrafo.css({"font-weigth": "bold", "font-size": "20px", "color": "aqua", "text-aling": "center", "margin-left": "20px"}); 

   botonAgregar.click(function(){
      estado = !estado;

      if(estado){
        intervalo = setInterval(function(){
        const number = Math.floor(Math.random() * 1000000);
        parrafo.css({"color": `#${number}`});
        }, 1000);
      }else{
       clearInterval(intervalo);
       parrafo.css({"color": "lime"});
      }
  })

setTimeout(function(){
    $("body").css({"background": "#AED581"});
}, 5000);

})

$("#practica_jquery").css({background:'#76FF03', color:'brown', "text-aling": "center", "margin-left": "20px","margin-rigth": "20px", "font-size": "30px"});
$("#practica_jquery").html("HOLA GENTE !! Bienvenidos al mundo del reciclaje.<br> YO SOY EL PLANETA DONDE VIVIMOS, ME LLAMO TIERRA.TENGO QUE ESTAR SIEMPRE LIMPIA PARA NO AFECTAR A LAS PERSONAS Y A LOS ANIMALES QUE VIVEN AQUÍ.");



function validarInput(){
    
    $("#name").css("border", "3px solid green"); 
    $("#mail").css("background", "brown"); 
}



 