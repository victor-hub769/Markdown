import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import SearchIcon from '@mui/icons-material/Search';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './styles/restaraunt.css';
import axios from 'axios';

const Restaraunt = () => {
  const [restaraunts, setRestaurants] = useState([]);
  const getRestaurants = () => {
    axios.get('https://data-ljfa.onrender.com/').then((response) => {
      console.log(response.data);
      setRestaurants(response.data.businesses);
    });
  };

  useEffect(() => {
    getRestaurants();
  }, []);
  return (
    <Container>
      <h1 className="restarauntLogoTest">Kwetu lounge</h1>
      <img src="/images/Rectangle 3.png" alt="Banner" width="100%" />
      <div className="restaurantSearchBarContainer">
        <input placeholder="Search for a restaraunt" className="restarauntSearchBar" />
        <SearchIcon className="restaurantSearchIcon" />
      </div>
      <br />
      <h1>Moderate</h1>
      <Row xs={1} md={3} className="g-4">
      {restaraunts.map((restaurant) => {
        return (
          <Col>
            <Card className="restaurantCard">
              <Card.Img variant="top" src={restaurant.image_url} className='restaurantCardImage' />
              <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <div className="restaurantTextFlex">
                  <Card.Text>{restaurant.rating} Stars</Card.Text>
                  <br />
                  <Card.Text>{(restaurant.review_count*1).toLocaleString()} Reviews</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}</Row>
 
    </Container>
  );
};

export default Restaraunt;
