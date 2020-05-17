import React, { useState } from "react";
import PlayerList from "./PlayerList";

function AddPlayer(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.playerName.trim()) {
            if (props.playerName.length <= 19 ) {
                if (!props.playersList.includes(props.playerName.trim())) {
                    props.playersList.push(props.playerName.trim())
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
    } // end of handleSubmit()


    return (

        <div>
            <PlayerList playersList={props.playersList} />
            <form onSubmit={handleSubmit}>
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