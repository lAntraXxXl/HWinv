import React, { Fragment ,useContext ,useEffect} from 'react';
import Menu from '../layout/Menu';
import mycollectionContext from '../../context/myCars/mycollectionContext';
import ListCollection from './ListCollection';

const MyCollection = () => {

    const mycollection = useContext(mycollectionContext)
    const {collectionData,getMyCars} = mycollection;

    let dateYear = new Date();
    dateYear = dateYear.getFullYear();
    useEffect(() => {
        getMyCars(collectionData);
        // eslint-disable-next-line
    },[])

    return ( 
        <Fragment>
            <Menu />
            <ListCollection />
            <p className='small-text center'>&copy;{dateYear} All rights reserved</p>
        </Fragment>
    );
}
 
export default MyCollection;