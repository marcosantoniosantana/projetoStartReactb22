import React, {useState} from "react";

export default function Nome(){

    const [nome, setNome] = useState("")

    function trocarNome(){
        alert("Trocar")
        setNome("Marcos")
    }

    return(
        <>
            <h2>Olá: {nome}</h2>
            <button onClick={trocarNome}>Trocar nome</button>

        </>
    )
}