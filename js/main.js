var abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var indAct = 0;
var tiempo = 1000;
var timer;

function estableceTimer()
{
   timer = setInterval(function()
   {
      indAct++;
      if (indAct > (abecedario.length-1)) indAct = 0;
      $("#letra").text(abecedario[indAct]);
   }, tiempo);
}

$( document ).ready(function(){
   indAct = 0;
   $("#letra").text(abecedario[indAct]);
   estableceTimer();
});

$("#celdaLetra").click(function(){
   var palabra = $("#palabra").text();
   palabra += abecedario[indAct];
   $("#palabra").text(palabra);
});

$("#celdaBorrar").click(function(){
   var palabra = $("#palabra").text();
   if (palabra.length > 0)
   {
      palabra = palabra.slice(0, -1);
   }
   $("#palabra").text(palabra);
});

$("#palabra").click(function(){
   $("#palabra").text("");
});

$("#botonMas").click(function(){
   tiempo = tiempo + 500;
   clearInterval(timer);
   estableceTimer();
});

$("#botonMenos").click(function(){
   if (tiempo > 500)
   {
      tiempo = tiempo - 500;
      clearInterval(timer);
      estableceTimer();
   }
});



