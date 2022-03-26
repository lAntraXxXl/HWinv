import React,{Fragment , useEffect,useContext} from 'react';
import ListCars from './ListCars'
import Menu from '../layout/Menu';
import BtnUp from '../layout/BtnUp';
import inventoryContext from '../../context/allCars/inventoryContext';

const Inventory = () => { 

    const inventContext = useContext(inventoryContext);
    const {cars_data, getCars} = inventContext;

    let dateYear = new Date();
    dateYear = dateYear.getFullYear();
    useEffect(() => {
        getCars(cars_data);
    },[]);

    return ( 
        <Fragment>
            <Menu />
            <ListCars />
            <BtnUp />
            <p className='small-text center'>&copy;{dateYear} All rights reserved</p>
        </Fragment>
    );
}
 
export default Inventory;