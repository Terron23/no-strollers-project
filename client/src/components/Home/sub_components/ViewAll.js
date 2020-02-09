import React from 'react'
import { Link } from "react-router-dom";
import '../css/btn.css'


const ViewAll =()=>(  
   
    <div className="text-center col-md-12 view-all-btn">
    <Link to={`/search-studio/`} className="btn roberto-btn btn-1 text-center">
    View All <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </Link>
    </div>
    )

    export default ViewAll