import React from 'react';
import Error from './Error';
import { useState, useEffect } from 'react';

function Form({patients, setPatients, patient}){

    const [ name, setName ] = useState('')
    const [ owner, setOwner ] = useState('')
    const [ email, setEmail] = useState('')
    const [ date, setDate ] = useState('')
    const [ symptom, setSymptom ] = useState('')

    const [ err, setErr ] = useState(false)

    useEffect( () => {
        if(Object.keys(patient).length > 0){ //Comprueba si el objeto tiene algo
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setDate(patient.date)
            setSymptom(patient.symptom)
        }
    }, [patient] )

    const generateId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)
        return random + date
    }

    const handleSubmit = e => {
        e.preventDefault()

        if( [name, owner, email, date, symptom].includes('') ){
            setErr(true)
            return
        }

        setErr(false)

        //Patient object
        const patientObject = {
            name, 
            owner, 
            email, 
            date, 
            symptom,
        }

        //Editando el registro
        if(patient.id){
            //Editando registro
        }else{
            //Nuevo registro
            patientObject.id = generateId()
            setPatients([...patients, patientObject])   
        }

        //Reiniciar form
        setName('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptom('')
    }

    return(
        <div className = "md:w-1/2 lg:w-2/5 mx-10 ">
            <h2 className = "font-black text-center text-3xl">Formulario</h2>
            
            <p className = "text-lg mt-5 text-center mb-5">
                Añade pacientes y {''}
                <span className = "text-indigo-600 font-bold text-lg">Administralos</span>
            </p>

            {
                //Si err es true, entonces...
                err && 
                <Error
                    msg = 'Todos los campos son obligatorios'
                />
            }

            <form 
                className = "bg-white rounded-md py-10 px-5"
                onClick = { handleSubmit }
            >
                <div>
                    <label htmlFor = "pet-name" className = "block text-gray-700 font-bold uppercase">Nombre</label>
                    <input 
                        id = "pet-name" 
                        type = "input"
                        placeholder = "Nombre la mascota"
                        className = "border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md mb-5"
                        value = {name}
                        onChange = { e => setName(e.target.value) }
                    />
                </div>

                <div>
                    <label htmlFor = "pet-owner" className = "block text-gray-700 font-bold uppercase">Nombre del propietario</label>
                    <input 
                        id = "pet-owner" 
                        type = "input"
                        placeholder = "Nombre del propietario"
                        className = "border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md mb-5"
                        value = {owner}
                        onChange = { e => setOwner(e.target.value) }
                    />
                </div>

                <div>
                    <label htmlFor = "email" className = "block text-gray-700 font-bold uppercase">eMail</label>
                    <input 
                        id = "email" 
                        type = "email"
                        placeholder = "eMail de contacto del propietario"
                        className = "border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md mb-5"
                        value = {email}
                        onChange = { e => setEmail(e.target.value) }
                    />
                </div>

                <div>
                    <label htmlFor = "date" className = "block text-gray-700 font-bold uppercase">Alta</label>
                    <input 
                        id = "date" 
                        type = "date"
                        className = "border-2 w-full p-2 mt-2 rounded-md mb-5"
                        value = {date}
                        onChange = { e => setDate(e.target.value) }
                    />
                </div>

                <div>
                    <label htmlFor = "symptom-desc" className = "block text-gray-700 font-bold uppercase">Sintimas</label>
                    <textarea 
                        className = "w-full border-2 p-2 mt-2" 
                        name = "symptom" 
                        id = "symptom-desc"
                        value = {symptom}
                        onChange = { e => setSymptom(e.target.value) }
                    >
                    </textarea>
                </div>

                <input 
                    type = "submit"
                    className = "bg-indigo-600 w-full p-3 mt-4 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value = {
                        patient.id 
                        ? 'Editar paciente'
                        : 'Agregar paciente'
                    }
                />
            </form>

        </div>
    )
}

export default Form