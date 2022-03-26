import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className="logo center scale-1">HW<span>Inv</span></h1>
            <p className='errorNumber'>404</p>
            <p className='errorDescript'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum porro recusandae saepe, sed, ex iste error et consequatur quos, molestias officiis veritatis fugit cum. Quibusdam consequatur expedita eveniet vel fugiat.</p>
            <button className='btn btn-block-error btn-primario '>
                <Link to={'/'} >Go to Home</Link>
            </button>
        </div>
    );
}
 
export default NotFound;