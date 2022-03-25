import React, {useState} from 'react';

import './Box.css';
import {Card} from "./Card";
import {ApproveBox} from "./ApproveBox";

export const Box = props => {
//  #state:
    const [caesarsList, setCaesarsList] = useState(props.caesarsList);
    const [showApproveBox, setShowApproveBox] = useState(false);
    const [caesarToDelete, setCaesarToDelete] = useState('');

//  #handlers:
    const showApproveBoxHandler = caesar => {
        setCaesarToDelete(caesar);
        setShowApproveBox(prev => prev === false)
    }

    const removeCaesarHandler = () => {
        setCaesarsList(prev => prev.filter(el => el.full_title !== caesarToDelete));
        setCaesarToDelete('');
        setShowApproveBox(false);
    }

    return <>
        {showApproveBox === true && <ApproveBox removeCaesar={removeCaesarHandler}/>}
        <div className='Box'>
            <div className="Box__content">
                <ul className='Box__users-list'>
                    {caesarsList.map(el => (
                        <Card
                            key={el.full_title}
                            title={el.title}
                            fullTitle={el.full_title}
                            reign={el.reign}
                            picture={el.picture}
                            bio={el.bio}
                            onImageClick={showApproveBoxHandler}
                        />
                    ))}
                </ul>
            </div>
        </div>
    </>
}