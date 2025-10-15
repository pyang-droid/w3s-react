import React from "react";

function Car() {
  return (
    <h2>Hi, I am a Car!</h2>
  );
}

function Car1(props) {
  return (
    <h2>I am a {props.color} Car!</h2>
  );
}

function Car2() {
  return (
    <h2>I am a Car!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

function Car3() {
  return (
    <h2>I am a Car!</h2>
  );
}

function Garage1() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
      <Car />
    </>
  );
}

function Car4(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage2() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car4 brand="Ford" />
      <Car4 brand="BMW" />
    </>
  );
}

function Components() {
  return (
    <>
      <Car />
      <Car1 color="red" />  
     <Car2 />
    <Garage />
    <Garage1 />
    <Car3 />
    <Garage2 />
    <Car4 brand="Toyota" />

    </>
  );
}

export default Components;