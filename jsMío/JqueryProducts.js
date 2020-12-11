
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
                  <form class="form-inline">
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                       <option selected>0</option>
                       <option value="1">1</option>
                       <option value="1">2</option>
                       <option value="2">3</option>
                       <option value="3">4</option>
                     </select>
                 </form> 
                </div><br>
               <button class="btnAdd botonAgregar btn-lg" onclick="alert('Ha sido agregado al carrito correctamente.  Gracias por confiar en nosotros.')" style="border:2px; background: olivedrab;" id="${producto.productId}"> Agregar </button>
            </div>
            `)
        })
        
         var btnAdd = $('.btnAdd');
        
         btnAdd.click(function (event) {
             productos.forEach(function (producto) {
                
                 if (producto.productId == $(event.target).attr('id')) {
                     cart.push(producto)
                     localStorage.setItem('cart', JSON.stringify(cart));
                     console.log(cart);
                     //alert(productName + "----Ha sido agregado al carrito correctamente.");   
                 }
             });
            
         });  
     });
     });
 
 
var estado = false; 
var intervalo;
var botonAgregar= $(".botonAgregar")

$( document ).ready(function(){
    const parrafo = $("#parrafo");
    alert("Estos productos tiene garantía de 3 meses, en el caso de RUPTURA.");
    parrafo.css({"font-weigth": "bold", "font-size": "20px", "color": "brown", "text-aling": "center", "margin-left": "20px"}); 

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
    $("body").css({"background": "#C5E1A5"});
}, 5000);

})

$("#practica_jquery").css({background:'#76FF03', color:'brown', "text-aling": "center", "margin-left": "20px","margin-rigth": "20px", "font-size": "30px"});
$("#practica_jquery").html("HOLA GENTE !! Bienvenidos al mundo del reciclaje.<br> YO SOY EL PLANETA DONDE VIVIMOS, ME LLAMO TIERRA.TENGO QUE ESTAR SIEMPRE LIMPIA PARA NO AFECTAR A LAS PERSONAS Y A LOS ANIMALES QUE VIVEN AQUÍ.");

function validarInput(){
    
    $("#name").css("border", "3px solid green"); 
    $("#mail").css("background", "lime"); 
}

/*   function contadorProduct () {
        alert(prompt[`
        <div>
        
        <input type="button" id="${producto.productId}" onclick="Sumar('anadirProducts${producto.productId}')"  style="background: olivedrab; " value="+" class="btn-sm"/>
                   <h4 id="anadirProducts">0</h4>
                   <input type="button" id="${producto.productId}" onclick="Restar('anadirProducts${producto.productId}')" style="background: olivedrab; " class="btn-sm" value="-"/>
        </div>
   `]);     
     }

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
 }*/



 