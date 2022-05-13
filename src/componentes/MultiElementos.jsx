import React from "react";

//Solução 3.Retorna um array. Tb não aparece no no html
export default props => [
        <h1>Parte 1</h1>,
        <h2>Parte 2</h2>
]

//Solução 2. React.Fragment não aparece no html
/* 
export default props =>
    <React.Fragment>
        <h1>Parte 1</h1>
        <h2>Parte 2</h2>
    </React.Fragment>
*/


//Solução 1. Mais usada
/*
export default props =>
    <div>
        <h1>Parte 1</h1>
        <h2>Parte 2</h2>
    </div>
*/