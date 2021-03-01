import React from 'react';

const Player = (props) => {
    const {name, position, salary, img} = props.player;
    const imageStyle = {height:"200px"};
    const playerStyle = {margin:"10px", marginTop:"10px"}
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div style = {playerStyle}>
            <img style = {imageStyle} src={img} alt=""/>
            <h4>Player Name: {name}</h4>
            <p>Position:{position}</p>
            <p>Salary: ${salary} </p>
            <button onClick={() => handleAddPlayer(props.player)}>Add Player</button>
        </div>
    );
};

export default Player;