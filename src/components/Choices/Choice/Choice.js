import React from 'react';

const choice = (props) => {
    
    let assignedClasses = ['Choice'];

    if(props.id === props.userChoice){
        if(props.win) assignedClasses.push('Win');
        if(props.lose) assignedClasses.push('Lose');
        if(props.draw) assignedClasses.push('Draw');
    }


    return(
        <div className={assignedClasses.join(' ')} id={props.id} onClick={props.clicked}>
            <img src={props.img} id={props.id} alt={props.alt} />
        </div>
    );
}

export default choice;