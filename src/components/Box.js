import React, {useState} from 'react';

import './Box.css';
import {Card} from './Card';
import {ApproveBox} from './ApproveBox';
import {playSound} from '../utils/playSound';


//# audio:
const hitSound = new Audio('Audio/hit.wav');
hitSound.load();

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
        playSound(hitSound);
        setCaesarsList(prev => prev.filter(el => el.full_title !== caesarToDelete));
        setCaesarToDelete('');
        setShowApproveBox(false);
    }

//  #return:
    return <>
        {showApproveBox === true && <ApproveBox
            removeCaesar={removeCaesarHandler}
            showApproveBox={showApproveBoxHandler}/>
        }
        <div className="Box">
            <div className="Box__content">
                <ul className="Box__users-list">
                    {caesarsList.map(el => (
                        <Card
                            key={el.full_title}
                            title={el.title}
                            fullTitle={el.full_title}
                            reign={el.reign}
                            picture={el.picture}
                            bio={el.bio}
                            showApproveBox={showApproveBoxHandler}
                        />
                    ))}
                    <img className="Box__img" src="Images/svg/eagle_footer.svg" alt="eagle logo"/>
                </ul>
            </div>
        </div>
    </>
}