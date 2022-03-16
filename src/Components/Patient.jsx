function Patient({ pat, setPatient }){ 

    const { name, owner, email, date, symptom } = pat

    return(
        <>
            <div className = "mb-4 m-2">
                <p className = "bg-white">
                    Nombre: {name}
                    <span></span>
                </p>

                <p className = "bg-white">
                    Propietario: {owner}
                    <span></span>
                </p>

                <p className = "bg-white">
                    eMail: {email}
                    <span></span>
                </p>

                <p className = "bg-white">
                    Fecha alta: {date}
                    <span></span>
                </p>

                <p className = "bg-white">
                    Sintomas: {symptom}
                    <span></span>
                </p>

                <button className = "m-2 p-2 bg-green-500"
                    onClick = { () => setPatient(pat) }
                >Edit
                </button>

                <button className = "m-2 p-2 bg-red-500">Delete</button>
            </div>
        </>
    )
}

export default Patient