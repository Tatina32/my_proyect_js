
 
 var cart

 if (localStorage.getItem('cart')) {
     cart = JSON.parse(localStorage.getItem('cart'))
 } else {
     cart = []
 }
 
 
 var productos = [
     { "productId": 1,  "productName": "Serpiente de envoltorios", "productImage": "../img/serpienteRciclada.jpg",  "productPrice": 15}, 
     { "productId": 2,  "productName": "Agenda de papel reciclado", "productImage": "../img/agendaPapel.jpg",  "productPrice": 10}, 
     { "productId": 3,  "productName": "Platos de fibra de bambu ", "productImage": "../img/setPlato.jpg",  "productPrice": 8 },
      { "productId": 4,  "productName": "Muñeca con piezas", "productImage": "../img/muñecaReciclada.jpg",  "productPrice": 11 }, 
      { "productId": 5,  "productName": "Mariposa con piezas", "productImage": "../img/mariposaReciclado.jpg",  "productPrice": 10 }, 
      { "productId": 6,  "productName": "Macetero hecho de envases", "productImage": "../img/maceteroReciclado.jpg",  "productPrice": 12},
      { "productId": 7,  "productName": "Cuadro de piezas", "productImage": "../img/cuadroReciclado.jpg",  "productPrice": 9 }, 
      { "productId": 8,  "productName": "Collar de vidio", "productImage": "../img/collarReciclado.jpg",  "productPrice": 14 }, 
      { "productId": 9,  "productName": "Lapicero de disquet", "productImage": "../img/lapiceroReciclado.jpg",  "productPrice": 10}, 
     
 ]
 
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
 
 var valor = 0;

 function Sumar(){
     var sumar = document.getElementById("contador");
     valor++
     sumar.innerHTML = valor;
 }
 function Restar(){
     if(document.getElementById("contador").innerText  !== '0'){
         var restar = document.getElementById("contador");
         valor--
         restar.innerHTML = valor;
     }  
 }

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



 