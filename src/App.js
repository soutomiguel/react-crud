import React, {useState, useEffect} from 'react';

import UserTable from './components/UserTable'
import UserForm from './components/UserForm'

function App() {

  //Add users
  const [ users, setUsers ] = useState([])

  const [ user, setUser ] = useState({})

  //LOCALSTORAGE

  useEffect( () => {
    const getLocalStorage = () => {
      const usersLS = JSON.parse(localStorage.getItem('users')) ?? [] //Si no hay nada en LS, agrega un array vacio
      setUsers(usersLS)
    }

    getLocalStorage()
  }, [] ) //Vacio se ejecuta una sola vez

  //Escribiendo en local storage
  useEffect( () => {
    localStorage.setItem('users', JSON.stringify(users)) //Agregamos y convertimos a string
  }, [users] )

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
                user = {user}
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
