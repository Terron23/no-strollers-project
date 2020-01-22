

import React, {Component} from "react";
import ToggleButton from 'react-toggle-button'

class Radio extends Component  {

    state={
        value:""
    }
    render(){
return (
    <ToggleButton
    inactiveLabel={"Off"}
  activeLabel={"Edit"}
    value={ this.state.value || false }
    onToggle={(value) => {
      this.setState({
        value: !value,
      })
    }} />

   
    );
  
}
}
export default Radio;
