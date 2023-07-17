import React, { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';

const AgeCalculator = () => {
  const [yob, setYob] = useState({
    day: '',
    month: '',
    year: '',
  });
  const getSum = () => {
    let num1 = 10;
    let num2 = 12;
    console.log(num1 + num2);
  };
  getSum();

  let names = ['Jane Doe', 'Robert Doe', 'Robert Doe', 'Sally Doe'];

  let name = 'Jane Doe';
  const getYears = (monthToday, monthBorn, yearToday, yearBorn) => {
    if (monthToday < monthBorn) {
      return yearToday - yearBorn - 1;
    } else {
      return yearToday - yearBorn;
    }
  };
  const getMonth = (monthToday, monthBorn) => {
    if (monthToday > monthBorn) {
      return monthToday - monthBorn;
    } else {
      return 12 - monthBorn + monthToday;
    }
  };
  const getDay = (dayBorn, dayToday) => {
    if (dayToday < dayBorn) {
      return dayBorn- dayToday;
    } else {
      return 30 - dayBorn + dayToday;
    }
  };
  const [day, setDay] = useState('--');
  const [month, setMonth] = useState('--');
  const [year, setYear] = useState('--');
  const getAge = (e) => {
    e.preventDefault();
    let yob1 = `${yob.month}/${yob.day}/${yob.year}`;
    let newYob = new Date(yob1);
    console.log(newYob);
    let dateToday = new Date();
    let dayToday = dateToday.getDate();
    let dayBorn = newYob.getDate();
    let monthToday = dateToday.getMonth();
    let monthBorn = newYob.getMonth();
    console.log(monthBorn);
    let yearToday = dateToday.getFullYear();
    let yearBorn = newYob.getFullYear();
    let years = getYears(monthToday, monthBorn, yearToday, yearBorn);
    console.log(years);
    let months = getMonth(monthToday, monthBorn);
    console.log(months);
    let days = getDay(dayBorn, dayToday);
    console.log(days);
    setDay(days)
    setMonth(months)
    setYear(years)
  };
  return (
    <>
    <Navbar/>
      <div className="body">
        <div style={styles.screen}>
          <div style={styles.all}>
            <form>
              <div className="form">
                <div style={styles.labels}>
                  <label>DAYS</label>
                  <br />
                  <input
                    placeholder="DD"
                    className="input"
                    onChange={(e) => setYob({ ...yob, day: e.target.value })}
                    value={yob.day}
                  ></input>
                </div>
                <br />
                <div style={styles.labels}>
                  <label>MONTHS</label>
                  <br />
                  <input
                    placeholder="MM"
                    className="input"
                    value={yob.month}
                    onChange={(e) => setYob({ ...yob, month: e.target.value })}
                  ></input>
                </div>
                <br />
                <div style={styles.labels}>
                  <label>YEARS</label>
                  <br />
                  <input
                    placeholder="YYYY"
                    className="input"
                    value={yob.year}
                    onChange={(e) => setYob({ ...yob, year: e.target.value })}
                  ></input>
                </div>
              </div>
              <div className="flex">
                <div className="line"></div>
                <button className="parent" onClick={(e) => getAge(e)}>
                  <img src="images/icon-arrow.svg"></img>
                </button>
              </div>
            </form>

            <div>
              <p className="yrs">
                <span>{year} </span> year{year>1? 's':null}
              </p>
              <p className="yrs">
                <span>{month} </span> month{month >1 ? 's':null}
              </p>
              <p className="yrs">
                <span>{day} </span> day{ day >1 ? 's':null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const styles = {
  screen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    height: '100vh',
  },

  all: {
    borderRadius: '10px 10px 30px 10px',
    backgroundColor: 'white',
    width: 'maxContent',
    padding: '3em',
  },
  labels: {
    margin: '10px',
  },
};

export default AgeCalculator;

// activity
// color picker
// create a component called color picker
// add a div that has height 100 px and width 100 px
// add 3 inputs first input will have label red
// second input will have label green
// thrid input will have label blue
// on the div styles add a background color of rgb(_,_,_)
// fill in the rgb blanks with the numbers from the inputs
// remember each number should be between 255 and 0
// i.e rgb(255,255,255) : this gives you white
// & rgb(0,0,0) : this gives you black

