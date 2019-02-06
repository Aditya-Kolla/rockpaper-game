import React from 'react';

import rock from '../../images/rock.png';
import paper from '../../images/paper.png';
import scissor from '../../images/scissor.png';

const choices = (props) => (
    <div className="Choices">
        <div className="Choice">
            <img src={rock} alt="Rock"/>
        </div>
        <div className="Choice">
            <img src={paper} alt="Paper"/>
        </div>
        <div className="Choice">
            <img src={scissor} alt="Scissor"/>
        </div>
    </div>
);

export default choices;