import React from 'react';
import UserRow from './UserRow';

const UserTable = ({users, deteleUser, setEditing}) => {

    return(
        <>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User name</th>
                    <th>Actions</th>
                </tr>

                {
                    users.length > 0 ?
                        users.map( element => (
                            <UserRow 
                            element = {element}
                            deteleUser = {deteleUser}
                            setEditing = {setEditing}
                        />
                        )
                    ) : (
                        <td colspan = "3">No users</td>
                    )
                }
            
            </tbody>
        </>
    )
}

export default UserTable