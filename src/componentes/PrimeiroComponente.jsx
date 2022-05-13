import React from 'react'


let isLegal = true;

//Arrow function
export default (props) =>
<div>
    <h1>{props.valor}</h1>
    <p>{1+1}</p>
    <p>{isLegal ? 'Sim' : "Não"}</p>
</div>

//Arrow function
//export default () =>
//<div>
//    <h1>Primeiro Componente (Arrow)!</h1>
//</div>

//Não precisa de nome, pode ser uma função anônima
//export default function(){
//    return <h1>Primeiro Componente!</h1>
//}

//function primeiro(){
//    return <h1>Primeiro Componente!</h1>
//}

//export default primeiro