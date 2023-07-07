import React, { useState } from 'react';
import './colorPicker.css';

function ColorPicker() {
  const [color, setColor] = useState({
    red: '175',
    green: '172',
    blue: ' 157',
  });
  return (
    <div>
      <div
        style={{ height: '100px', width: '100px', background: `rgb(${color.red},
         ${color.green}, ${color.blue})`  }}
      ></div>
      <div className="inputs">
        <label className="labesl">RED</label>
        <br />
        <input
          type="number"
          placeholder="RED"
          onChange={(e) => setColor({ ...color, red: e.target.value })}
          value={color.red}
        ></input>
        <br />

        <label className="labesl">GREEN</label>
        <br />
        <input
          type="number"
          placeholder="Green"
          onChange={(e) => setColor({ ...color, green: e.target.value })}
          value={color.green}
        ></input>
        <br />

        <label className="labesl">BLUE</label>
        <br />
        <input
          type="number"
          placeholder="Blue"
          onChange={(e) => setColor({ ...color, blue: e.target.value })}
          value={color.blue}
        ></input>
        <br />
      </div>
    </div>
  );
}
const styles = {};

export default ColorPicker;
