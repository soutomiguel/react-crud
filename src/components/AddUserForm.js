import React, {useState} from 'react';

const AddUserForm = () => {

    const [ user, setUser ] = useState('')
    const [ username, setUsername ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        //Validation
        if([user, username].includes('')){
          console.log('hay al menos 1 vacio')  
        }else{
        console.log(`Enviando formulario`)
        }
    }

    return(
        <>
            <form
                onSubmit = {handleSubmit}
            >
                <label htmlFor = 'name'>Enter name</label> <br/>
                <input 
                    id = 'name'
                    placeholder = 'Name'
                    //value = {user}
                    onChange = { e => setUser(e.target.value) }
                /> <br/>

                <label htmlFor = 'username'>Enter username</label> <br/>
                <input 
                    id = 'username'
                    placeholder = 'Username'
                    //value = {username}
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

export default AddUserForm