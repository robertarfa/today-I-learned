//console.log('fetch')

window.addEventListener('load', function () {
  //   fetch('https://api.github.com/users/robertarfa')
  //     .then((resource) => {
  //       resource.json().then((data) => {
  //         showData(data)
  //       })
  //     })
  //     .catch((error) => {
  //       console.log('Erro na requisição')
  //     })
  divisionPromise(12, 6).then((result) => {
    console.log(result)
  })
  divisionPromise(12, 0)
    .then((result) => {
      console.log(result)
    })
    .catch((errorMessage) => {
      console.log('Falha na divisão, ' + errorMessage)
    })
})

// function showData(data) {
//   var login = document.querySelector('#login')
//   login.textContent = `Login: ${data.login}`
//   var name = document.querySelector('#name')
//   name.textContent = data.name
// }

console.log('promise')

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('não é possível dividir por 0')
    }
    resolve(a / b)
  })
}
