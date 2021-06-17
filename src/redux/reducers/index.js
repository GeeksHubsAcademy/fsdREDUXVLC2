import {combineReducers} from 'redux';
import credentials from './credentials-reducer.js';
import cart from './cart-reducer';


const rootReducer = combineReducers({
    credentials,
    cart
});

export default rootReducer;