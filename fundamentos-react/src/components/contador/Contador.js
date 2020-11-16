import React, {Component} from 'react'

import Display from '../contador/Display'
import PassoForm from '../contador/PassoForm'
import Botoes from '../contador/Botoes'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1
    }

    incremental = () => {
        this.setState({
            numero: this.state.numero + Number(this.state.passo)
        })
    }

    decremental = () => {
        this.setState({
            numero: this.state.numero - Number(this.state.passo)
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: e.target.value
        })
    }

    render(){
        return (
            <div>
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm passoChange={this.setPasso} passo={this.state.passo}/> 
                <Botoes inc={this.incremental} dec={this.decremental}/>
            </div>
        )
    }

}

export default Contador