import React from 'react';

import Choice from './Choice/Choice'
import rock from '../../images/rock.png';
import paper from '../../images/paper.png';
import scissors from '../../images/scissors.png';

const choices = (props) => (
    <div className="Choices">
        <Choice 
            id="r" 
            img={rock} 
            alt="Rock" 
            userChoice={props.userChoice}
            win={props.win}
            lose={props.lose}
            draw={props.draw}
            clicked={(e) => props.clicked(e)} />
        <Choice 
            id="p" 
            img={paper} 
            alt="Paper" 
            userChoice={props.userChoice}
            win={props.win}
            lose={props.lose}
            draw={props.draw}
            clicked={(e) => props.clicked(e)} />
        <Choice 
            id="s" 
            img={scissors} 
            alt="Scissors"
            userChoice={props.userChoice}
            win={props.win}
            lose={props.lose}
            draw={props.draw} 
            clicked={(e) => props.clicked(e)} />
        
    </div>
);

export default choices;