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
  const [ editing, setEditing]  = useState(false)
  const [ currentUser, setCurrentUser ] = useState({
    id: null,
    user: '',
    username: ''
  }) //Trae el usuario modificado

  const editRow = user => {
    setEditing(true)
    setCurrentUser({
      id: id,
      user: user,
      username: username
    })

    console.log(currentUser)
  }

  return (
    <>
      <div className = "">
        <h1>CRUD app</h1>

        <div className = "">
          {
          editing ? (
            <fieldset>
              <h1>Edit user</h1>
              <EditUserForm/>
            </fieldset>
            )  : (
            <fieldset>
              <h1>Add user</h1>
              <AddUserForm 
                users = {users}
                setUsers = {setUsers}
              />
            </fieldset>
            )
          }
          
        </div>

        <div className = "">
          <h2>View users</h2>

          <UserTable 
            users = {users}
            deteleUser = {deteleUser}
            //setEditing = {setEditing}
            editRow = {editRow}
          />

        </div>
      </div>
    </>
  )
}

export default App
