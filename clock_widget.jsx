import React from "react";
import ReactDOM from "react-dom";

class ClockWidget extends React.Component{
  constructor(){
    super();
    this.time = {
      date: new Date()
    }

    this.printDate = this.printDate.bind(this);

  }
  componentDidMount(){
    this.id = setInterval(this._tick.bind(this), 1000);

  }
  componentWillUnmount(){
    this.id.clearInterval();
  }

  _tick(){
    this.setState({date: new Date()});
  }

  printDate(){
    return this.time.date.toDateString();
  }

  render(){
    let hours = this.time.date.getHours();
    let min = this.time.date.getMinutes();
    let sec = this.time.date.getSeconds();
    hours = (hours<10)? `0${hours}` : hours;
    min = (min<10)? `0${min}` : min;
    sec = (sec<10)? `0${sec}` : sec;
    return(
      <div className = "Clock">
        Clock
        <h1>Current Time: {hours}:{min}:{sec}</h1>
        <h1>Current Date: {this.printDate()}</h1>
      </div>
    );
  }

}

export default ClockWidget;
