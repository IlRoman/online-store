import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy'

export const productsSelector = state => {
    return state.products.products;
}

export const filterTextSelector = state => {
    return state.products.activeFilter
}

export const filterProducts = createSelector(
    [productsSelector, filterTextSelector],
    (productsList, filterText) => {
        if (!productsList) return [];
        let array = [...productsList]
        switch (filterText) {
            case 'author':
                return orderBy(array, 'author', 'ask')
            case 'all':
                return array
            case 'popular':
                return array.sort((a, b) => b.rating - a.rating)
            case 'expensive':
                return array.sort((a, b) => b.price - a.price)
            case 'cheap':
                return array.sort((a, b) => a.price - b.price)
            default:
                return array;
        }
    }
)