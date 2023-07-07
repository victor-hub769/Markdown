import React, { useState } from 'react';
function ExampleComponent() {
  const getSum = () => {
    let num1 = 10;
    let num2 = 12;
    console.log(num1 + num2);
  };
  getSum();

  let names = ['Jane Doe', 'Robert Doe', 'Robert Doe', 'Sally Doe'];

  let name = 'Jane Doe';
  let students = [
    { name: 'Jane Doe', grade: 5 },
    { name: 'Peter Doe', grade: 4 },
    { name: 'Sally Doe', grade: 3 },
    { name: 'Derrick Doe', grade: 2 },
    { name: 'John Doe', grade: 8 },
  ];
  const [counter, setCounter] = useState(0);
  const [firstName, setFisrtName] = useState('');
  return (
    <div>
      <p> The counter is {counter} </p>
      <button onClick={() => setCounter(counter + 1)}>ADD</button>
      <button onClick={() => setCounter(counter - 1)}>Subtract</button>
      <input type="text" placeholder="First Name" onChange={(e) => setFisrtName(e.target.value)}></input>
      <p>{firstName}</p>
      <h1> This is an example component</h1>
      <p>Hello {name}</p>
      {names.map((nme) => {
        return <p>Hello {nme}</p>;
      })}
      ;
      {students.map((nmes) => {
        return <p>{nmes.name}</p>;
      })}
    </div>
  );
}

export default ExampleComponent;
