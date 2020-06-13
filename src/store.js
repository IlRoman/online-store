import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';
import pageNumberReducer from './reducers/page-number';
import loginReducer from './reducers/login';

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    pageNumber: pageNumberReducer,
    isLoggedIn: loginReducer,
})

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose

export default createStore(
    reducers,
    composeEnhancers(applyMiddleware()));