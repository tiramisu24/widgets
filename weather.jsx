import React from "react";
import ReactDOM from "react-dom";

class Weather extends React.Component{
  constructor(){
    super();
    // let nav = new Navigator();
    let geo = navigator.geolocation;
  }
  render(){
    return(<h1>This is weather</h1>);
  }
}

export default Weather;
