import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho texto="Junior" numero={20} bool={true}/>
            <DiretaFilho texto="Gabriel" numero={14} bool={false}/>
            <DiretaFilho texto="Ana" numero={22} bool={true}/>
        </div>
    )
}