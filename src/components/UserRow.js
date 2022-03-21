import React from 'react';

const UserRow = ({userElement, deteleUser, setUser}) => {

    const { user, username, id } = userElement

    return(
        <>
        <tr>
            <td>{id}</td>
            <td>{user}</td>
            <td>{username}</td>
            <button 
                type = ""
                onClick = { () => setUser(userElement) }
            >Edit</button>
            <button 
                type = ""
                onClick = { () => deteleUser(id) }
            >Delete</button>
        </tr>
        </>
    )
}

export default UserRow