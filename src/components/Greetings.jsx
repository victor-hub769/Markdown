import React from 'react';
import Names from './Names';
import Navbar from './Navbar';
const Greetings = () => {
  const name = {
    firstName: 'John',
    lastName: 'Doe',
  };
  const people = [
    { firstName: ' John', lastName: 'Doe' },
    { firstname: ' Peter', lastName: 'Doe' },
    { firstName: ' Jane', lastName: 'Doe' },
    { firstName: ' Phillip', lastName: 'Doe' },
    { firstName: ' Dexter', lastName: 'Doe' },
    { firstName: ' Sally', lastName: 'Doe' },
    { firstName: ' Victor', lastName: 'Doe' },
    { firstName: ' Del', lastName: 'Doe' },
  ];

  return (
    <>
    <Navbar/>
      {people.map((person) => {
        return (
          <p>
            Hello
            <Names firstName={person.firstName} lastName={person.lastName} />
          </p>
        );
      })}
    </>
  );
};
export default Greetings;
