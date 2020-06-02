// console.log('teste')
var fs = require('fs')

let jsonState = fs.readFileSync('./src/Estados.json', 'utf8')
let readingStates = JSON.parse(jsonState)

let jsonCity = fs.readFileSync('./src/Cidades.json', 'utf8')
let readingCities = JSON.parse(jsonCity)
//console.log(readingStates)

const newStates = readingStates.map((state) => {
  const { ID, Sigla, Nome, cities } = state
  return {
    stateId: ID,
    stateUF: Sigla,
    stateName: Nome,
    cities: [],
  }
})

const newCities = readingCities.map((city) => {
  const { ID, Nome, Estado } = city
  return {
    cityId: ID,
    cityName: Nome,
    stateId: Estado,
  }
})

newCities.forEach((city) => {
  newStates.forEach((state) => {
    if (city.stateId === state.stateId) {
      state.cities.push(JSON.stringify(city))
    }
  })
})

//console.log(newStates)
//     (1)- Implementar um método que irá criar um arquivo JSON para cada estado representado no arquivo Estados.json,
//     e o seu conteúdo será um array das cidades pertencentes aquele estado, de acordo com o arquivo Cidades.json.
// O nome do arquivo deve ser o UF do estado, por exemplo: MG.json.

//WriteJson(newStates)

function WriteJson(states) {
  states.forEach((state) => {
    fs.writeFile(
      `./src/states/${state.stateUF}.json`,
      JSON.stringify(state),
      function (err) {
        if (err) {
          console.log(err)
        }
      }
    )
  })
}

// (2) - Criar um método que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente
// e retorne a quantidade de cidades daquele estado.
//readStateJson('MG')

function readStateJson(UF) {
  fs.readFile(`./src/states/${UF}.json`, function (err, data) {
    if (err) {
      console.log(err)
    }

    const eachState = JSON.parse(data)
    const city = eachState.cities
    console.log(`${UF} possui ${city.length} cidades`)
  })
}

// (3)Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades,
//     seguidos da quantidade, em ordem decrescente.Utilize o método criado no tópico anterior.
// Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]
//moreCitiesInUF(newStates)

function moreCitiesInUF(states) {
  const moreCities = states.map((state) => {
    const { stateUF, cities } = state
    return {
      stateUF,
      cities: cities.length,
    }
  })

  const byLargeState = moreCities
    .sort((a, b) => {
      return b.cities - a.cities
    })
    .slice(0, 5)

  console.log(byLargeState)
}

//     (4)Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades,
//     seguidos da quantidade, em ordem decrescente.Utilize o método criado no tópico anterior.
// Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]

//lessCitiesInUF(newStates)

function lessCitiesInUF(states) {
  const lessCities = states.map((state) => {
    const { stateUF, cities } = state
    return {
      stateUF,
      cities: cities.length,
    }
  })

  const bySmallState = lessCities
    .sort((a, b) => {
      return a.cities - b.cities
    })
    .slice(0, 5)

  console.log(bySmallState)
}

//(5)Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF.
// Em caso de empate, considerar a ordem alfabética para ordená - los e então retornar o primeiro.
// Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].

// ()Criar um método que imprima no console um array com a cidade de menor nome de cada estado, seguida de seu UF.
// Em caso de empate, considerar a ordem alfabética para ordená - los e então retorne o primeiro.
// Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].

// ()Criar um método que imprima no console a cidade de maior nome entre todos os estados, seguido do seu UF.
// Em caso de empate, considerar a ordem alfabética para ordená - los e então retornar o primeiro.
//     Exemplo: “Nome da Cidade - UF".

//     ()Criar um método que imprima no console a cidade de menor nome entre todos os estados, seguido do seu UF.
// Em caso de empate, considerar a ordem alfabética para ordená - los e então retornar o primeiro.
//     Exemplo: “Nome da Cidade - UF".
