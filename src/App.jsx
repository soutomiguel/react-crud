import Header from './Components/Header'
import Form from './Components/Form'
import PatientList from './Components/PatientList'

function App() {
  return (
    <>
    <div className = "container mx-auto bg-slate-100 h-screen">
      <Header/>

      <div className = "mt-12 flex md:flex">
        <Form/>
        <PatientList/>  
      </div>
    
    </div>
    </>
  )
}

export default App
