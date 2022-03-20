import React from 'react';
import UserRow from './UserRow';

const UserTable = ({users}) => {
    return(
        <>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>User name</th>
                    <th>Actions</th>
                </tr>

                {
                    users.map( element => (
                        <UserRow 
                            element = {element}
                        />
                        )
                    )
                   //console.log(users)
                }
            
            </tbody>
        </>
    )
}

export default UserTable