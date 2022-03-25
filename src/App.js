import React from "react";

import {Box} from "./components/Box";
import {caesars} from "./data/caesars";

import './App.css';
import {BackgroundVideo} from "./components/BackgroundVideo";

export const App = () => {
    return <>
        <BackgroundVideo/>
        <h1 className='App__main-title'>Julio-Claudian dynasty (27 BC – AD 68):</h1>
        <Box caesarsList={caesars}/>
    </>
};


