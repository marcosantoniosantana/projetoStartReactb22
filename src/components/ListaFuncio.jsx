import React from "react";
import funcionario from "../data/funcionarios";

export default (props) =>{
    //console.log(funcionario)
/*
    const li1 = (
        <li>
            {funcionario[0].id} - {funcionario[0].nome}
        </li>
    )
*/

//map método para acessar os itens dentro d euma array

const lista = funcionario.map((funcionario) =>{ //para todos os objetos dentro da lista, selecione pela chave id (key={funcionario.id}) imprima os atributos do objeto
    return(
        <li key={funcionario.id}>{funcionario.id} - {funcionario.nome}</li>
    )
})

    return(
        <div>
            <ul>
                {lista}
            </ul>
        </div>
    )
}