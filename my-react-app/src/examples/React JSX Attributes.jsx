import React from "react";

function Car() {
  return (
    <h1 className="myclass">Hello World</h1>
  );
}

function Car1() {
  const x = "myclass";
  return (
    <h1 className={x}>Hello World</h1>
  );
}

function Car2() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}


function Car3() {
  const myfunc1 = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc1} disabled>Click me</button>
  );
}

function Car4() {
  const myfunc2 = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc2} disabled={true}>Click me</button>
  );
}

function Car5() {
  const myfunc3 = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc3} disabled={false}>Click me</button>
  );
}

function Car6() {
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>My car</h1>
    </>
  );
}
function JSXAttributes() {
  return (
    <>
      <Car />
        <Car1 />
        <Car2 />    
        <Car3 />
        <Car4 />    
        <Car5 />
        <Car6 />

    </>
  );
}    

export default JSXAttributes;   