import React from 'react'
import Card from './Card'
import Familia from '../basico/Familia'
import FamiliaMembro from '../basico/FamiliaMembro'

import "../layout/App.css"
import ListaAlunos from '../repeticao/ListaAlunos'
import Primeiro from '../basico/Primeiro'
import SegundoComponent from '../basico/SegundoComponente'
import Aleatorio from '../Aleatorio'
import TabelaProdutos from '../repeticao/TabelaProdutos'
import ParOuImpar from '../condicional/ParOuImpar'
import UsuarioInfo from '../condicional/UsuarioInfo'
import DiretaPai from '../Comunicacao/DiretaPai'
import IndiretaPai from '../Comunicacao/IndiretaPai'
import Input from "../formulario/input"
import Contador from "../contador/Contador"

export default function (props){
    return (
        <div className="App">
            <h1>Fundamentos de React</h1>
                <div className="Cards">

                <Card titulo="#001 - Desafio Valor Aleatório" color='#080'>
                    <Aleatorio max = {60} min={1}/>
                </Card>

                <Card titulo="#003 - Primeiro Componente" color="#909">
                    <Primeiro/>
                </Card>

                <Card titulo="#004 - Segundo Componente">
                    <SegundoComponent titulo="Card main"
                        subtitulo="Conteudo do card"/>
                </Card>

                <Card titulo="#005 - Exercicio Familia" color="#a2b9bc">
                    <Familia sobrenome="Ferrreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#006 - Repetição">
                    <ListaAlunos/>
                </Card>

                <Card titulo="#007 - Exercicio Repetição" color="#3A9AD9">
                    <TabelaProdutos/>
                </Card>

                <Card titulo="#008 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={{nome : 'Fernando'}}/>
                    <UsuarioInfo usuario={{}}/>
                </Card>

                <Card titulo="#009 - Comunicação Direta" color="#59323C">
                    <DiretaPai />
                </Card>

                <Card titulo="#010 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai/>
                </Card>

                <Card titulo="#011 - Componente Controlado" color="#E45F56">
                   <Input></Input>
                </Card>

                <Card titulo="#012 - Contador" color="#424242">
                   <Contador numeroInicial={10}></Contador>
                </Card>


            </div>
        </div>
    )
}