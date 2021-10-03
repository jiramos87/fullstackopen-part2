import React from "react";

const FindCountries = (props) => {
    return (
      <div>
        find countries <input placeholder="Type country name..." value={props.value} onChange={props.onChange} /> 
      </div>
    )
}

export default FindCountries;