import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import CompA, {CompB as B} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'

//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
//import CompomenteComFuncao from './componentes/CompomenteComFuncao'

//import Pai from './componentes/Pai'

//import ComponenteClasse from './componentes/ComponenteClasse'

import Contador from './componentes/Contador'

const elemento = document.getElementById('root')

ReactDOM.render(
<div>
  <Contador numeroInicial={100} />  
  {/* <ComponenteClasse  valor="Sou um componente de classe"/> */}
  {/* <Pai /> */}
  {/* <CompomenteComFuncao /> */}
  {/* <Familia sobrenome="Pereira">
    <Membro nome="Andre" />
    { <Membro nome="Mariana" /> }
  </Familia> */}
  {/* <FamiliaSilva /> */}
  {/*<MultiElementos />*/}
  {/*<CompA valor="Olá, eu sou o A" />/}
  {/*<B valor="B na área" />/}
  {/*</PrimeiroComponente valor="Bom dia!"/>*/}
</div>
, elemento)



//ReactDOM.render(<h1>Olá React</h1>, elemento)
