import React from 'react';

const PlayButton = (props) => {

    return (
        <button
            type = { props.type }
            style = { props.style }
            className = { props.className } >
            { props.data.userIndex }
        </button>
    )
}
export default PlayButton