import React from 'react';

import './ApproveBox.css';

export const ApproveBox = props => {
    return (
        <div className='ApproveBox__shadow'>
            <div className="ApproveBox__box">
                <h1>Et tu, Brute?</h1>
                <h2>Are you sure you want to change the course of history?</h2>
                <button onClick={props.removeCaesar}>kill</button>
                <p>abandon</p>
            </div>
        </div>
    );
};