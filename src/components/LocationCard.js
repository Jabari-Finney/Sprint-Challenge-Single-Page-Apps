import React from "react";


export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <h2>{dimension}</h2>
      <h2>{residents}</h2>
    </div>
  )
}
