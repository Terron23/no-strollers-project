import React, { Component } from "react";
 import { Modal , Button} from "react-bootstrap";





class MobileBook extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    let { id , children, studioName, price, handleClose, handleShow, setShow} = this.props;
 
    return (
      <div className="col-12 fixed-bottom" 
      style={{backgroundColor: "#0e2737", padding:"20px"}} >
       <Modal show={setShow}
       dialogClassName="modal-full modal-content"
      bsClass="my-modal">
          <Modal.Header >
          <a className="modal-close ml-auto" onClick={handleClose}>
              X
            </a>
          </Modal.Header>
          <Modal.Body>


          {children}
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary modal-close-button" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="mobile-form-pop-up">
     <span className="d-flex justify-content-center pop-up-text">{studioName} ${price}.00 per hour</span>
      <a className="btn btn-block roberto-btn" onClick={handleShow}>Reserve Studio Time</a>
     </div>
      </div>
    );
  }
}

export default MobileBook;
