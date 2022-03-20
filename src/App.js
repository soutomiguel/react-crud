import React, {useState} from 'react';

import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm';

function App() {

  //Add users
  const [ users, setUsers ] = useState([])

  //Delete users
  const deteleUser = id => {
    const filtredUser = users.filter( user => user.id !== id )
    setUsers( filtredUser )
  }

  //Edit users
  const { editing, setEditing } = useState(false)

  return (
    <>
      <div className = "">
        <h1>CRUD app</h1>

        <div className = "">
          <h2>Add user</h2>

          {
          editing ? (
          <>
            <fieldset>
              <EditUserForm/>
            </fieldset>
          </>
            )  : (
            <>
            <fieldset>
              <AddUserForm 
                users = {users}
                setUsers = {setUsers}
              />
            </fieldset>
            </>
            )
          }
          
        </div>

        <div className = "">
          <h2>View users</h2>

          <UserTable 
            users = {users}
            deteleUser = {deteleUser}
            setEditing = {setEditing}
          />

        </div>
      </div>
    </>
  )
}

export default App
