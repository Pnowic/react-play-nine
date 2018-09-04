import React from 'react';
import ReactDOM from 'react-dom';


import Game from './Game.jsx';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Game />,
        document.getElementById('root')
    );
});
