import React, {useState} from 'react';

import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'

function App() {

  const [ users, setUsers ] = useState([])

  return (
    <>
      <div className = "">
        <h1>CRUD app</h1>

        <div className = "">
          <h2>Add user</h2>

          <AddUserForm 
            users = {users}
            setUsers = {setUsers}
          />
          
        </div>

        <div className = "">
          <h2>View users</h2>

          <UserTable 
            users = {users}
          />

        </div>
      </div>
    </>
  )
}

export default App
