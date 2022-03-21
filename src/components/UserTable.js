import React from 'react';
import UserRow from './UserRow';

const UserTable = ({users, deteleUser, setUser}) => {

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
                        users.map( userElement => (
                            <UserRow 
                            userElement = {userElement}
                            deteleUser = {deteleUser}
                            setUser = {setUser}
                        />
                        )
                    ) : (
                        <td colSpan = "3">No users</td>
                    )
                }
            
            </tbody>
        </>
    )
}

export default UserTable