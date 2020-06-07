import React , {Component} from 'react';
import axios from 'axios'
import Modal from "../../../Reusable/Modal/Modal";

export default class Email extends Component{
    
    state={
        signedUp: ""
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
   

        return(

            <div className="col-12">
            <div className="single-footer-widget">
        <p className="success">{this.state.error}</p>
       
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
      
        )
    }
}