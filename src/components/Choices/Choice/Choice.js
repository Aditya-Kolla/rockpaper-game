import React from 'react';

const choice = (props) => (
    <div className="Choice" id={props.id} onClick={props.clicked}>
        <img src={props.img} id={props.id} alt={props.alt} />
    </div>
);

export default choice;