import React, { Component } from 'react';
import { Modal , Button} from "react-bootstrap";


class  ModalMobile extends Component{
  constructor(props){
    super(props);

    this.state ={
      show:this.props.show
    }
  }

close =()=>{
  alert(this.state.show)
   this.setState({show:false})
 }
  
   render(){
      let {handleClose = this.close, handleShow, children, show}=this.props;
    return (
        <Modal show={show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Subscribe</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
   
    );
   }
  }
  export default ModalMobile;