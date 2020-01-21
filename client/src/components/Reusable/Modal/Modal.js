import React, { Component } from 'react';
import { Modal , Button} from "react-bootstrap";


class  ModalMobile extends Component{
  
   render(){
      let {handleClose, handleShow, children, show}=this.props;
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
   
    );
   }
  }
  export default ModalMobile;