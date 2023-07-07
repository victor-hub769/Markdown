import React from 'react';
const Names = ({ firstName, lastName }) => {
  return (
    <span>
      {firstName} {lastName}
    </span>
  );
};
export default Names;
// activity
// create a component called order.jsx
// create a component called Details.jsx
// on the order component, add a p tag that says thank you for your order
// on the details component add a aname and an adrress
// pass the name and address from order components as props