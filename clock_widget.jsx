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
    setInterval(this._tick.bind(this), 1000);
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
    return(
      <h1>Current Date: {this.printDate()}</h1>
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
