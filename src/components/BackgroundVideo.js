import React from 'react';

import './BackgroundVideo.css';

export const BackgroundVideo = props => {
    return <>
        <div className="BackgroundVideo__video-shadow"/>
        <video className='BackgroundVideo__video' src="Videos/rome_view.mp4" autoPlay={true} loop={true} muted={true}/>
    </>
}