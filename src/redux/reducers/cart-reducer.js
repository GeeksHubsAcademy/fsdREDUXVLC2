import {ADD_CART, REMOVE_CART, EMPTY_CART} from '../types';

const initialState = {
    products: [],
    quantity: 0
};

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        //Ejemplo de añadido de datos
        case ADD_CART :
            return {
                ...state,
                products: [...state.products, action.payload]
            };

        //Ejemplo de reestablecimiento o borrado de datos
        case EMPTY_CART : 
            return initialState;

        //Ejemplo de modificacion de datos
        // case REMOVE_CART :
        //     return {...state, products: action.payload};
            
        default : 
            return state
    }
}
export default cartReducer;