import React from 'react'

export default function(parametros){
    console.log(parametros)
    return (
        <div>
            <h2>{parametros.titulo}</h2>
            <h3>{parametros.subtitulo}</h3>
        </div>
    )
}