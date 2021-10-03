import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from "./components/Countries";
import FindCountries from './components/FindCountries';

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ newSearch, setSearch ] = useState('')
  const [ results, setResults ] = useState([])
  const [ tooMany, setTooMany ] = useState(false)
  const [ noResults, setNoResults] = useState(false)

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3/all')
      .then(response => {
        console.log('promise fulfilled')
       
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])

  const handleSearchChange = (event) => {
    
    setSearch(event.target.value)
    
    let searchResults = [] 
    let countriesArray = []
    Object.keys(countries).forEach(function(key,index) {
      countriesArray[index] = countries[key]})
  
    
    for(let i = 0; i < countriesArray.length; i++) {
      if(countriesArray[i].name.common.toLowerCase().includes(event.target.value.toLowerCase())) {
         searchResults.push(countriesArray[i])
        }
      }
    
   
  
    if( searchResults.length > 10 && searchResults.length < 250 ) {
      
      setTooMany(true)
    } else {
      setTooMany(false)
    }

    if(searchResults.length === 0) {
      setNoResults(true)
    } else {
      setNoResults(false)
    }

    setResults(searchResults)
    
  }

  return (
    <div>
      <FindCountries value={newSearch} onChange={handleSearchChange} /> 
      {tooMany && 
        <p>Too many matches. Specify another filter</p>
      } 
      {noResults && 
        <p>No matches found</p>
      } 
      <Countries object={results}/> 
    </div>
  )
}

export default App;
