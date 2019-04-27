import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead'; 
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './Searchbar.css'


class Searchbar extends React.Component {
  constructor(props) {
    super()
    this.typeahead = React.createRef();
}


handleSubmit = (textValue) => {
        this.props.setMatchInfo(this.props.matches, textValue)
  }


  render(){
  return (
    <>
    <Typeahead
    className="inputTextBox"
    onFocus={() => this.props.resetArr(this.props.matches)}
    ref={(typeahead) => this.typeahead = typeahead}
    options={this.props.teams}
    id={1}
  />
   
  <button className="btn btn-info submitBtn" onClick={() => this.handleSubmit(this.typeahead.getInstance().getInput().value)}>Submit</button>
  </>
    )}
  }

export default Searchbar;