import React from 'react'

export default props => {

    const max = props.max
    const min = props.min
    const aleatorio = parseInt(Math.random() * (max-min) + min)

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo: </strong> {props.min} </p>
            <p><strong>Valor Máximo: </strong> {props.max} </p>
            <p><strong>Aleatório: </strong> {aleatorio} </p>
        </div>
    )
}