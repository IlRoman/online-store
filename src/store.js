import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart'

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
})

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose

export default createStore(
    reducers,
    composeEnhancers(applyMiddleware(logger)
    ));