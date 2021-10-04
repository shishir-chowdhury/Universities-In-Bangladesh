import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (





        <div className="container my-5">

            <footer className="bg-dark text-center text-white">

                <div className="container p-4 pb-0">

                    <section className="footer mb-4">
                        <Link className="footer-nav" to="/Home">Home</Link>
                        <Link className="footer-nav" to="/Service">Service</Link>
                        <Link className="footer-nav" to="/About">About us</Link>
                        <Link className="footer-nav" to="/Contact">Contact Us</Link>
                    </section>

                </div>
                <div className="copy-right">
                    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                        © 2020 Copyright:
                        <a className="website-link text-white" href="#">Website Link</a>
                    </div>
                </div>

            </footer>

        </div>




    );
};

export default Footer;