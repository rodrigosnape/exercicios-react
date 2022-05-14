import React from "react";
import { filhosComProps } from "../utils/utils";

export default props =>
    <div>
        <h1>Família</h1>
        {filhosComProps(props)}
        {/*Para cada elemento está sendo feito um clone */}
        {/* {React.Children.map(props.children, componenteFilho =>{
            return React.cloneElement(componenteFilho, {...props})
        })} */}
        {/*É melhor criar um clone do objeto com ...props */}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* Não é interessante passar o objeto
        {React.cloneElement(props.children, props)} */}
        {/* {React.cloneElement(props.children,
            { sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>