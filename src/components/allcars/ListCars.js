import React, { useContext} from 'react';
import Cars from './Cars';
import FiltersMenu from './FiltersMenu';
import './listCars.css';
import inventoryContext from '../../context/allCars/inventoryContext';
import mycollectionContext from '../../context/myCars/mycollectionContext';


const ListCars = () => {

    const inventContext = useContext(inventoryContext);
    const {allCars, cars_data, getMoreCars, hasFilters} = inventContext;

    const mycollection = useContext(mycollectionContext);
    const {collectionData} = mycollection

    //load more cars
    const loadMore = () => {
        if(hasFilters){
            getMoreCars(allCars);
        }else{
            getMoreCars(cars_data);
        }
    }

    return (
        <div>
            { (allCars.length === 0 && !hasFilters) 
                ? null 
                :   <div className="filters">
                        <h3>Intenta buscar tu HW por</h3>
                        <FiltersMenu />
                    </div>
            }
            <ul className="carsList">
                {(allCars.length === 0)?
                    <div className="error">
                        <h2>Oops!</h2>
                        {(hasFilters) 
                            ? <p>No hemos logrado encontrar tu HW, intenta con otro filtro.</p>
                            : <p>No hay informacion aun en el sistema.</p>
                        }
                    </div>
                : allCars.map((cars_item) => {
                    const isCollected = collectionData.filter(item => cars_item.id_toy_f === item.id_toy_f );
                    let collected;
                    if(isCollected.length === 0){
                        //no esta coleccionado
                        collected = false;
                    }else{
                        collected = true;
                    }
                        return <Cars 
                            key={cars_item.id_toy_f}
                            carsItem={cars_item}
                            carCollected={collected}
                        />
                                           
                })
                }
                {(allCars.length < 50 || allCars.length === cars_data.length)
                    ? null
                    : <div className="btn_footer"><span className="cl_fl" onClick={loadMore}>Cargar mas HW</span></div>
                }
            </ul>
        </div>
    );
}
 
export default ListCars;