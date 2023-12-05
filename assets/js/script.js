///Constantes para mudar horas, minutos e segundos
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const milisegundos = document.getElementById("milisegundos");

const relogio = setInterval(function time() {
  let datahoje = new Date();
  let hora = datahoje.getHours();
  let minuto = datahoje.getMinutes();
  let segundo = datahoje.getSeconds();
  let milisegundo = datahoje.getMilliseconds ();

  horas.textContent = hora;
  minutos.textContent = minuto;
  segundos.textContent = segundo;
  milisegundos.textContent = milisegundo

});
