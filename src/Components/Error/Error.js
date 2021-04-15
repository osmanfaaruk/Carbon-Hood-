import React from 'react';
import error from '../../Photos/Icons/error.svg';

const Error = () => {
    return (
        <div className="container" style={{textAlign:'center', color:'red'}}>
            <h1>404 Page not Found</h1>
            <img className="mt-5" src={error} alt=""/>
        </div>
    );
};

export default Error;