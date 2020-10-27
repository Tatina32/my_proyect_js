

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
  }


var continente1 = {continente: "America"};//los acentos no pilla
var continente2 = {continente: "Africa"};
var continente3 = {continente:"Asia"};
var continente4 = {continente:"Europa"};

var arrayContinente = [continente1, continente2, continente3, continente4];

var promptContinente = prompt("Qué continente que has visitado te ha gustado más?");

for(var c = 0; c < arrayContinente.length; c++){
    
/*/farma1
    if(arrayContinente[c].continente.toLocaleLowerCase().indexOf(promptContinente.toLocaleLowerCase())){
          alert('Gracias por contestar a nuestra encuenta,' + 'me alegro que hayas disfrutado de ' + promptContinente);
    }*/

   //forma2 
    if(arrayContinente[c].continente.toLocaleLowerCase().includes(promptContinente.toLocaleLowerCase())){
          alert('Gracias por contestar a nuestra encuenta,' + 'me alegro que hayas disfrutado de ' + promptContinente);
  }
}





function CarritoCompra(compra){
    this.compra = []
    this.totales = []
   
   

    this.agregarCompra = function(compra) { 
        this.compra.push(compra)
       
    }
}

function Compra(cantidad, producto, precio, totales){
    this.cantidad = cantidad;
    this.producto = producto;
    this.precio = precio;
    this.totales = totales;
    

    this.agrgarAlCarrito = function(carritoCompra) {
        var compra = {Cantidad: this.cantidad, Producto: this.producto, Precio: this.precio, Totales: this.totales}
        carritoCompra.agregarCompra(compra);
    }

    this.imprimirTotales = function(carritoCompra){
        for(var i = 0; i < 4; i++){
            var totales = cantidad[i] * precio[i] ;
            carritoCompra.imprimirTotales(totales);
            
            console.log(cantidad[i]+ '-' + producto[i] + ':' + precio[i] + '$' +'\nTotal de compra: $ ' + totales[i]);
           
        }
    }
 
}

// falta sumar el total individual y total de la compra 



var carritoCompra = new CarritoCompra();


var compra = new Compra(1, "FotoAmérica1", 10 );
compra.agrgarAlCarrito(carritoCompra);



var compra2 = new Compra(2, "FotoAsia1", 11);
compra2.agrgarAlCarrito(carritoCompra);


var compra3 = new Compra(1, "FotoAfrica2", 9);
compra3.agrgarAlCarrito(carritoCompra);


var compra4 = new Compra(2, "FotoEuropa3", 8);
compra4.agrgarAlCarrito(carritoCompra);


var compra5 = new Compra(1, "FotoEuropa1", 12);
compra5.agrgarAlCarrito(carritoCompra);

console.log(carritoCompra.compra);
console.log(totales);