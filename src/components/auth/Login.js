import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });
    let dateYear = new Date();
    dateYear = dateYear.getFullYear();

    const {email, password} = usuario;

    const onChange = (e) => {
        guardarUsuario({...usuario, [e.target.name] : e.target.value}); 
    }

    const onSubmit = (e) => {
        e.preventDefault();
        navigate('/inventory');
    }

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1 className="logo center scale-1">HW<span>Inv</span></h1>
                <h2 className='center'>Sign In</h2>
                <form onSubmit={onSubmit}>
                    <div className='campo-form'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id='email' name='email' placeholder='@mail.com' onChange={onChange} value={email}/>
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' placeholder='Password' onChange={onChange} value={password}/>
                        <p className='small-text'>Must be 8 characters at least</p>
                    </div>

                    <Link to={'new-account'} className='enlace'>
                        Register
                    </Link>
                    <div className='campo-form'>
                        <input type="submit" className='btn btn-primario btn-block' value='Sign In' />
                    </div>
                </form> 

                <p className='small-text center'>&copy;{dateYear} All rights reserved</p>
            </div>
        </div>
    );
}
 
export default Login;