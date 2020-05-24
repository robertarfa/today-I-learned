window.addEventListener('load', function () {
  fetch('https://api.github.com/users/robertarfa').then((resource) => {
    resource.json().then((data) => {
      showData(data)
    })
  })
})

function showData(data) {
  console.log(data)
  var login = document.querySelector('#login')
  login.textContent = `Login: ${data.login}`
  var name = document.querySelector('#name')
  name.textContent = data.name
}
