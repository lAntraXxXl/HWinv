import React, { useContext} from 'react';
import mycollectionContext from '../../context/myCars/mycollectionContext';

const Cars = ({carsItem,carCollected}) => {

    const myCollection = useContext(mycollectionContext);
    const {addNewCar} = myCollection;

    const {
        id_toy_f,
        name_f,
        series_f,
        photo_f,
        year} = carsItem;

    //add car to my inventory
    //use the context for them
    //console.log(carCollected + " - " + name_f);

    const agregateCar = () => {
        addNewCar(carsItem);
    }

    return ( 
        <li>
            <div className="img_car">
                {(carCollected)
                    ?<span className="ok fas fa-check-circle"></span>
                    :<span className="add fas fa-plus-circle" onClick={agregateCar}></span>
                }
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
 
export default Cars;