
import React from 'react';
import juego from '../../img/counter.jpg';
import "./Cart.css";
import {connect} from 'react-redux';
import { ADD_CART, REMOVE_CART, EMPTY_CART } from '../../redux/types';

const Cart = (props) => {

    let counter = {
        nombre: 'Counter Strike',
        version: 1.6,
        precio: 7,
    }

    const modificarCompra = (operando) => {

        switch(operando){
            case '+':
                
                props.dispatch({type:ADD_CART,payload:counter});
            break;

            case '-':

            break;

            case 'vaciar':
                props.dispatch({type:EMPTY_CART})
            break;
        }

    }

    return (
        <div className="vistaCart">
            <div className="botonCarrito" onClick={()=>modificarCompra("+")}>+</div>
            <div className="producto"><img src={juego} alt="cyberCafe"/></div>
            <div className="botonCarrito" onClick={()=>modificarCompra("-")}>-</div>
            <div className="botonCarrito" onClick={()=>modificarCompra("vaciar")}>VACIAR</div>
        </div>
    ) 
}

export default connect()(Cart);