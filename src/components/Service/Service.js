import React, { useEffect, useState } from 'react';
import University from '../University/University';
import './Service.css';

const Service = () => {
    const [universities, setUniversities] = useState([]);
    useEffect(() => {
        fetch('./universities.json')
            .then(res => res.json())
            .then(data => setUniversities(data));
    }, [])
    return (
        <div>

            <div className="service-container row">
                {
                    universities.map(university => <University
                        key={university.id}
                        university={university}
                    ></University>)
                }
            </div>

        </div>
    );
};

export default Service;