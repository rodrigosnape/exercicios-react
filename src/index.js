import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import CompA, {CompB as B} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'

import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')

ReactDOM.render(
<div>
  <Familia>
    <Membro nome="Andre" sobrenome="Pereira" />
    <Membro nome="Mariana" sobrenome="Pereira" />
  </Familia>
  <Familia>
    <Membro nome="Bia" sobrenome="Arruda" />
    <Membro nome="Gustavo" sobrenome="Arruda" />
  </Familia>
  {/*<FamiliaSilva />*/}
  {/*<MultiElementos />*/}
  {/*<CompA valor="Olá, eu sou o A" />/}
  {/*<B valor="B na área" />/}
  {/*</PrimeiroComponente valor="Bom dia!"/>*/}
</div>
, elemento)



//ReactDOM.render(<h1>Olá React</h1>, elemento)
