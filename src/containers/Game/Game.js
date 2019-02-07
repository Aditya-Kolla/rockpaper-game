import React, { Component } from 'react';

import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import Result from '../../components/Result/Result';
import Choices from '../../components/Choices/Choices';

class Game extends Component {

    state = {
        userScore: 0,
        compScore: 0,
        userChoice : null,
        compChoice : null,
    }

    handleClick = (e) => {
        
        this.setState({userChoice: e.target.id}, () => {
            this.compChoiceHandler();
        });
    }

    compChoiceHandler = () => {
        const options = ['r', 'p', 's'];
        let index = Math.floor(Math.random() * 3);
        this.setState({ compChoice: options[index]}, () => {
            this.gameHandler();
        });
    }

    gameHandler = () => {
        const userChoice = this.state.userChoice;
        const compChoice = this.state.compChoice;
        switch(userChoice+compChoice){
            case 'rs':
            case 'sp':
            case 'pr': 
                this.setState({ userScore: this.state.userScore + 1 });
                console.log("USER WON!");
                break;
            case 'rp':
            case 'sr':
            case 'ps':
                this.setState({ compScore: this.state.compScore + 1 });
                console.log("USER LOST!");
                break;
            default:
                console.log("ITS A DRAWW");
        }
        this.resultHandler();
    }

    resultHandler = () => {
        const userChoice = this.state.userChoice;
        const compChoice = this.state.compChoice;
    }

    render() {
        return (
            <>
                <ScoreBoard 
                    userScore={this.state.userScore} 
                    compScore={this.state.compScore}/>
                <Result />
                <Choices clicked={this.handleClick}/>
                <p className="Message">Make your move!</p>
            </>
        )
    }
}

export default Game;