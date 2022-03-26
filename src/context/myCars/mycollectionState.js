import React,{ useReducer }from 'react';
import mycollectionContext from './mycollectionContext';
import mycollectionReducer from './mycollectionReducer';
import {
    ADD_CAR,
    DELETE_CAR,
    GET_MYCARS,
    GET_MORECARS,
    FILTER_PERVALUE,
    SHOW_FILTERYEAR,
    SHOW_FILTERSERIES,
    SHOW_FILTERNAME,
    SHOW_MENU,
    HAS_FILTERS
} from '../../types';

const MycollectionState = (props) => {

    const arrMycars = [
        {"id_toy_f":"1596","name_f":"Old Number 5.5","series_f":"2006 Open StockNew In Mainline","photo_f":"https://static.wikia.nocookie.net/hotwheels/images/9/9a/Old_Number_5.5_-_2006_OV.jpg","year":"2006"},
        {"id_toy_f":"1597","name_f":"Old Number 5.5 (2nd Color)","series_f":"2006 Open StockNew In Mainline","photo_f":"https://static.wikia.nocookie.net/hotwheels/images/1/12/Old55redRF.jpg","year":"2006"}
    ];

    const initialState = {
        myCollection : [],
        collectionData: arrMycars,
        hasFilters: false,
        pageCars: 1,
        errorFilter: false,
        listfilterYear: null,
        listfilterSeries: null,
        menuYear: false,
        menuSeries: false,
        menu: false,
        collectedCar: null
    }
    const [state, dispatch] = useReducer(mycollectionReducer, initialState);

    const getMyCars = (DataArray) => {
        //console.log(DataArray);
        dispatch({
            type: GET_MYCARS,
            payload: DataArray.slice(0,50)
        })
    }
    const addNewCar = (car) => {
        dispatch({
            type: ADD_CAR,
            payload: car
        })
    }
    const removeCar = (carID) => {
        dispatch({
            type: DELETE_CAR,
            payload: carID
        })
    }
    const getMoreCars = (carsArray) => {
        const start = 50 * state.pageCars;
        const end = start + 50;
        //console.log(start + " - " + end)
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
        <mycollectionContext.Provider
            value={{
                myCollection: state.myCollection,
                collectionData: state.collectionData,
                hasFilters: state.hasFilters,
                errorFilter: state.errorFilter,
                listfilterYear: state.listfilterYear,
                listfilterSeries: state.listfilterSeries,
                menuYear: state.menuYear,
                menuSeries: state.menuSeries,
                menu: state.menu,
                pageCars: state.pageCars,
                collectedCar: state.collectedCar,
                addNewCar,
                removeCar,
                getMyCars,
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
        </mycollectionContext.Provider>
    );
}
 
export default MycollectionState;