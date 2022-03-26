import React, { useEffect, useState, useContext }from 'react';
import inventoryContext from '../../context/allCars/inventoryContext';

const FiltersMenu = () => {

    const inventContext = useContext(inventoryContext);
    const {
        cars_data,
        listfilterYear,
        listfilterSeries,
        menuYear,
        menuSeries,
        filterPerValue,
        showMenuYear,
        showMenuSeries,
        showMenuName,
        existFilter
    } = inventContext;

    //variable para el nombre delcarro form input
    const [nameCar, setNameCar] = useState('');
    const [filtersMenu, setFiltersMenu] = useState({
        name_f: '',
        series_f: '',
        year: ''
    });

    //cargamos la lista de filtros por año y serie
    useEffect(() => {
        const filter_view = () => {
            let filterKeys = Object.keys(filtersMenu);
            // filters all elements passing the criteria
            return cars_data.filter((item) => {
                return filterKeys.every((key) => {
                    //ponemos el key en minusculas para despues poder compararlo
                    let itemData = item[key].toLowerCase();
                    if(filtersMenu[key] === ""){
                        return true;
                    }else if(itemData.indexOf(filtersMenu[key].toLowerCase()) !== -1){
                        return true;
                    }
                    return false
                });
            });
        };        
        
        const filterCar = filter_view();
        filterPerValue(filterCar);
    },[filtersMenu]);
 
    
    const updateFilters = (idName,valueFilter) => {
        setFiltersMenu({
            ...filtersMenu,
            [idName]: valueFilter
        });
        if(idName === "year"){
            showMenuYear();
        }else if(idName==="series_f"){
            showMenuSeries();
        }else{            
            showMenuName();
        }
        existFilter();
    };

    //obtiene l valor del input name car 
    const onChange = (e) => {
        setNameCar(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(nameCar.trim() === ''){
            return;
        }
        updateFilters('name_f',nameCar);
    }

    const onClear = () => {
        //limpiamos los filtros
        setFiltersMenu({
            name_f: '',
            series_f: '',
            year: ''
        });
        //obtenemos los carros iniciales
        //getCars(cars_data);
        setNameCar('');
        existFilter();
    }

    return ( 
        <div>
            <form onSubmit={onSubmit}>
                <input name="name_f" type="text" placeholder="Busca nombre" value={nameCar} onChange={onChange} />
                <button type="submit">
                    <span className="fas fa-arrow-right"></span>
                </button>
            </form>
            <ul className={(menuSeries) ? "inputSelect serie" : "inputSelect serie nonVisibleTag"}>
                <li className="sel_first" onClick={showMenuSeries}>
                    {(filtersMenu.series_f === '') ? "Seleccione la Serie" : filtersMenu.series_f}
                    <span className={(menuSeries) ? "ico fas fa-chevron-up" : "ico fas fa-chevron-down"}></span>
                </li>
                <div className="containerSelect">
                    <li onClick={() => updateFilters('series_f',"")}>Todas</li>
                    { (listfilterSeries === null) 
                        ? null 
                        : listfilterSeries.map((series,i) => (
                            <li key={i} onClick={() => updateFilters('series_f',series)}>{series}</li>
                            ))
                    }
                </div>
            </ul>
            <ul className={(menuYear) ? "inputSelect": "inputSelect nonVisibleTag"}>
                <li className="sel_first" onClick={showMenuYear}>
                    {(filtersMenu.year === '') ?  "Seleccione el Año" : filtersMenu.year}
                    <span className={(menuYear) ? "ico fas fa-chevron-up" : "ico fas fa-chevron-down"}></span>
                </li>
                <div className="containerSelect">
                    <li onClick={() => updateFilters('year',"")}>Todos</li>
                    {(listfilterYear === null) 
                        ? null 
                        : listfilterYear.map((year,i) => (
                            <li key={i} onClick={() => updateFilters('year',year)}>{year}</li>
                        ))
                    }
                </div>
            </ul>
            <span className="cl_fl" onClick={onClear}>Clear Filter</span>
        </div>
    );
}
 
export default FiltersMenu;