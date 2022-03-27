import React, {useState} from 'react';

import './Card.css';

export const Card = props => {
    const [cardContent, setCardContent] = useState('main')

    const showBioParagraph = e => {
        const bioParagraph = e.target.parentNode.querySelector('.Card__img-bio');
        bioParagraph.style.display = getComputedStyle(bioParagraph).display !== 'none' ? 'none' : 'block';
    }

    const flipCard = e => {
        e.target.parentNode.classList.add('fadeOut')
        setCardContent(prev => prev === 'main' ? 'bio' : 'main');
    }

    return (
        <div className={cardContent === 'main' ? 'Card' : 'Card Card--red'}>
            <li>
                {cardContent === 'main' &&
                    <div className='Card__info-main'>
                        <p className='Card__title'>{props.title}</p>
                        <div className="Card__torso">
                            <img
                                className='Card__img'
                                src={props.picture}
                                alt={'Torso of ' + props.fullTitle}
                                onMouseOver={showBioParagraph}
                                onMouseLeave={showBioParagraph}
                                onClick={flipCard}
                                // onClick={() => props.onImageClick(props.fullTitle)}
                            />
                            <p className="Card__img-bio">bio</p>
                        </div>
                        <p className='Card__full_title'>{props.fullTitle}</p>
                        <p className='Card__reign'>{props.reign}</p>
                    </div>
                }

                {cardContent === 'bio' &&
                    <div className="Card__bio-main">
                        <img src='Images/svg/eagle.svg' className='Card__bio-background-image' alt='test'/>
                        <p className='Card__bio-title'>{props.fullTitle}</p>
                        <p className='Card__bio-reign'>{props.reign}</p>
                        <p className='Card__bio-content'>{props.bio}</p>
                        <p className='Card__bio-back'
                           onClick={flipCard}>back</p>
                    </div>
                }
            </li>
        </div>
    );
}