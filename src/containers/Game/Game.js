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
        result: "Paper covers Rock. You win! 🔥",
        win: false,
        lose: false,
        draw: false
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
                this.winHandler(userChoice, compChoice);
                break;
            case 'rp':
            case 'sr':
            case 'ps':
                this.loseHandler(userChoice, compChoice);
                break;
            default:
                this.drawHandler(userChoice, compChoice);
        }
    }

    convertLetter = (letter) => {
        let word;
        switch(letter) {
            case 'r':
                word = "Rock";
                break;
            case 'p':
                word = "Paper";
                break;
            default: word = "Scissors";
        }
        return word;
    }

    winHandler = (userChoice, compChoice) => {
        let smallUser = '<sub><font size="3">user</font></sub>';
        let smallComp = '<sub><font size="3">comp</font></sub>';
        let userWord = `${this.convertLetter(userChoice)}${smallUser}`;
        let compWord = `${this.convertLetter(compChoice)}${smallComp}`;
        
        const newResult = `${userWord} beats ${compWord}.  You Win 🔥`
        this.setState({ 
            userScore: this.state.userScore + 1,
            result: newResult,
            win: true
         }, () => {
             setTimeout(() => this.setState({win: false}), 350);
         });
        console.log("USER WON!");
    }

    loseHandler = (userChoice, compChoice) => {
        let smallUser = '<sub><font size="3">user</font></sub>';
        let smallComp = '<sub><font size="3">comp</font></sub>';
        let userWord = `${this.convertLetter(userChoice)}${smallUser}`;
        let compWord = `${this.convertLetter(compChoice)}${smallComp}`;

        const newResult = `${userWord} loses to ${compWord}.  You Lost.. 💩`
        this.setState({
            compScore: this.state.compScore + 1,
            result: newResult,
            lose: true
        }, () => {
            setTimeout(() => this.setState({ lose: false }), 350);
        });
        console.log("COMP WON!");
    }

    drawHandler = (userChoice, compChoice) => {
        let smallUser = '<sub><font size="3">user</font></sub>';
        let smallComp = '<sub><font size="3">comp</font></sub>';
        let userWord = `${this.convertLetter(userChoice)}${smallUser}`;
        let compWord = `${this.convertLetter(compChoice)}${smallComp}`;

        const newResult = `${userWord} equals ${compWord}. It's a Draw 😐`
        this.setState({
            result: newResult,
            draw: true
        }, () => {
            setTimeout(() => this.setState({ draw: false }), 400);
        });
        console.log("ITS A DRAW");
    }


    render() {
        return (
            <>
                <ScoreBoard 
                    userScore={this.state.userScore} 
                    compScore={this.state.compScore}/>
                <Result content={this.state.result} />
                <Choices 
                    clicked={this.handleClick}
                    win={this.state.win}
                    lose={this.state.lose}
                    draw={this.state.draw}
                    userChoice={this.state.userChoice} />
                <p className="Message">Make your move!</p>
            </>
        )
    }
}

export default Game;