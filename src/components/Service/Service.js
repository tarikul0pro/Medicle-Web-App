 import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {serviceName, id, imgUrl, discription}= service;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="service">
           <img className="image-size" src={imgUrl} alt="" />
             <h5>{serviceName}</h5>
              <p>{discription}</p>
              <Link to={`/hospitaldetails/${id}`}><button type="button" class="btn btn-info">Details</button></Link>
          </div>
     </div>
    );
};

export default Service; 