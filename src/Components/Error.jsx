import React from 'react';

function Error({children}){
    return(
        <div className = "bg-red-800 text-center p-3 text-white">
            {children}
        </div>
    )
}

export default Error