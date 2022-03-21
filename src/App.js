import React, {useState} from 'react';

import UserTable from './components/UserTable'
import UserForm from './components/UserForm'

function App() {

  //Add users
  const [ users, setUsers ] = useState([])

  const [ user, setUser ] = useState({})

  //Delete users
  const deteleUser = id => {
    const filtredUser = users.filter( user => user.id !== id )
    setUsers( filtredUser )
  }

  return (
    <>
      <div className = "">
        <h1>CRUD app</h1>

        <div className = "">
            <fieldset>
              <h1>Add user</h1>
              <UserForm 
                users = {users}
                setUsers = {setUsers}
              />
            </fieldset>
        </div>

        <div className = "">
          <h2>View users</h2>

          <UserTable 
            users = {users}
            deteleUser = {deteleUser}
            setUser = {setUser}
          />

        </div>
      </div>
    </>
  )
}

export default App
