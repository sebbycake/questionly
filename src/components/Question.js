import React, { useState } from "react";
import questionsData from "../util/questionsList";
import randomColor from "randomcolor";
import { shuffleArray, generateRandom } from "../util/helperFunctions";
import PlayerList from "./players/PlayerList";

function Question() {

    const [question, setQuestion] = useState("Generate question below!")
    const [playerToAns, setPlayerToAns] = useState(undefined)
    const [playerName, setPlayerName] = useState(undefined)
    const [playersList, setPlayersList] = useState([])
    const questionList = questionsData

    const handleSubmit = (event) => {
        event.preventDefault();
        if (playerName.trim()) {
            if (!playersList.includes(playerName.trim())) {
                playersList.push(playerName.trim())
                setPlayerName("")
            } // inner if 
            else {
                alert(`${playerName.trim()} is already in the list!`)
            }
        } else {
            alert("Player's name cannot be empty!")
        }

        const updatedList = playersList

        return (
            setPlayersList(updatedList)
        )
    } // end of handleSubmit()

    // ---------------------------------------------

    const generateQuestionPlayer = () => {
        // select random player
        let randomPlayer = generateRandom(playersList)
        // select random qn
        let randomQn = generateRandom(shuffleArray(questionList))
        return (
            setPlayerToAns(randomPlayer),
            setQuestion(randomQn)
        )
    } // end of generateQuestionPlayer()

    // ---------------------------------------------

  
    const playerAns = playerToAns !== undefined && `Player: ${playerToAns}`

    // ---------------------------------------------


    return (
        <div className="container">
            <div className="players-box">
                <h4 style={{ color: "#F0FFF0" }}>Players</h4>
                <PlayerList playersList={playersList} />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={playerName}
                        placeholder="Enter player's name"
                        onChange={(e) => setPlayerName(e.target.value)}
                    />
                </form>
            </div>
            <div className="question-box">
                <p class={playerToAns !== undefined && "playerToAns"}>{playerAns}</p>
                <p style={{ color: randomColor() }}>{question}</p>
                <button className="glow-btn" onClick={generateQuestionPlayer}>Generate</button>

            </div>
        </div>  // end of container class
    ) // end of return()

}

export default Question