import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });
    let dateYear = new Date();
    dateYear = dateYear.getFullYear();

    const {nombre, email, password, confirmar} = usuario;

    const onChange = (e) => {
        guardarUsuario({...usuario, [e.target.name] : e.target.value}); 
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1 className="logo center scale-1">HW<span>Inv</span></h1>
                <h2 className='center'>Register me</h2>
                <form onSubmit={onSubmit}>
                    <div className='campo-form'>
                        <label htmlFor="nombre">Name</label>
                        <input type="text" id='nombre' name='nombre' placeholder='Your name' onChange={onChange} value={nombre}/>
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id='email' name='email' placeholder='@mail.com' onChange={onChange} value={email}/>
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' placeholder='Password' onChange={onChange} value={password}/>
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="confirmar">Confirm password</label>
                        <input type="password" id='confirmar' name='confirmar' placeholder='Re-Password' onChange={onChange} value={confirmar}/>
                    </div>

                    <Link to={'/'} className='enlace'>
                        Back to Sign in
                    </Link>
                    <div className='campo-form'>
                        <input type="submit" className='btn btn-primario btn-block' value='Register me' />
                    </div>
                </form>
                <p className='small-text center'>&copy;{dateYear} All rights reserved</p>
            </div>
        </div>
    );
}
 
export default NewAccount;