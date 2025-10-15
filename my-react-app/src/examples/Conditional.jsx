import React from "react";

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

function Car(props) {
  return (
    <>
      {props.brand && <h1>My car is a {props.brand}!</h1>}
    </>
  );
}

function Goal1(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

function Conditional() {
  return (
    <>
        <MissedGoal />
        <MadeGoal />
        <Goal isGoal={true} />
        <Goal isGoal={false} />
        <Car brand="Ford" />
        <Car />
        <Goal1 isGoal={true} />
        <Goal1 isGoal={false} />


    </>
  );
}
export default Conditional;