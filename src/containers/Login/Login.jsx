
import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types';
import "./Login.css";

const Login = (props) => {

    let history = useHistory();
    
    const logIn = () => {

        //Supuestos datos recibidos correctamente del backend
        let data = {
            token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGJkZGYyYmQzNjAzMjQ4ZmMyZTJmNTUiLCJjcmVhdGVBdCI6IjIwMjEtMDYtMDlUMTE6Mjg6MDEuNDEyWiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyMzIzODA4MX0.Fs73g3IGJ5BCqkOnPKHDM5LRQL1-DB4eMt7bviMSHkk',
            user : {
                name : 'Adriana',
                apellido: 'Fayos',
                edad: 25,
                email: 'adriana@gmail.com'
            }
        }

        //Guardamos los datos en RDX
        props.dispatch({type:LOGIN,payload:data});

        //Redireccion a Profile
        setTimeout(()=>{
            history.push("/cart");
        },500);

    }

    return (
        <div className="vistaLogin">
            <div className="logMe" onClick={()=>logIn()}>Logeame!</div>
        </div>
    )
}

export default connect()(Login);