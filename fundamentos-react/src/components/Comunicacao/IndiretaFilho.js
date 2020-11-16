import React from 'react'

export default props => {
    const max = 50
    const min = 20

    const gerarIdade = () => parseInt(Math.random() * (max-min)) + min

    return (
        <div>
            <button onClick={
                function(e) {
                    props.quandoClicar('joao', gerarIdade(), true)
                }
            }>Fornecer Informações</button>
        </div>
    )
}