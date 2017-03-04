import React from "react";
import ReactDOM from "react-dom";

class ClockWidget extends React.Component{
  constructor(){
    super();
    this.state = {
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
    // debugger;
    return this.state.date.toDateString();
  }

  render(){
    // debugger;
    let hours = this.state.date.getHours();
    let min = this.state.date.getMinutes();
    let sec = this.state.date.getSeconds();
    hours = (hours<10)? `0${hours}` : hours;
    min = (min<10)? `0${min}` : min;
    sec = (sec<10)? `0${sec}` : sec;
    return(
      <div>
        <div>
          <h1>Current Time: {hours}:{min}:{sec}</h1>
        </div>
        <h1>Current Date: {this.printDate()}</h1>
      </div>
    );
  }

  // render(){
  //   return (
  //     <div className="Clock">
  //
  //       // <h1>{this.state.date}</h1>
  //     </div>
  //   );
  // }
}

export default ClockWidget;
