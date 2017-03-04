import React from "react";
import ReactDOM from "react-dom";

class ClockWidget extends React.Component{
  constructor(){
    this.state = {
      date: new Date()
    }
  }
  componentDidMount(){
    setInterval(this._tick.bind(this), 1000);
  }

  _tick(){
    this.setState({date: new Date()});
  }
  render(){
    return (
      <h1>{this.state.date}</h1>
    )
  }
}

export default ClockWidget;
