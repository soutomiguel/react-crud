import React from 'react'
import Patient from './Patient'

function PatientList({patients, setPatient}){
    
    return(
        <div className = "w-1/2 lg:w-3/5 h-screen overflow-y-scroll">

            {patients && patients.length ? (
                <>
                <h2 className = "font-black text-center text-3xl">Seguimiento de pacientes</h2>
                <p className = "text-center text-xl mb-10 mt-5">
                    Administra tus {''}
                    <span className = 'text-indigo-600 font-bold text-xl'>pacientes y citas</span>
                </p>

                {
                    patients.map( (pat) => (
                            <Patient
                                key = {pat.id}
                                pat = {pat}
                                setPatient = {setPatient}
                            />
                        )
                    ) 
                }
                </>
            ) : (
                <>
                <h2 className = "font-black text-center text-3xl">No hay pacientes</h2>
                <p className = "text-center text-xl mb-10 mt-5">
                    comienza agregando pacientes {''}
                    <span className = 'text-indigo-600 font-bold text-xl'>y apareceran en este lugar</span>
                </p>
                </>
            )}



        </div>
    )
}

export default PatientList