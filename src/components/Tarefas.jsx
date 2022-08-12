import React, {useState, useEffect} from "react";

export default function Tarefas(){

    const [input, setInput] = useState("")
    const [tarefas, setTarefas] = useState([
        "Estudar JavaScript",
    ])

    useEffect(()=>{
        const tarefasStorage = localStorage.getItem('@tarefa')

        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage))
            //Acesse o localStorage e caso haja conteúdo peque tudo dentro dessa chave
        }
    }, [])

    useEffect(()=>{
        //alert("Bem vindos!")
        localStorage.setItem('@tarefa', JSON.stringify(tarefas)) //Acessa o localStorage e adiciona um item com uma chave prescrita com um @
    }, [tarefas])
    //()=>{} oque será executado quando o navegador for iniciado | [] esse força a voltar para a função anterior

    function registrar(event){
        //alert("registrado")
        event.preventDefault()
        setTarefas([...tarefas, input])
        setInput("")
    }

    return(
        <div>
            <h2>Tarefas</h2>
            <form onSubmit={registrar}>
                <label>Nome da tarefa:</label>
                <input placeholder="Digite uma tarefa" value={input} onChange={(event)=> setInput(event.target.value)}/>
                <button type="submit">Gravar</button>
            </form>

            <div>
                <ul>
                    {tarefas.map(tarefa =>(
                        <li key={tarefa}>{tarefa}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}