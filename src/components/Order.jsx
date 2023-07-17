import React from 'react';
import Details from './Details';
import Navbar from './Navbar';
const Order = () => {
  return (
    <>
    <Navbar/>
      <p>Thank yo for your order</p>
      <Details name = 'John Doe' address='405 Juja'/>
    </>
  );
};
// const details =
//  name= 'John Doe',
//  address='405 JUJA 100';
// return(<p>Thank you for your order < Details {name} {address}/></Details></p>)

export default Order;
