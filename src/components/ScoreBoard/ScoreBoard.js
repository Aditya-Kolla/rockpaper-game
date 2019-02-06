import React from 'react';

const scoreBoard = (props) => (
    <div className="ScoreBoard">
        <div id="user-badge" className="Badge">user</div>
        <div id="comp-badge" className="Badge">comp</div>
        <span id="user-score">{props.userScore}</span>: <span id="comp-score">{props.compScore}</span>
    </div>
);

export default scoreBoard;