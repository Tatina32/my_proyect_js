//mover immagen
$().ready(() => {
  $().keydown(e => {
     const blob = $("#blob");
     console.log(e.which);
     switch(e.which){
       case 37:
         blob.animate({left:"60%"}, 1000);
         break;
       case 38:
           blob.animate({bottom: "10%"}, 1000);
         break;
       case 39:
         blob.animate({left: "50%"}, 1000);
         break;
       case 40:
         blob.animate({bottom:"80%"}, 1000);
         break;
     }
  })
})

//Formulario

function ValidarNombreApellido(evento){
    var inputNombreApellido = evento.target.value;
    if(inputNombreApellido.length < 10){
        console.log("El nombre de usuario debe tener al menos 10 caracteres");
    } else console.log("Perfecto");
    }
    
function ValidarMail(evento){
        var inputMail = evento.target.value;
        if(inputMail.length < 10){
            console.log("El Mail debe tener al menos 10 caracteres");
        } else console.log("Perfecto");
        }

function ValidarComentario(evento){
        var inputComentario = evento.target.value;
        if(inputComentario.length < 30){
            console.log("El comentario debe tener al menos 30 caracteres");
        } else console.log("Perfecto");
        }

function capturarEnterFormulario(event) {
            if (event.which == 13 || event.keyCode == 13) { 
         alert("El comentario debe tener al menos 20 caracteres");        
             }
         }

function validarEnviar(){
  console.log($("#NombreApellido").val());
    console.log($("#Mail").val());

}


//cambiar el color de botones 
$(".parrafo1").css({color:'green'});
$(".parrafo2").css({color:'red'});
$(".parrafo3").css({color:'yellow'});
$(".parrafo4").css({color:'#659cef'});


function validarInput(){
    
  $("#NombreApellido").css("border", "4px solid green"); 
  $("#Mail").css("background", "lime"); 
  $("#Comentario").css("boder", "4px solid violet")
}
     
    window.onload = function() {
            document.getElementById("cambiaBorde").onmouseover = resalta;
            document.getElementById("cambiaBorde").onmouseout = resalta;
            
            document.getElementById('cambiaBoton').onmouseover = resaltaColor;
            document.getElementById('cambiaBoton').onmouseout = resaltaColor;
            
          }
          
          function resalta(elEvento) {
            var evento = elEvento;
            switch(evento.type) {
              case 'mouseover':
                this.style.borderColor = 'brown';
                break;
              case 'mouseout':
                this.style.borderColor = 'red';
                break;
            }
          }
        
        function resaltaColor(elEvento) {
            var evento = elEvento;
            switch(evento.type) {
              case 'mouseover':
                this.style.background = 'silver';
                break;
              case 'mouseout':
                this.style.color = 'olive';
                break;
            }
          }
          

 //Encuestas

 function Encuestas(){
  var encuesta =Number(prompt("¿Dinos el número de paises que has visitado en todo el Mundo?")) ;

  switch (encuesta){
    case 3:
     
        alert("Quizas deberias plantearte salir de tu zona de confort y VIAJAR, nunca es tarde para empezar.");
     
      
      break;

    case 8:
     
        alert ("Estas empezando un gran camino por recorer y muchas cosas por descubrir, ánimo y sigue VIAJANDO");
     
      
      break;
    
    case 15:
      
        alert("Quizas deberias preocuparte ya que VIAJAR es adictivo, una ves que empiezas no puedes parar :)");
      
       
       break;

    case 20:
      
        alert("Es un número considerable y sé  que notaras la experiencia que llevas encima, la riqueza de tu conocimientos es inmejorable ");
     
        
        break;

    case 27:
     
        alert("Estas en un nivel que la pioridad de tu vida es buscar nuevos lugares y sin duda seguir sumando en paises visitados.\nEl dinero se recupera, pero el tiempo No.....VIAJA");
     
        
        break;
    
    default:
      alert("No acertaste con nuestras cifras de ejemplo, lo siento intentalo nuevamente!");
       break;
  };

 }; 

 /*
 //Encuenta para clientes 

var continente1 = {continente: "America"};//los acentos no pilla
var continente2 = {continente: "Africa"};
var continente3 = {continente:"Asia"};
var continente4 = {continente:"Europa"};

var arrayContinente = [continente1, continente2, continente3, continente4];

var promptContinente = prompt("Qué continente que has visitado te ha gustado más?");

for(var c = 0; c < arrayContinente.length; c++){
    
 //farma1
    if(arrayContinente[c].continente.toLocaleLowerCase().indexOf(promptContinente.toLocaleLowerCase())){
          alert('Gracias por contestar a nuestra encuenta,' + 'me alegro que hayas disfrutado de ' + promptContinente);
    }

   //forma2 
    if(arrayContinente[c].continente.toLocaleLowerCase().includes(promptContinente.toLocaleLowerCase())){
          alert('Gracias por contestar a nuestra encuenta,' + 'me alegro que hayas disfrutado de ' + promptContinente);
  }
}*/



  function ValidarUsuario(evento){
    var inputUsuario = evento.target.value;
    if(inputUsuario.length < 8){
        console.log("El nombre de usuario debe tener al menos 8 caracteres");
    } else console.log("Perfecto!");
    }
    
function ValidarContrasena(evento){
        var inputContrasena = evento.target.value;
        if(inputContrasena.length < 8){
            console.log("La contrasena debe tener al menos 8 caracteres");
        } else console.log("Perfecto!");
        }



 