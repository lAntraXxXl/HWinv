import React,{ useContext} from 'react';
import mycollectionContext from '../../context/myCars/mycollectionContext';

const CarsCollection = ({mycars_item}) => {

    const mycollection = useContext(mycollectionContext)
    const {removeCar,collectionData, getMyCars} = mycollection;

    const {
        id_toy_f,
        name_f,
        series_f,
        photo_f,
        year} = mycars_item;

    const deleteCar = () => {
        removeCar(id_toy_f);
        //getMyCars(collectionData);
    }

    return ( 
        <li>
            <div className="img_car">
                <span className="add fas fa-trash" onClick={deleteCar}></span>
                <img src={photo_f} alt={name_f} />
            </div>
            <div className="descrip_car">
                <h4>{name_f}</h4>
                <p>{series_f}</p>
                <p><strong>Id:</strong> {id_toy_f} | <strong>Año:</strong>  {year}</p>
            </div>
        </li>
    );
}
 
export default CarsCollection;