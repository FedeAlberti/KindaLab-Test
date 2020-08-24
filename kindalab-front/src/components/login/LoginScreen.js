import React, { useContext } from 'react';

import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';

import { AuthContext } from '../../auth/AuthContext';
import {LoginAction, RegisterAction} from '../../actions/authAction'
import './login.css';


export const LoginScreen = ({history}) => {

    
    const { dispatch } = useContext(AuthContext);
    
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: '',
        lPassword: ''
    });

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: '',
        rEmail: '',
        rPassword1: '',
        rPassword2: ''
    });
    
    const { lEmail, lPassword } = formLoginValues;
    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const CheckLogin = () =>{

        let text;

        if (!lEmail) 
            text= 'Insert Email'

        if(!lPassword)
            text? text += '<br> Inset Password': text = 'Inset Password' 

        if (text)
            throw Swal.fire('Error', text,'error');
    }

    const CheckRegister = () =>{
        
        let text;
       
        if (!rName) 
            text= 'Insert Name'

        if (!rEmail) 
            text ? text += '<br> Insert Email': text= 'Insert Email'

        if(!rPassword1)
            text ? text += '<br> Inset Password': text = 'Inset Password' 
        
        if(!rPassword2)
            text ? text += '<br> Inset Password': text = 'Inset Password' 

        if ( rPassword1 !== rPassword2 ) 
            text ? text += '<br> The passwords specified must be identical': text = 'The passwords specified must be identical'
        
        if (text)
            throw Swal.fire('Error', text,'error');
    }

    const handleLogin = async( e ) => {
        e.preventDefault();

        CheckLogin()
        
        await LoginAction(lEmail,lPassword,dispatch)
            
        history.replace('/');
    }

    const handleRegister = ( e ) => {
        e.preventDefault();

        CheckRegister()

        RegisterAction(rEmail,rPassword1,rName,dispatch)

    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Log In</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="lEmail"
                                value={ lEmail }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="lPassword"
                                value={ lPassword }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Register</h3>
                    <form onSubmit={ handleRegister }>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="rName"
                                value={ rName }
                                onChange={ handleRegisterInputChange }
                                
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="rEmail"
                                value={ rEmail }
                                onChange={ handleRegisterInputChange }
                                
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password" 
                                name="rPassword1"
                                value={ rPassword1 }
                                onChange={ handleRegisterInputChange }
                                
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm password" 
                                name="rPassword2"
                                value={ rPassword2 }
                                onChange={ handleRegisterInputChange }
                                
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}