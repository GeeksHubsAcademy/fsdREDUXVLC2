
import React from 'react';
import juego from '../../img/counter.jpg';
import juego2 from '../../img/quake3.jpg';
import "./Cart.css";
import {connect} from 'react-redux';
import { ADD_CART, REMOVE_CART, EMPTY_CART, EDIT_CART } from '../../redux/types';

const Cart = (props) => {

    let counter = {
        nombre: 'Counter Strike',
        version: 1.6,
        precio: 7,
        cantidad: 1
    }

    let quake3 = {
        nombre: 'Quake3',
        version: 1.6,
        precio: 8,
        cantidad: 2
    }

    const modificarCompra = (operando,item) => {

        if(item === 'counter'){
            switch(operando){
                case '+':

                    const encontrado = props.cart ? props.cart.products.find(itemBusca => itemBusca.nombre === counter.nombre) : false;
                    
                    if(!encontrado){
                        
                        props.dispatch({type:ADD_CART,payload:counter});

                    }else {

                        counter.cantidad = encontrado.cantidad + 1;
                        props.dispatch({type:EDIT_CART,payload:counter});
                    }
                break;
    
                case '-':
    
                break;
    
                case 'vaciar':
                    props.dispatch({type:EMPTY_CART})
                break;
            }
        } else if (item === 'quake3'){
            switch(operando){
                case '+':
                    
                    const encontrado = props.cart ? props.cart.products.find(itemBusca => itemBusca.nombre === quake3.nombre) : false;
                    
                    if(!encontrado){
                        
                        props.dispatch({type:ADD_CART,payload:quake3});

                    }else {

                        quake3.cantidad = encontrado.cantidad + 2;
                        props.dispatch({type:EDIT_CART,payload:quake3});
                    }
                break;
    
                case '-':
    
                break;
    
                case 'vaciar':
                    props.dispatch({type:EMPTY_CART})
                break;
            }
        }

        

    }

    return (
        <div className="vistaCart">
            <div className="contenedorItem">
                <div className="botonCarrito" onClick={()=>modificarCompra("+","counter")}>+</div>
                <div className="producto"><img src={juego} alt="cyberCafe"/></div>
                <div className="botonCarrito" onClick={()=>modificarCompra("-")}>-</div>
                <div className="botonCarrito" onClick={()=>modificarCompra("vaciar")}>VACIAR</div>
            </div>
            <div className="contenedorItem">
                <div className="botonCarrito" onClick={()=>modificarCompra("+","quake3")}>+</div>
                <div className="producto"><img src={juego2} alt="cyberCafe"/></div>
                <div className="botonCarrito" onClick={()=>modificarCompra("-")}>-</div>
                <div className="botonCarrito" onClick={()=>modificarCompra("vaciar")}>VACIAR</div>
            </div>
            
        </div>
    ) 
}

export default connect((state)=>({
    cart: state.cart
}))(Cart);