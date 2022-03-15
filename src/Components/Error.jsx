import React from 'react';

function Error({msg}){
    return(
        <div className = "bg-red-800 text-center p-3 text-white">
            <p>{msg}</p>
        </div>
    )
}

export default Error