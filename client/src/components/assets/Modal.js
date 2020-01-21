import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let {id , children, fullBody}=this.props
    return (
      <div style={styles.modalClass} className="modal fade" id={id} tabindex="-1" role="document" 
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div  className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

let styles = {
  modalClass:{
    padding:0,
    height: "100%",
    width: "100%",
    overflowY: "none",
  }
}