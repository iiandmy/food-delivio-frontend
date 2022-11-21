import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = "http://localhost:8080";
const endpoint = "/add_restaurant";
const ratingEndpoint = "/get_rating/";

let config = {
  headers: {
    "Access-Controll-Allow-Origin": true
  }
}

class App extends Component {
  addRestaurant() {
    let formData = new FormData();
    formData.append('restaurantName', "Claude Monet");
    axios.post(apiUrl + endpoint, {
      "name": "Claude Monet",
      "address": "Pizda",
      "workTime": "12:00 - 21:00"
    }, config)
      .then(responce => {
        console.log(responce.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getRating(id) {
    axios.get(apiUrl + ratingEndpoint + id, config)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.makeRequest();}}>press</button>
        <button onClick={() => {this.getRating(1);}}>rating</button>
      </div>
    );
  }
}

export default App;
