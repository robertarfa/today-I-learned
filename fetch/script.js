//console.log('fetch')

window.addEventListener('load', function () {
  //   doFetch()
  doFetchAsync()

  //   executeDivisionPromiseAsyncAwait()
})

//Async/Await
async function doFetchAsync() {
  const github = await fetch('https://api.github.com/users/robertarfa')
  const data = github.json().then((data) => {
    console.log(data)
    showData(data)
  })
}

function showData(data) {
  var login = document.querySelector('#login')
  login.textContent = `Login: ${data.login}`
  var name = document.querySelector('#name')
  name.textContent = data.name
}
