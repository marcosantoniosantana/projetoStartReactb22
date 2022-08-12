import React from "react";
import './cartao.css'

export default  props => {

    const estilo = {
        backgroundColor: props.color || '#c0c0c0', // props.color || '#c0c0c0', (Caso não tenha uma cor na outra página, use a cor '#c0c0c0')
        borderColor: props.color || '#f0f0f0'
    }

    return(
        <div className="card" style={estilo}>
            <div className="title">{props.titulo}</div>
            <div className="conteudo">{props.children}</div>
        </div>
    )
}