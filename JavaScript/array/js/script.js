window.addEventListener('load', () => {
  doMap()
  doFilter()
  doForeach()
  doReduce()
  doFind()
  doSome()
  doEvery()
  doSort()
})

//map (transformar array em objeto com nome e email)
function doMap() {
  const nameEmailArray = people.results.map((person) => {
    //person => é como se fizesse o for
    return {
      name: person.name,
      email: person.email,
    }
  })
  //console.log(nameEmailArray)
  return nameEmailArray
}

//filter (maiores de 50 anos - retira elementos de acordo o parametro)
function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50
  })
  //console.log(olderThan50)
}

//forEach (incluir uma nova propriedade no objeto)
function doForeach() {
  const mappedPeople = doMap()

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length
  })
  //console.log(mappedPeople)
}

//reduce (somar idades)
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age
  }, 0)

  //console.log(totalAges)

  //   let sumAges = 0
  //   for (let i = 0; i < people.results.length; i++) {
  //     var current = people.results[i]
  //     sumAges += current.dob.age
  //   }

  //   console.log(sumAges)
}

//find (primeiro usuário de Meninas Gerais)
function doFind() {
  const findState = people.results.find((person) => {
    return person.location.state === 'Minas Gerais'
  })
  //console.log(findState)
}

//some (retorna verdadeiro ou falso - usuários de Minas Gerais)
function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas'
  })
  //console.log(found)
}

//every (nat = 'BR' - se todos atenderem a regra, irá retornar true, se um não for true, vai retornar false)
function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR'
  })
  //console.log(every)
}

//sort (ordenar por nome e idade ASC e DESC)
function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      }
    })
    .filter((person) => person.name.startsWith('A'))
    .sort((a, b) => {
      return a.name.localeCompare(b.name) //ordem alfabética
      //return a.name.length - b.name.length //pelo tamanho do nome
    })

  //console.log(mappedNames)
}
