import React from 'react';
import { Link } from "react-router-dom";
import './SingleUniver.css'

const SingleUniver = (props) => {
    const { name, rank, img, city, address, established, website } = props.singleUniversity
    return (
        <div className="single-uni">
            <img src={img} style={{ height: "450px", width: "960px", marginTop: "15px" }} alt="" />
            <h1>University Name: {name}</h1>
            <h2>Rank: {rank}</h2>
            <h3>City: {city}</h3>
            <h4>Address: {address}</h4>
            <h5>Established: {established}</h5>
            <a href={website}>Website</a>


        </div>
    );
};

export default SingleUniver;