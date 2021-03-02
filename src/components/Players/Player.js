import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';
const Player = (props) => {
    const {name, position, salary, img} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className = "container ">
            <div className = "row card">
                <div className = "col-md-12 ">
                <img src={img} alt=""/>
                <h4>Player Name: {name}</h4>
                <p>Position:{position}</p>
                <p>Salary: ${salary} </p>
                <button className = "btn btn-primary" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} />Add Player</button>
                </div>
        </div>
            </div>
    );
};

export default Player;