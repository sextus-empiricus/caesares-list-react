import React from 'react';

import './ApproveBox.css';

export const ApproveBox = props => {
    return (
        <div className='ApproveBox__shadow'>
            <div className="ApproveBox__box">
                <h1 className='ApproveBox__title'>Et tu, Brute?</h1>
                <h2 className='ApproveBox__title-2'>Are you sure you want to change the course of history?</h2>
                <button className='ApproveBox__button'
                        onClick={props.removeCaesar}>kill</button>
                <p className='ApproveBox__abandon'
                onClick={props.showApproveBox}>abandon</p>
            </div>
        </div>
    );
};