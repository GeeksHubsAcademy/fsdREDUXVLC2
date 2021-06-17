
import React from 'react';
import './Header.css';
import {useHistory} from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import {connect} from 'react-redux';

const Header = (props) => {

    let history = useHistory();

    const takeMe = (where) => {

        history.push(where);

    }

    const logOut = () => {
        //Borrar de RDX las credenciales
        props.dispatch({type:LOGOUT});

        setTimeout(()=>{
            history.push("/");
        },750);
    }

    if(!props.credentials?.token){
        return (
            <div className="vistaHeader">
                <div className="links">
                    <div className="tap" onClick={()=>takeMe("/login")}>Login</div>
                    <div className="tap" onClick={()=>takeMe("/register")}>Register</div>
                </div>
            </div>
        )
        
    }else{
        
        return (
            <div className="vistaHeader">
                <div className="links">
                    <div className="tap" onClick={()=>takeMe("/profile")}>{props.credentials?.user.name}</div>
                    <div className="tap" onClick={()=>takeMe("/comprar")}>{props.cart?.quantity}</div>
                    <div className="tap" onClick={()=>logOut()}>Log Out</div>
                </div>
            </div>
        )
    }

    
}

export default connect((state)=>({
    credentials: state.credentials,
    cart: state.cart
}))(Header);
