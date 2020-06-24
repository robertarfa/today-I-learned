import React, { useState, useEffect } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';


export default function App() {

  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [filteredPopulation, setFilteredPopulation] = useState(0)
  const [userFilter, setUserFilter] = useState('')


  useEffect(() => {

    const getCountries = async () => {
      const res = await fetch('https://restcountries.eu/rest/v2/all')
      let allCountries = await res.json()

      allCountries = allCountries.map(({ name, numericCode, flag, population }) => {
        return {
          id: numericCode,
          name,
          filterName: name.toLowerCase(),
          flag,
          population,
        }
      })

      setAllCountries(allCountries)
      setFilteredCountries(Object.assign([], allCountries))
    }
    getCountries()
  }, [])

  const calculateTotalPopulationFrom = (coutries) => {
    const totalPopulation = coutries.reduce((acc, curr) => {
      return acc + curr.population
    }, 0)

    return totalPopulation
  }

  const handleChangeFilter = (newText) => {
    setUserFilter(newText)

    const filterLowerCase = newText.toLowerCase()

    const filteredCountries = allCountries.filter((country) => {
      return (country.filterName.includes(filterLowerCase))
    })

    const filteredPopulation = calculateTotalPopulationFrom(filteredCountries)

    setFilteredCountries(filteredCountries)
    setFilteredPopulation(filteredPopulation)

  }

  return (
    <div className="container">

      <h3 style={styles.centeredTitle}>React Countries</h3>

      <Header
        filter={userFilter}
        countryCount={filteredCountries.length}
        totalPopulation={filteredPopulation}
        onChangeFilter={handleChangeFilter} />

      <Countries countries={filteredCountries} />
    </div>
  )

}

const styles = {
  centeredTitle: {
    textAlign: 'center',
  }
}