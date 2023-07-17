import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <div className='navBody'>
      <ul className='ulBar'>
        <li >
          {' '}
          <Link className="nav" to="/">Age Calculator</Link>
        </li>
        <br/>
        <li >
          <Link className="nav" to="/example">Example Component</Link>
        </li>
        <br/>
        <li >
          {' '}
          <Link className="nav" to="/colorpicker">Color Picker</Link>
        </li>
        <br/>
        <li >
          <Link className="nav" to="/greetings">Greetings </Link>
        </li>
        <br/>
        <li >
          <Link className="nav" to="/order">Order </Link>
        </li>
        <br/>
        <li>
          <Link className="nav" to="/markdown">Markdown </Link>

        </li>
        <br/>
        <li>
          <Link className='nav' to="/Apis">Apis</Link>
        </li>
        <br/>
        <li>
          <Link className='nav' to="/Restaraunt">Restaraunt</Link>
        </li>
        <br/>
        <li>
          <Link className='nav' to ="/Bootstrap">Bootstrap</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
