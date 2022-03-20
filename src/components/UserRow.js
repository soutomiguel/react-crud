import React from 'react';

const UserRow = ({element}) => {

    console.log(element)

    const { user, username } = element

    return(
        <>
        <tr>
            <td>{user}</td>
            <td>{username}</td>
            <button type = "">Edit</button>
            <button type = "">Delete</button>
        </tr>
        </>
    )
}

export default UserRow