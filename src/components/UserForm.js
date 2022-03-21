import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const UserForm = ({ users, setUsers }) => {

    const [ user, setUser ] = useState('')
    const [ username, setUsername ] = useState('')

    const [ err, setErr ] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        //Validation
        if([user, username].includes('')){
            setErr(true)
        }else{
            setErr(false)
        }

        //User object
        const userObject = {
            id: uuidv4(),
            user, 
            username
        }

        setUsers([...users, userObject])
        
        //Reset form
        setUser('')
        setUsername('')
    }

    return(
        <>
            <form
                onSubmit = {handleSubmit}
            >

                {
                    err && (
                        <div><p>hay un error</p></div>
                        )
                }

                <label htmlFor = 'name'>Enter name</label> <br/>
                <input 
                    id = 'name'
                    placeholder = 'Name'
                    value = {user}
                    onChange = { e => setUser(e.target.value) }
                /> <br/>

                <label htmlFor = 'username'>Enter username</label> <br/>
                <input 
                    id = 'username'
                    placeholder = 'Username'
                    value = {username}
                    onChange = { e => setUsername(e.target.value) }
                /> <br/>
                
                <input 
                    type = 'submit'
                    value = 'Add user'
                />
            </form>
        </>
    )
}

export default UserForm