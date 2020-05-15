function pulaLinha() {
  document.write('<br>');
}

console.log('Olá, mundo');

var title = document.querySelector('h1');
title.textContent = 'O título foi modificado';

//Descobrindo o tipo
console.log(typeof 4);
console.log(typeof 'Roberta');
console.log(typeof true);
console.log(typeof { id: 1, name: 'Roberta' });
console.log(typeof [1, 2, 3]);

document.write('<strong>Template String `${}`</strong>');
pulaLinha();
pulaLinha();

//Proposições lógicas

//Estrutruras de decisão
document.write('<strong>If/Else Exemplo</strong>');

pulaLinha();
pulaLinha();

var a = 6;
var b = 5;

if (a > b) document.write(`${a} é maior que ${b}`);
else if (a < b) document.write(`${a} é menor que ${b}`);
else document.write(`${a} é igual ${b}`);

pulaLinha();
pulaLinha();

document.write('<strong>Switch</strong>');

pulaLinha();
pulaLinha();

var dia = 4;
var d = '';

// prettier-ignore
switch (dia) {
    case 1: d = 'Domingo'; break;
    case 2: d = 'Segunda'; break;
    case 3: d = 'Terça'; break;
    case 4: d = 'Quarta'; break;
    case 5: d = 'Quinta'; break;
    case 6: d = 'Sexta'; break;
    case 7: d = 'Sábado'; break;
        
    default: d = 'Dia inválido';
}

document.write(d);

pulaLinha();
pulaLinha();

document.write('<strong>Operador Ternário</strong>');

pulaLinha();
pulaLinha();

a = 7;
b = 7;

var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';

document.write(resposta);

pulaLinha();
pulaLinha();

//Estruturas de repetição

document.write('<strong>While</strong>');

pulaLinha();
pulaLinha();

var number = 1;
var sum = 0;

while (number <= 10) {
  //sum = sum + number
  sum += number;
  number++;
}

document.write(`A soma é ${sum}`);

pulaLinha();
pulaLinha();

document.write('<strong>Do While</strong>');

pulaLinha();
pulaLinha();

var number = 1;
var sum = 0;

do {
  sum += number;
  number++;
} while (number <= 10);

document.write(`A soma é ${sum}`);

pulaLinha();
pulaLinha();

document.write('<strong>For</strong>');

pulaLinha();
pulaLinha();

sum = 0;

for (i = 0; i <= 10; i++) {
  sum += i;
}

document.write(`A soma é ${sum}`);
