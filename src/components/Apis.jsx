import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Apis = () => {
  // https://dog.ceo/api/breeds/image/random
  // https://api.disneyapi.dev/character/42
  //   https://api.agify.io/?name=victor

  const [dogImage, setDogImage] = useState('');
  const [dogImage2, setDogImage2] = useState('');
  const [disneyImage, setDisneyImage] = useState('');
  const [nameAge, setNameAge] = useState('');
  const [name, setName] = useState('');
  const [populationData, setPopulationData]= useState([]);

  const getDogImage = () => {
    axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
      // console.log(response.data)
      setDogImage(response.data.message);
    });
  };

  const getUsPopulation = () => {
    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((response) => {
      console.log(response.data);
      setPopulationData(response.data.data)
    });
  };


  const getAge = () => {
    axios.get('https://api.agify.io/?name=' + name).then((response) => {
      console.log(response.data);
      setNameAge(response.data.age);
    });
  };

  // const getDisneyImage = () =>{
  //   axios.get('https://api.disneyapi.dev/character/42').then((response)=>{
  //       console.log(response.data)
  // setDisneyImage(response.data.message);
  //   });
  // };

  const getDogImageAsync = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    // console.log(response.data)
    setDogImage2(response.data.message);
  };

  useEffect(() => {
    getDogImage();
    getDogImageAsync();
    // getDisneyImage();
    getUsPopulation();
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Apis</h1>
      <img src={dogImage} alt="dogImage" />
      <img src={dogImage2} alt="dogImage2" />
      <button onClick={getDogImage}>View Image</button>
      <img src={disneyImage} alt="disneyImage" />
      {/* <button onClick={getDisneyImage}></button> */}
      <input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={getAge}>Submit</button>
      <p>
        This is <span>{name}</span>
      </p>
      <p>
        {' '}
        They are <span>{nameAge}</span>
      </p>
      {populationData.map((pData) =>{
        return(
          <div>
            <p>{pData['ID Nation']}</p>
            <p>{pData.Nation}</p>
            <p>{pData.Population.toLocaleString()}</p>
            <p>{pData.Year}</p>
          </div>
        )
      })}

    </div>
  );
};

export default Apis;
