import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy'

export const productsSelector = state => {
    return state.products.products;
}

export const filterTextSelector = state => {
    return state.products.activeFilter
}

export const pageNumberSelector = state => {
    return state.pageNumber.pageNumber
}

export const filterProducts = createSelector(
    [productsSelector, filterTextSelector, pageNumberSelector],
    (productsList, filterText, pageNumber) => {
        if (!productsList) return [];
        let array = [...productsList];
        switch (filterText) {
            case 'author':
                return orderBy(array, 'author', 'ask').splice(pageNumber * 8, 8)
            case 'all':
                return array.splice(pageNumber * 8, 8)
            case 'popular':
                return array.sort((a, b) => b.rating - a.rating).splice(pageNumber * 8, 8)
            case 'expensive':
                return array.sort((a, b) => b.price - a.price).splice(pageNumber * 8, 8)
            case 'cheap':
                return array.sort((a, b) => a.price - b.price).splice(pageNumber * 8, 8)
            default:
                return array.splice(pageNumber * 8, 8);
        }
    }
)