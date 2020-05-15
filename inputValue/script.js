var a = document.querySelector('.input1');
var b = document.querySelector('.input2');
var showInput = document.querySelector('.showInput');

function calculo() {
  var sum = parseInt(a.value) + parseInt(b.value);
  showInput.innerHTML = `A soma dos valores é ${sum}`;
}
