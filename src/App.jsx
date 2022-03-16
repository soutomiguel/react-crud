import Header from './Components/Header'
import Form from './Components/Form'
import PatientList from './Components/PatientList'
import { useState } from 'react'

function App() {

  const [ patients, setPatients ] = useState([])
  const [ patient, setPatient ] = useState({})

  console.log(patient)

  return (
    <>
    <div className = "container mx-auto bg-slate-100 h-screen">
      <Header/>

      <Form
        patients = {patients}
        setPatients = {setPatients}
        patient = {patient}
      />

      <PatientList
        patients = {patients}
        setPatient = {setPatient}
      />
    </div>
    </>
  )
}

export default App
