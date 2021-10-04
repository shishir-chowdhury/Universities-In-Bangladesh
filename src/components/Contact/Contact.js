import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Enter Your Email Address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Enter Your Massage</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
                <button className="btn btn-success">Submit</button>
            </div>
        </div>
    );
};

export default Contact;