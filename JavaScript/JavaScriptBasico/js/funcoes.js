function pulaLinha() {
  document.write('<br>')
}

document.write('<strong>Funções</strong>')

pulaLinha()
pulaLinha()

function sum(a, b) {
  return a + b
}

document.write(sum(1, 3))

pulaLinha()
pulaLinha()

function compareNumbers(a, b) {
  //return a > b ? 1 : a < b ? -1 : 0;
  return a - b
}

document.write(compareNumbers(1, 1))
pulaLinha()
document.write(compareNumbers(1, 2))
pulaLinha()
document.write(compareNumbers(2, 1))

pulaLinha()
pulaLinha()

function superSum(from, upTo) {
  var sum = 0

  if (from > upTo) {
    var sum = ''
    document.write('Digite o numero menor primeiro')
  }

  for (var i = from; i <= upTo; i++) {
    sum += i
  }
  return sum
}

document.write(superSum(1, 10))
pulaLinha()
document.write(superSum(9, 100))
pulaLinha()
document.write(superSum(200, 1000))
