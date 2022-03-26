import React, { useContext } from 'react';
import './menu.css';
import inventoryContext from '../../context/allCars/inventoryContext';
import { Link } from 'react-router-dom';

const Menu = () => {

    const inventContext = useContext(inventoryContext);
    const {menu, showMenu} = inventContext;
    
    return ( 
        <header>
            <div className="menu">
                <h1 className="logo">HW<span>Inv</span></h1>
                <span className={(menu) ? "ico_menu fas fa-times" : "ico_menu fas fa-bars"} onClick={showMenu}></span>
                <ul className={(menu) ? "first_menu active" : "first_menu"}>
                    <li className="actual">
                        <Link to={'/inventory'} >All Cars</Link>
                    </li>
                    <li>
                        <Link to={'/mycollection'} >My collection</Link>
                    </li>
                </ul>
            </div>
            
        </header>
     );
}
 
export default Menu;