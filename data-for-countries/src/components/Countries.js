import React, { useEffect, useState } from "react";
import SingleCountry from "./SingleCountry";

const Countries = (props) => {

  const [selectedCountry, setSelectedCountry ] = useState();
  
  
  useEffect(() => {
    if (props.object.length === 1) {
      setSelectedCountry(props.object[0]);
    }
  }, [props]);

  const countryList = props.object.map((country) => {
      console.log(props.object)
      return(
                <div>
                  <p key={country}> {country.name.common}</p>
                  <button onClick={() => setSelectedCountry(country)}>show</button>
               
                </div>
      )
  });
  
  return (
    <div> 
      {(props.object.length > 1 && props.object.length < 11) && countryList}
      {selectedCountry && <SingleCountry country={selectedCountry} />}
     
    </div>
    )
};

export default Countries;