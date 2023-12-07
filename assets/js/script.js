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

///Constante para a data
const dataSpan = document.getElementById('dataSpan');

function atualizarData() {
  const dataAtual = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dataFormatada = dataAtual.toLocaleDateString('pt-BR', options);
  dataSpan.textContent = dataFormatada;
}

// Função para exibir a data inicialmente
atualizarData();

// Atualiza a data a cada segundo
setInterval(atualizarData, 1000);