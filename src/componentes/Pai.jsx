import React from 'react'
import Filho from './Filho'

export default props =>{
    const notificarSaidaDoFilho = 
    lugar => alert(`Liberado para ${lugar}`)

    return(
        <Filho notificarSaida = {notificarSaidaDoFilho}/>
    )
}