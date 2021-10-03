import React, { useState, useEffect } from 'react';
import axios from 'axios'

const SingleCountry = (props) => {

    const [ weather, setWeather] = useState(null)
    const hook = () => {
        console.log('effect')
        axios
          .get(`http://api.weatherstack.com/current?access_key=f36841e69dbbf29a16afd474ed3379b2&query=${props.country.capital}`)
          .then(response => {
            console.log('promise fulfilled')
            setWeather(response.data)
          })
      }
      
    useEffect(hook, [props])

    if(weather !== null) {
        console.log('current weather', weather.current)
    }

    const langArray = []
    const imgArray = []

    return (
        <div>
            
            <h1>{props.country.name.common}</h1>
            <p>capital: {props.country.capital}</p>
            <h2>languages</h2>
            
            { Object.keys(props.country.languages).forEach(function(key,index) {
                langArray[index] = props.country.languages[key]})
            }
            <ul>
            {
                langArray.map(language => {
                return(
                        <li key={language}>{language}</li> 
                    )
                })
            }
            </ul>
            { Object.keys(props.country.flags).forEach(function(key,index) {
                imgArray[index] = props.country.flags[key]})
            }
            
            <img src={imgArray[1]} alt="flag" style={{width: '200px'}} />
            
            <h1>Weather in {props.country.capital}</h1>
            
            {/* doesnt work, don't know why */}
            <p><b>temperature:</b> {weather !== null && weather.current.temperature} celsius</p>
            <img src={weather !== null && weather.current.weather_icons[0]}/>
            <p><b>wind: </b>{weather !== null && weather.current.wind_speed} direction {weather !== null && weather.current.wind_dir}</p>
        
        </div>
    )
}

export default SingleCountry;