import React , {Component} from "react";
import {Alert} from "react-bootstrap"
import './css/alert.css'


class AlertMessage extends Component {
    constructor(props){
        super(props);
        this.state={
            text:"",
            hideDiv: "show"
        }
    }
    handleClose=()=>{
        this.setState({hideDiv: "d-none"})
    }

render(){
let {alertText, variant, hide, handleClose=this.handleClose} = this.props;
let {hideDiv} = this.state;
return (
    <Alert variant={variant} className={!hide? "d-none": "show"} >
       {alertText} <span onClick={handleClose} 
       className="close-btn pull-right">x</span>
    </Alert>
   
    );
  
}
}
export default AlertMessage;
