import React from 'react';
import UserRow from './UserRow';

const UserTable = () => {
    return(
        <>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>User name</th>
                    <th>Actions</th>
                </tr>

                <UserRow />
            
            </tbody>
        </>
    )
}

export default UserTable