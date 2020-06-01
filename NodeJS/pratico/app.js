let cities = require('./src/Cidades.json')
let states = require('./src/Estados.json')
const fs = require('fs')

function citiesInStates() {
  let newStates = states.map((state) => {
    const { ID, Sigla, Nome } = state
    return {
      stateId: ID,
      stateUF: Sigla,
      stateName: Nome,
      cities: [],
    }
  })

  cities.forEach((city) => {
    newStates.forEach((state) => {
      if (city.Estado === state.stateId) {
        state.cities.push(JSON.stringify(city))
      }
    })
  })

  //console.log(newStates)
  //writeJsons(newStates)
  //compareMoreCitiesQty(newStates)
  //compareLessCitiesQty(newStates)
  cityBiggestName(newStates)
}

function writeJsons(states) {
  states.forEach((state) => {
    fs.writeFile(`./${state.stateUF}.json`, JSON.stringify(state), function (
      err
    ) {
      if (err) {
        console.log(err)
      }
    })
  })
}

//()Criar um método que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.

function countCitiesByState(UF) {
  fs.readFile(`./src/states/${UF}.json`, function (err, data) {
    if (err) {
      console.log(err)
    }

    const state = JSON.parse(data)
    const city = state.cities
    console.log(`${UF} possui ${city.length} cidades`)
  })
}

//()Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, seguidos da quantidade, em ordem decrescente.
//Utilize o método criado no tópico anterior.Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]

function compareMoreCitiesQty(states) {
  //var size = 10
  const city = states.map((state) => {
    const { stateUF, cities } = state
    return {
      stateUF,
      cities: cities.length,
    }
  })

  const citiesSorted = city
    .sort((a, b) => {
      return b.cities - a.cities
    })
    .slice(0, 5)

  console.log(citiesSorted)
}

//()Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, seguidos da
//quantidade, em ordem decrescente.
//Utilize o método criado no tópico anterior.Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]

function compareLessCitiesQty(states) {
  const city = states.map((state) => {
    const { stateUF, cities } = state
    return {
      stateUF,
      cities: cities.length,
    }
  })

  const citiesSorted = city
    .sort((a, b) => {
      return a.cities - b.cities
    })
    .slice(0, 5)

  console.log(citiesSorted)
}

//()Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF.
//Em caso de empate, considerar a ordem alfabética para ordená - los e então retornar o primeiro.Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].
//FIXME
function cityBiggestName(states) {
  const city = states.map((state) => {
    const { stateUF, cities } = state
    return {
      cityName: cities[0].Nome,
      stateUF,
    }
  })

  const citiesSorted = city.sort((a, b) => {
    return a.cityNameLength - b.cityNameLength
  })

  console.log(city)
}

//countCitiesByState('SP')
citiesInStates()
