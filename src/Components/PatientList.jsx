import React from 'react'
import Patient from './Patient'


function PatientList({patients, setPatient}){
    
    return(
        <>
            <p>Listado de pacientes</p>

            {
                patients.map( pat => (
                    <Patient
                        pat = {pat}
                        setPatient = {setPatient}
                    />
                ))
            }
        </>
    )
}

export default PatientList