import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'

function App() {
  return (
    <>
      <div className = "">
        <h1>CRUD app</h1>

        <div className = "">
          <h2>Add user</h2>
          <AddUserForm />
        </div>

        <div className = "">
          <h2>View users</h2>
          <UserTable />
        </div>
      </div>
    </>
  )
}

export default App
