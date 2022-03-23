import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const UserForm = ({ users, setUsers, user }) => {

    const [ client, setClient ] = useState('')
    const [ username, setUsername ] = useState('')

    const [ err, setErr ] = useState(false)
    
    //Este codigo se ejecutara solamente si hay algo dentro de user
    useEffect( () => {
        if( Object.keys(user).length > 0 ){
            setClient(user.client)
            setUsername(user.username)
        }
    },[user] )

    const handleSubmit = e => {
        e.preventDefault()

        //Validation
        if([client, username].includes('')){
            setErr(true)
        }else{
            setErr(false)
        }

        //User object
        const userObject = {
            client, 
            username
        }

        //Verificando si estamos registrando o editando
        if( user.id ){
            //Editando el registro
            userObject.id = user.id //El ID que tenia en el registro previo lo asigno al objeto nuevo
            console.log(userObject)
            console.log(user)

            //Iteramos sobre pacientes para identificar que registro editamos
            const updatedUsers = users.map( userState =>
                userState.id === user.id
                ? userObject //Retornamos el objeto actualizado
                : userState //Caso contrario retorno el objeto actual
             )
             setUsers(updatedUsers)

             console.log(updatedUsers)

        }else{
            //Nuevo registro
            userObject.id = uuidv4() //Agrego ID al objeto
            setUsers([...users, userObject])
        }
        
        //Reset form
        setClient('')
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
                    value = {client}
                    onChange = { e => setClient(e.target.value) }
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
                    value = { user.id ? 'Edit user' : 'Add user' }
                />
            </form>
        </>
    )
}

export default UserForm