import React from "react";

export default function CharacterCard({ name, image}) {
  return (
    <div>
      <img src={image}/>
      <p>Name: {name}</p>
    </div>
  );
}
