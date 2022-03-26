import React, { useReducer } from 'react';
import inventoryContext from './inventoryContext';
import carsJSON from '../../AllCarsTo2021.json';
import inventoryReducer from './inventoryReducer';
import {
    GET_ALLCARS,
    GET_MORECARS,
    FILTER_PERVALUE,
    SHOW_FILTERYEAR,
    SHOW_FILTERSERIES,
    SHOW_FILTERNAME,
    SHOW_MENU,
    HAS_FILTERS
} from '../../types';


const InventoryState = (props) => {

    //take the json all cars
    const cars_dataTMP = carsJSON;

    //valores inciales
    const initialState = {
        allCars : [],
        cars_data: cars_dataTMP,
        hasFilters: false,
        pageCars: 1,
        errorFilter: false,
        listfilterYear: null,
        listfilterSeries: null,
        menuYear: false,
        menuSeries: false,
        menu: false
    }

    const [state, dispatch] = useReducer(inventoryReducer, initialState);

    //get all cars
    const getCars = (carsArray) => {
        dispatch({
            type: GET_ALLCARS,
            payload: carsArray.slice(0,50)
        })
    }
    const getMoreCars = (carsArray) => {
        const start = 50 * state.pageCars;
        const end = start + 50;
        console.log(start + " - " + end)
        dispatch({
            type: GET_MORECARS,
            payload: carsArray.slice(start,end)
        })
    }
    const filterPerValue = (filtro) => {
        dispatch({
            type: FILTER_PERVALUE,
            payload: filtro
        })
    }

    const showMenuYear = () => {
        dispatch({
            type: SHOW_FILTERYEAR
        })
    }
    const showMenuSeries = () => {
        dispatch({
            type: SHOW_FILTERSERIES
        })
    }
    
    const showMenu = () => {
        dispatch({
            type: SHOW_MENU
        })
    }

    const showMenuName = () => {
        dispatch({
            type: SHOW_FILTERNAME
        })
    }

    const existFilter = () => {
        dispatch({
            type: HAS_FILTERS
        })
    }
 
    return (
        <inventoryContext.Provider
            value={{
                allCars: state.allCars,
                cars_data: state.cars_data,
                hasFilters: state.hasFilters,
                errorFilter: state.errorFilter,
                listfilterYear: state.listfilterYear,
                listfilterSeries: state.listfilterSeries,
                menuYear: state.menuYear,
                menuSeries: state.menuSeries,
                menu: state.menu,
                pageCars: state.pageCars,
                getCars,
                getMoreCars,
                filterPerValue,
                showMenuYear,
                showMenuSeries,
                showMenuName,
                showMenu,
                existFilter
            }}
        >
            {props.children}
        </inventoryContext.Provider>
    );
}
 
export default InventoryState;