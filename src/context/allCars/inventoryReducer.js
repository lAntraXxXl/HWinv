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

const inventoryReducer = (state, action) => {
    switch(action.type){
        case GET_ALLCARS:
            return{
                ...state, 
               allCars: action.payload,
               pageCars: state.pageCars
            }
        case GET_MORECARS:
            return{
                ...state,
                allCars: [...state.allCars, ...action.payload],
                pageCars: state.pageCars + 1
            }
        case SHOW_FILTERYEAR:
            return{
                ...state,
                menuYear: (state.menuYear) ? false : true,
                menuSeries: false
            }
        case SHOW_FILTERSERIES:
            return{
                ...state,
                menuYear: false,
                menuSeries: (state.menuSeries) ? false : true
            }
        case SHOW_FILTERNAME:
            return{
                ...state,
                menuYear: false,
                menuSeries: false
            }
        case SHOW_MENU:
            return{
                ...state,
                menu: (state.menu) ? false : true
            }
        case FILTER_PERVALUE:
            return{
                ...state,
                allCars: (action.payload.length === 0) ? action.payload : action.payload.slice(0,50),
                listfilterSeries: [...new Set(action.payload.map(filter_item => filter_item.series_f))].sort((a,b) => a - b),
                listfilterYear: [...new Set(action.payload.map(filter_item => filter_item.year))].sort((a,b) => a - b),
                pageCars: 1
            }
        case HAS_FILTERS:
            return{
                ...state,  
                hasFilters: true
            }
        default:
            return state;
    }
}
 
export default inventoryReducer;