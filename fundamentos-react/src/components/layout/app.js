import React from 'react'
import Card from './Card'
import Familia from '../basico/Familia'
import FamiliaMembro from '../basico/FamiliaMembro'

import "../layout/App.css"

import Primeiro from '../basico/Primeiro'
import SegundoComponent from '../basico/SegundoComponente'
import Aleatorio from '../Aleatorio'

export default function (props){
    return (
        <div className="App">
            <h1>Fundamentos de React</h1>
                <div className="Cards">

                <Card titulo="Desafio Valor Aleatório" color='#080'>
                    <Aleatorio max = {60} min={1}/>
                </Card>

                <Card titulo="Primeiro Componente" color="#909">
                    <Primeiro/>
                </Card>

                <Card titulo="Segundo Componente">
                    <SegundoComponent titulo="Card main"
                        subtitulo="Conteudo do card"/>
                </Card>

                <Card titulo="Exercicio Familia" color="#a2b9bc">
                    <Familia sobrenome="Ferrreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

            </div>
        </div>
    )
}