import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='services'>
            <div className='text-center'>
                <h3 className='text-3xl my-3 font-bold text-orange-500'>Services</h3>
                <h1 className='text-5xl my-3 font-bold w-1/2 m-auto'>We are qualified & of experience in this field</h1>
                <p className='text-lg my-5 w-1/2 m-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-3 mx-auto gap-y-10 my-10 px-60'>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        props={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;