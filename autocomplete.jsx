import React from "react";
import ReactDOM from "react-dom";
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class AutoComplete extends React.Component{
  constructor(props){
    super(props);
    this.names = props.names;
    this.state = {input: ""};

  }
  updateField(event){
    this.setState({input: event.target.value})
  }
  render(){

    let names = []
    this.names.forEach((el,idx) => {
      if(el.includes(this.state.input)){
        names.push(<li key={idx}>{el}</li>);
      }
    });

    return(
      <div>
        <input type="text" value={this.state.input} onChange={this.updateField.bind(this)}></input>

        <ul>
          <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500} transitionLeaveTimeout={500} >

          {names}
        </ReactCSSTransitionGroup>

        </ul>
      </div>
    );
  }
}
