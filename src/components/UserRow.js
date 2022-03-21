import React from 'react';

const UserRow = ({element, deteleUser, setEditing, editRow}) => {

    const { user, username, id } = element

    return(
        <>
        <tr>
            <td>{id}</td>
            <td>{user}</td>
            <td>{username}</td>
            <button 
                type = ""
                onClick = { () => editRow(id, user, username) }
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