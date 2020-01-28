import React, { useEffect, useState } from "react";
import Axios from 'axios'
import LocationCard from './LocationCard'

export default function LocationsList() {

//hook

const [locations, setLocations] = useState([])

useEffect(() => {
    Axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => setLocations(res.data.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
    {locations &&
      locations.map(location => (
        <LocationCard
            key={location.id}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            residents={location.residents}
          />
      ))}
        </div>
      )
}