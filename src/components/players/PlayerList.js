import React from "react";
import Player from "./Player";

function PlayerList(props) {
  
    const playersArray = props.playersList.length > 0 && props.playersList.map(
        player => <Player name={player} />
    )
    
    return (
        <div>
            {playersArray}
        </div>
    )
}

export default PlayerList