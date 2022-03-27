import React, {useState} from 'react';

import './Card.css';
import {playSound} from '../utils/playSound';

//  #audio:
const coinsSound = new Audio('Audio/coins.wav');
const doorSound = new Audio('Audio/door.wav');
coinsSound.load();
doorSound.load();

export const Card = props => {
//  #states:
    const [cardContent, setCardContent] = useState('main')
//  #handlers:
    const showBioParagraph = e => {
        const bioParagraph = e.target.parentNode.querySelector('.Card__img-bio');
        bioParagraph.style.display = getComputedStyle(bioParagraph).display !== 'none' ? 'none' : 'block';
    }

    const flipCard = e => {
        playSound(coinsSound);
        e.target.parentNode.classList.add('fadeOut')
        setCardContent(prev => prev === 'main' ? 'bio' : 'main');
    }
//  #return:
    return (
        <div className={cardContent === 'main' ? 'Card' : 'Card Card--red'}>
            <li>
                {cardContent === 'main' &&
                    <div className="Card__info-main">
                        <p className="Card__title">{props.title}</p>
                        <div className="Card__torso">
                            <img
                                className="Card__img"
                                src={props.picture}
                                alt={'Torso of ' + props.fullTitle}
                                onMouseOver={showBioParagraph}
                                onMouseLeave={showBioParagraph}
                                onClick={flipCard}
                            />
                            <p className="Card__img-bio">bio</p>
                        </div>
                        <p className="Card__full_title">{props.fullTitle}</p>
                        <p className="Card__reign"
                           onClick={() => {
                               playSound(doorSound);
                               props.showApproveBox(props.fullTitle)
                           }}>{props.reign}</p>
                    </div>
                }

                {cardContent === 'bio' &&
                    <div className="Card__bio-main">
                        <img src="Images/svg/eagle.svg" className="Card__bio-background-image" alt="test"/>
                        <p className="Card__bio-title">{props.fullTitle}</p>
                        <p className="Card__bio-reign">{props.reign}</p>
                        <p className="Card__bio-content">{props.bio}</p>
                        <p className="Card__bio-back"
                           onClick={flipCard}>back</p>
                    </div>
                }
            </li>
        </div>
    );
}