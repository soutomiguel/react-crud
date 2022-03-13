import React, { useState } from 'react';

import Header from './Components/Header'
import Form from './Components/Form'
import PatientList from './Components/PatientList'

function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})
  

  const tomaValor = value => {
    console.log(value)
  }

  return (
    <>
    <div className = "container mx-auto bg-slate-100 h-screen">
      <Header/>

      <div className = "mt-12 flex md:flex">

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
    
    </div>
    </>
  )
}

export default App
