//Rest/Spread operator e destructuring

window.addEventListener('load', () => {
  doSpread()
  doRest()
  doDestructuring()
})

//...spread (concatenar 2 objetos [ Mr + Ms ])
function doSpread() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  )
  const marriedWomen = people.results.filter(
    (person) => person.name.title === 'Ms'
  )

  const marriedPeople = [...marriedMen, ...marriedWomen, { msg: 'olá' }]

  //console.log(marriedPeople)
}

///Rest (criar função soma/multiplicação infinita (Vai espalhar e depois concatenar/somar))
function doRest() {
  console.log(infiniteSum(1, 2))
  console.log(infiniteSum(1, 2, 1000))
  console.log(infiniteSum(1, 2, 10, 20))
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

// Destructuring (criar variáveis a partir do objeto)
function doDestructuring() {
  const first = people.results[0]

  const { username, password } = first.login

  console.log(username)
  console.log(password)
}
