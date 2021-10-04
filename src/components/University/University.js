import React from 'react';
import './University.css';

const University = (props) => {
    const { name, id, img, city, address, established } = props.university;
    return (
        <div className="container-body col-md-4 mb-3 mt-3">
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="uni-img card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="">Name: {name}</h5>
                    <p className="card-text"></p>
                    <p>City: {city}</p>
                    <p>Address: {address}</p>
                    <p>Established: {established}</p>
                    <a href="#" className="Website">Website</a>
                </div>
            </div>
        </div>
    );
};

export default University;