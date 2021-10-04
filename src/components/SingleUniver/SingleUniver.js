import React from 'react';
import { Link } from "react-router-dom";

const SingleUniver = (props) => {
    const { name, rank, img, city, address, established, website } = props.singleUniversity
    return (
        <div>
            <img src={img} style={{ height: "450px", width: "700px" }} alt="" />
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