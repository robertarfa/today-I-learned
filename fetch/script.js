//console.log('fetch')

window.addEventListener('load', function () {
  //   doFetch()
  doFetchAsync()
  //   executeDivisionPromiseAsyncAwait()
})

//Promise
function doFetch() {
  fetch('https://api.github.com/users/robertarfa')
    .then((resource) => {
      resource.json().then((data) => {
        showData(data)
      })
    })
    .catch((error) => {
      console.log('Erro na requisição')
    })
}

//Async/Await
async function doFetchAsync() {
  const github = await fetch('https://api.github.com/users/robertarfa')
  const json = github.json()
  console.log(json)
}

function showData(data) {
  var login = document.querySelector('#login')
  login.textContent = `Login: ${data.login}`
  var name = document.querySelector('#name')
  name.textContent = data.name
}

//Promise
function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possível dividir por 0')
    }
    resolve(a / b)
  })
}

//Async/Await
async function executeDivisionPromiseAsyncAwait() {
  const division = await divisionPromise(12, 2)
  console.log(division)
}
