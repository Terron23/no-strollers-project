import React , {Component} from 'react';


export default class Social extends Component{
    render(){

let {link, icon="facebook"} = this.props;
        return(
        
            <a href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa fa-${icon}`}></i>
            </a>
           
       
        )
    }
}