import React from 'react';
import { render } from 'react-dom';
import './style.css';
const About= () => {

    return(
    <div>
        <h1>About Webpack!</h1>
    </div>);

};

render(
    <About/>,
    document.getElementById("target")
);