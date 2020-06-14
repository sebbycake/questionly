import React from "react";
import PlayerList from "./PlayerList";

function AddPlayer(props) {

    const addPlayer = (event) => {
        event.preventDefault();
        if (props.playerName.trim()) {
            if (props.playerName.length <= 19) {
                // if player doesn't exists in the array
                let playerName = props.playerName.trim().toLowerCase();
                if (!props.playersList.find(player => player.name === playerName)) {

                    props.playersList.push(
                        {
                            id: Math.floor(Math.random() * 10000000000000000000000000000000),
                            name: props.playerName.trim()
                        }
                    )
                    props.setPlayerName("")
                } // inner if 
                else {
                    alert(`${props.playerName.trim()} is already in the list!`)
                }
            } else {
                alert("Player's name is too long!")
            }
        } else {
            alert("Player's name cannot be empty!")
        }

        const updatedList = props.playersList

        return (
            props.setPlayersList(updatedList)
        )
    } // end of addPlayer()


    const removePlayer = (player_id) => {
        const updatedPlayers = props.playersList.filter(
            player => player.id !== player_id
        )
        return props.setPlayersList(updatedPlayers)
    }


    return (

        <div>
            <PlayerList playersList={props.playersList} removePlayerHandler={removePlayer}/>
            <form onSubmit={addPlayer}>
                <input
                    type="text"
                    value={props.playerName}
                    placeholder="Enter player's name"
                    onChange={(e) => props.setPlayerName(e.target.value)}
                />
            </form>
        </div>
    )
}

export default AddPlayer