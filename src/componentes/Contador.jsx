import React, {Component} from "react";

export default class Contador extends Component{

    state ={
        numero: this.props.numeroInicial
    }

    //Solução (3) é transformar em arrow function para travar o this.
    maisUm = () => {
        
        this.setState({numero: this.state.numero +1})
        //this.state.numero++
    }

    menosUm = () => {
        
        this.setState({numero: this.state.numero -1})
    }

    //Quando se tem uma arrow function com apenas um parâmettro, os parênteses são opcionais
    //alterarNumero = (diferenca) => {
    alterarNumero = diferenca => {
        
        this.setState({
            numero: this.state.numero +diferenca})
    }



    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={ () => this.alterarNumero(10)}>Inc 10</button>
                <button onClick={ () => this.alterarNumero(-10)}>Dec 10</button>
            </div>
        )
    }
}

//Solução (1) - Usando a função Bind dentro do construtror (e chamando com super). para o problema do this. Mas tem muito código. Não é recomendado usar
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

//Solução (2). Utilizando arrow function (no onClick) que "trava" o valor do this de acordo 
//com o local onde a função foi escrita dentro do código
{/* <button onClick={() => this.maisUm()}>Inc</button> */}


//Solução (3) é transformar a função maisUm() em arrow function para travar o this.
// maisUm = () => {
//     //this.props.numero++
//     console.log(this)
// }