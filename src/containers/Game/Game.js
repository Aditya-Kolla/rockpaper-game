import React, { Component } from 'react';

import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import Result from '../../components/Result/Result';
import Choices from '../../components/Choices/Choices';

class Game extends Component {

    state = {
        userScore: 0,
        compScore: 0,
    }

    render() {
        return (
            <>
                <ScoreBoard 
                    userScore={this.state.userScore} 
                    compScore={this.state.compScore}/>
                <Result />
                <Choices />
                <p className="Message">Make your move!</p>
            </>
        )
    }
}

export default Game;