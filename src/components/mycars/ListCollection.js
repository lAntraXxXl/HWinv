import React, {useContext} from 'react';
import mycollectionContext from '../../context/myCars/mycollectionContext';
import FiltersCollection from './FiltersCollection';
import CarsCollection from './CarsCollection';


const ListCollection = () => {

    const mycollection = useContext(mycollectionContext)
    const {myCollection,hasFilters} = mycollection;


    const loadMore = () => {
        console.log("more");
    }

    return (
        <div>
            { (myCollection.length === 0 && !hasFilters) 
                ? null 
                :   <div className="filters">
                        <h3>Intenta buscar tu HW por</h3>
                        <FiltersCollection />
                    </div>
            }
            <ul className="carsList">
                {(myCollection.length === 0)?
                    <div className="error">
                        <h2>Oops!</h2>
                        {(hasFilters) 
                            ? <p>No hemos logrado encontrar tu HW, intenta con otro filtro.</p>
                            : <p>No hay informacion aun en el sistema.</p>
                        }
                    </div>
                : myCollection.map(mycars_item => (               
                        <CarsCollection 
                            key={mycars_item.id_toy_f}
                            mycars_item={mycars_item}
                        />
                    ))
                }
                {(myCollection.length < 50 )
                    ? null
                    : <div className="btn_footer"><span className="cl_fl" onClick={loadMore}>Cargar mas HW</span></div>
                }
            </ul>
        </div>
    );
}
 
export default ListCollection;