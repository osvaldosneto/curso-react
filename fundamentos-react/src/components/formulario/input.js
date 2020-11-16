import React, {useState} from 'react'
import "./Input.css"

export default props => {

    const [valor, setValor] = useState('inicial')

    function quandoMudar(e){
        console.log(e.target.value)
        setValor(e.target.value)
    }

    return (
        <div className="input">
            <input onChange={quandoMudar} value={valor}/>
        </div>
    )
}