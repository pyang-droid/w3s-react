import React from "react";

function Car(props) {
  const {brand, model} = props;
  return (
    <h2>I love my {brand} {model}!</h2>
  );
}

function Car1({color, brand, ...rest}) {
  return (
    <h2>My {brand} {rest.model} is {color}!</h2>
  );
}

function Car2({color = "blue", brand}) {
  return (
    <h2>My {color} {brand}!</h2>
  );
}

function DestructuringProps() {
  return (
    <>
        <Car brand="Ford" model="Mustang" />    
        <Car1 brand="Ford" model="Mustang" color="red" />
        <Car2 brand="Ford" />
    </>
  );
}
export default DestructuringProps;