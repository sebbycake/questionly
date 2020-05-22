import React from 'react';

function Player(props) {
    return (
        <div className="player">
            {props.name}

            <span class="delete-player" onClick={() => props.removePlayerHandler(props.id)}>
                <i class="material-icons"  >close</i>
            </span>

        </div>
    )
}

export default Player

