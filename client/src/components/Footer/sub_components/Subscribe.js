import React , {Component} from 'react';
import axios from 'axios'

export default class Subscribe extends Component{
    
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
        // e670080209400d0a1824fed57f9151a7-us4
        // curl --request GET \
        // --url 'https://us4.api.mailchimp.com/3.0/' \
        // --user 'anystring:e670080209400d0a1824fed57f9151a7-us4'

        return(

            <div className="col-12 col-sm-8 col-lg-4">
            <div className="single-footer-widget mb-80">
        <p className="success">{this.state.error}</p>
              <h5 className="widget-title">Subscribe to Our Newsletter</h5>
              <span>
                Subscribe to our newsletter and recieve notifications
                about new updates.
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