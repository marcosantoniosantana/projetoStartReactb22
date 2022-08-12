import React from "react";
import Primeiro from "./components/primeiro";
import Comparametro from "./components/Comparametro";
import Fragment from "./components/Fragmento";
import Cartao from "./components/modelo/Cartao";
import Numeros from "./components/Numeros"
import Foto from "./components/Foto";
import ListaFuncionario from "./components/ListaFuncio";
import './App.css'
import Imagens from "./imagens/sapo.jpeg"
import Nome from "./components/Nome";
import Formulario from "./components/Formulario";
import Tarefas from "./components/Tarefas";

export default function App(){
    return(

        <div className="App">
                <div>
                    <h1>Fundamentos</h1>
                </div>

                <div className="Card">

                    <Cartao titulo="Tarefas">
                        <Tarefas/>
                    </Cartao>

                    <Cartao titulo="Testando Formulários" color="#000053">
                        <Formulario/>
                    </Cartao>

                    <Cartao titulo="Nomes" color="#00ff52">
                        <Nome/>
                    </Cartao>

                    <Cartao titulo="Lista de funciários" color="#00f0ff">
                        <ListaFuncionario/>
                    </Cartao>

                <Cartao titulo="Imagem" color="#0ac0ff">
                    <Foto img={Imagens}/>
                </Cartao>

                <Cartao titulo="Primeiro componente em React" color="orange">
                    <Primeiro/>
                </Cartao>
                
                <Cartao titulo="Números aleatórios" color="#0000bb">
                    <Numeros min={10} max={100}/>
                </Cartao>

                <Cartao titulo="Primeiro componente com props"><Comparametro titulo="Hoje é quarta-feira" subtitulo="03/08/2022"/></Cartao>

                <Cartao titulo="Segundo componente com props" color="purple">
                    <Comparametro titulo="Titulo teste"/></Cartao>

                <Cartao titulo="Terceiro componente com props" color="#ffcbdb">
                    <Comparametro titulo="Titulo teste"/></Cartao>
                    
                <Cartao titulo="Ultilizando React.Fragment"><Fragment/></Cartao>
                </div>
        </div>
    )
}