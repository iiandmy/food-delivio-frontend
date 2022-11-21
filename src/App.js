import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = "http://localhost:8080";
const endpoint = "/restaurants";

let config = {
  headers: {
    "Access-Controll-Allow-Origin": true
  }
}

class App extends Component {
  makeRequest() {
    axios.get(apiUrl + endpoint, config)
      .then(responce => {
        console.log(responce.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.makeRequest();}}>press</button>
      </div>
    );
  }
}

export default App;
