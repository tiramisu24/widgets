import React from "react";
import ReactDOM from "react-dom";

const toQueryString = (obj) => {
  let parts = [];
  for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
          parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
      }
  }
  return parts.join('&');
}

class Weather extends React.Component{
  constructor(){
    super();
    this.getWeather = this.getWeather.bind(this)
    this.state = {weather: null};
    // let nav = new Navigator();
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getWeather);
    // debugger;
  }
  getWeather(location){
    let coordinate ={
      lat: location.coords.latitude,
      lon: location.coords.longitude
    }
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    url += toQueryString(coordinate);
    const APIkey = '7c000144dee844317a2cf8f9b44784d8';
    url += `&APPID=${APIkey}`;

    let xml = new XMLHttpRequest();
    xml.onreadystatechange = ()=>{
      if (xml.status === 200 && xml.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xml.responseText);
        this.setState({weather: data});
      }
    };

    xml.open('GET', url, true);
    xml.send();
  }



  render(){
    let content = "Loading Weather..."
    if(this.state.weather !== null){
      let weather = this.state.weather;
      content = (
        <div className = "Weather">
          <span>{weather.name}</span>
          <br></br>
          <span>{weather.main.temp}</span>
        </div>
      )}
    return(<h1>{content}</h1>);
  }
}

export default Weather;
