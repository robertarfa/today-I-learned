console.log('17/05/2020')

//Garantir que o JS só vai manipular o HTML quando os elementos estiverem carregados na página
window.addEventListener('load', start)

function start() {
  console.log('Página totalmente carregada')

  var nameInput = document.querySelector('#nameInput')
  nameInput.addEventListener('keyup', countName)

  var form = document.querySelector('form')
  form.addEventListener('submit', preventSubmit)
}

function countName(event) {
  console.log(event)
  var count = event.target.value

  var nameLength = document.querySelector('#nameLength')
  nameLength.textContent = count.length
}

function preventSubmit(event) {
  event.preventDefault()

  var nameInput = document.querySelector('#nameInput')
  alert('Nome ' + nameInput.value + ' cadastrado com sucesso')
}
