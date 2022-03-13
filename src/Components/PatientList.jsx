import React from 'react'

import Patient from './Patient'

function PatientList(){
    return(
        <div className = "w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
            <h2 className = "font-black text-center text-3xl">Seguimiento de pacientes</h2>
            <p className = "text-center text-xl mb-10 mt-5">
                Administra tus {''}
                <span className = 'text-indigo-600 font-bold text-xl'>pacientes y citas</span>
            </p>

        <Patient/>

        </div>
    )
}

export default PatientList