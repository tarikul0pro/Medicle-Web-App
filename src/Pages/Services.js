import React from 'react';
import Service from '../components/Service/Service';
import useAuth from '../hooks/useAuth';

const Services = () => {
    const {services} = useAuth()
    return (
        <div className="container">
            <h2 className="text-primary text-center">Our Services</h2>
            <div className="row">

         {
              services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>) 
        }
</div>

</div>
       
    );
};

export default Services;

