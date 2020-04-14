import React, { Component } from "react";
import questionsData from "./questionsList";
import randomColor from "randomcolor";
import shuffleArray from "./Shuffle";

class Question extends Component {

    constructor() {
        super()
        this.state = {
            question: "Generate question below!",
            playerToAns: "None",
            questionList: questionsData,
            playerName: "",
            playersList: [],
            addPlayers: false,
        }
        this.generateQuestion = this.generateQuestion.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    } // end of constructor

    generateQuestion() {

        // select random qn
        shuffleArray(this.state.questionList)
        const questionListLength = this.state.questionList.length
        let randomInt = Math.floor(Math.random() * questionListLength)
        let randomQn = this.state.questionList[randomInt]

        // choose random player to ans qn
        const playerListLength = this.state.playersList.length
        let randomPlayer = this.state.playerToAns
        if (playerListLength !== 0) {
            let randomPlayerInt = Math.floor(Math.random() * playerListLength)
            randomPlayer = this.state.playersList[randomPlayerInt]
        }
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
            <div className="player" >{player}</div>
        )

        // const playerToAns = this.state.playerToAns !== "None" ? `Player: ${this.state.playerToAns}` : ""    
        const playerToAns = this.state.playerToAns !== "None" && `Player: ${this.state.playerToAns}`    

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
                    <button className="glow-btn" onClick={this.generateQuestion}>Generate</button>
                </div>

            </div>  // end of container class
            
        ) // end of return()

    } // end of render()

} // end of class


export default Question