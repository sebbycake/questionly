import React, { Component } from "react";
import questionsData from "../util/questionsList";
import randomColor from "randomcolor";
import shuffleArray from "../util/Shuffle";
import Player from './Player';

class Question extends Component {

    constructor() {
        super()
        this.state = {
            question: "Generate question below!",
            playerToAns: undefined,
            questionList: questionsData,
            playerName: "",
            playersList: [],
        }
        this.generateQuestionPlayer = this.generateQuestionPlayer.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    } // end of constructor


    // helper method to generate random object
    generateRandom(array) {
        const arrayLength = array.length
        let randomInt = null
        // if the array is not empty
        if (arrayLength > 0 ) {
            randomInt = Math.floor(Math.random() * arrayLength)
        }
        let randomObj = array[randomInt]
        return randomObj
    } // end of generateRandom()

    generateQuestionPlayer() {
        // select random qn
        let randomQn = this.generateRandom(shuffleArray(this.state.questionList))
        // select random player
        let randomPlayer = this.generateRandom(this.state.playersList)
        // update state
        this.setState({
            question: randomQn,
            playerToAns: randomPlayer,
        })
    } // end of generateQuestion()

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })

    } // end of handleChange()

    handleSubmit(event) {
        event.preventDefault()
        this.setState(prevState => {

            // if it has a value
            if (prevState.playerName.trim()) {

                if (!prevState.playersList.includes(prevState.playerName.trim())) {
                    prevState.playersList.push(prevState.playerName)
                    // to make input text box empty
                    prevState.playerName = ""
                } else {
                    alert("You have duplicate player in your list!")
                } // checking for duplicate playerName

            } else { // doesnt have a value
                alert("Cannot be an empty name!")
            } // checking for empty string

            const updatedList = prevState.playersList

            // the return statement is most impt. or else
            // prev element will only be updated when submitted again w new element
            return {
                playersList: updatedList
            }

        })

    } // end of handleSubmit()


    render() {
    
        const playersArray = this.state.playersList.map(player =>
            // render Player component for each player
            <Player name={player} />
        )

        const playerToAns = this.state.playerToAns !== undefined && `Player: ${this.state.playerToAns}`    

        return (

            <div className="container">

                <div className="players-box">
                    <h4 style={{color:"#F0FFF0"}}>Players</h4>
                    {playersArray}
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="playerName"
                            value={this.state.playerName}
                            placeholder="Enter player's name"
                            onChange={this.handleChange}
                        />
                    </form>
                </div> 

                <div className="question-box">
                    <p>{playerToAns}</p>
                    <p style={{ color: randomColor() }}>{this.state.question}</p>
                    <button className="glow-btn" onClick={this.generateQuestionPlayer}>Generate</button>
                    
                </div>

            </div>  // end of container class
            
        ) // end of return()

    } // end of render()

} // end of class


export default Question