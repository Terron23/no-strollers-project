import React , {Component} from 'react';
import axios from 'axios'
import Modal from "../../../Reusable/Modal/Modal";

export default class Email extends Component{
   constructor(props){
       super(props);

       this.state={
           error:""
       }
   }

handleSubmitEmail =(e)=>{

 

    e.preventDefault()
    let email = e.target.emailSubscription.value;
    
    axios.post(`/api/v2/subscribe`,
    {
        'email_address': email,
        'status': 'subscribed',
        
        }).then(res=>this.setState({error:res.data}))

    }
    render(){
   
let {setShow} = this.props;
        return(
<Modal show={setShow}>
            <div className="col-8 offset-2">
            <div className="single-footer-widget mb-80">
        <p className="success">{this.state.error}</p>
              <h5 className="widget-title">Subscribe</h5>
              <span>
                Enter your email and stay up to date with 
                news about our launch dates and other offers.
              </span>

              <form
              onSubmit={this.handleSubmitEmail}
                className="nl-form"
                
              >
                <input
                  type="email"
                  name="emailSubscription"
                  className="form-control"
                  placeholder="Enter your email..."
                  required
                />
              
               <button type="submit">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          </Modal>
        )
    }
}