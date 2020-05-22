import React, { useState } from "react";
import questionsData from "../util/questionsList";
import randomColor from "randomcolor";
import { shuffleArray, generateRandom } from "../util/helperFunctions";
import AddPlayer from "./players/AddPlayer";

function Question() {

    const [question, setQuestion] = useState("Generate question below!")
    const [playerToAns, setPlayerToAns] = useState(undefined)
    const [playerName, setPlayerName] = useState(undefined)
    const [playersList, setPlayersList] = useState([])
    const questionList = questionsData


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

    return (
        <div className="container">

            <div className="players-box">
                <h4 style={{ color: "#F0FFF0" }}>{playersList.length > 1 && playersList.length} Players</h4>
                <AddPlayer
                    playerName={playerName}
                    playersList={playersList}
                    setPlayerName={setPlayerName}
                    setPlayersList={setPlayersList}
                />
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