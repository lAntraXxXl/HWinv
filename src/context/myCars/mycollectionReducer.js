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


const mycollectionReducer = (state, action) => {
    switch(action.type){
        case GET_MYCARS:
            return{
                ...state,
                myCollection: action.payload
            }
        case ADD_CAR:
            return{
                ...state,
                collectionData: [...state.collectionData, action.payload]
            }
        case DELETE_CAR:
            return{
                ...state,
                myCollection: state.collectionData.filter(mycars => mycars.id_toy_f !== action.payload),
                collectionData: state.collectionData.filter(mycars => mycars.id_toy_f !== action.payload)
            }
        case GET_MORECARS:
            return{
                ...state,
                collectionData: [...state.collectionData, ...action.payload],
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
                collectionData: (action.payload.length === 0) ? action.payload : action.payload.slice(0,50),
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
            return state
    }
}
 
export default mycollectionReducer;