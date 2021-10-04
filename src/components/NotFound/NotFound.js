import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className="not-found">
                <h1>404</h1>
            </div>
            <p>Oops! Something is wrong.</p>
            <a className="button" href="/home"><i className="icon-home"></i> Go back in initial page, is better.</a>
        </div>
    );
};

export default NotFound;