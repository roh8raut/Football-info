import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead'; 
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './Searchbar.css'


class Searchbar extends React.Component {
  constructor(props) {
    super()
    this.typeahead = React.createRef();
}
componentDidMount(){
  if(this.typeahead.getInstance().getInput().value === ""){
    this.props.resetArr()
  }
}


handleSubmit = (textValue) => {
        this.props.setMatchInfo(this.props.matches, textValue)
  }


  render(){
  return (
    <div>
    <Typeahead
    placeholder="Type Text here..."
    className="inputTextBox"
    onFocus={() => this.props.resetArr(this.props.matches)}
    ref={(typeahead) => this.typeahead = typeahead}
    options={this.props.teams}
    id={1}
  />
   
  <button className="btn btn-info submitBtn" onClick={() => this.handleSubmit(this.typeahead.getInstance().getInput().value)}>Submit</button>
  </div>
    )}
  }

export default Searchbar;