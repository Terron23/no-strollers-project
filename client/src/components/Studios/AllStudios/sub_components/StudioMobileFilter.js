import React, { Component } from "react";
 import { Modal , Button} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";




class StudioMobileFilter extends Component {
  


  render() {
    let {  children,  handleClose, handleShow, setShow} = this.props;
    return (
     <center> 
      <div className="col-12" 
      style={{backgroundColor: "#0e2737", padding:"20px"}} >
       <Modal show={setShow} onHide={handleClose} 
       dialogClassName="modal-full modal-content"
      bsClass="my-modal">
          <Modal.Header >
          <a className="ml-auto modal-close" onClick={handleClose}>
             X
            </a>
          </Modal.Header>
          <Modal.Body className="center-modal-body">{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary modal-close-button" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
       
      <a className="btn roberto-btn" onClick={handleShow}>Search</a>
      </div>
      </center>
    );
  }
}

export default StudioMobileFilter;
