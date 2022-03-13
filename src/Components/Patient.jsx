import React,{useEffect} from 'react';

function Patient({pat, setPatient}){ 

    const { nombre, owner, email, date, symptom } = pat

    return(
        <>
            <div className = "mb-4 m-2">
                <p className = "bg-white">
                    Nombre: {''}
                    <span>{nombre}</span>
                </p>

                <p className = "bg-white">
                    Propietario: {''}
                    <span>{owner}</span>
                </p>

                <p className = "bg-white">
                    eMail: {''}
                    <span>{email}</span>
                </p>

                <p className = "bg-white">
                    Fecha alta: {''}
                    <span>{date}</span>
                </p>

                <p className = "bg-white">
                    Sintomas: {''}
                    <span>{symptom}</span>
                </p>

                <div>
                    <button 
                    className = "py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    type = "button"
                    onClick = { () => setPatient(pat) }
                    >
                    Editar
                    </button>

                    <button 
                    className = "py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    type = "button">
                    Eliminar
                    </button>
                </div>
            </div>
        </>
    )
}

export default Patient