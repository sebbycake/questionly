import React, { useState } from "react";
import PlayerList from "./PlayerList";

function AddPlayer() {

    const [player, setPlayer] = useState("")
    
    const [playersList, setPlayersList] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (player.trim()) {
            if (!playersList.includes(player.trim())) {
                playersList.push(player)
                setPlayer("")
            } // inner if 
            else {
                alert(`${player} is already in the list!`)
            }
        } else {
            alert("Player's name cannot be empty!")
        }

        const updatedList = playersList

        return (
            setPlayersList(updatedList)
        )
    }


    return (

        <div>
            <PlayerList playersList={playersList} />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={player}
                    placeholder="Enter player's name"
                    onChange={(e) => setPlayer(e.target.value)}
                />
            </form>
        </div>
    )
}

export default AddPlayer