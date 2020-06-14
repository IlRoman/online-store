import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy'

export const productsSelector = state => {
    return state.products.products;
}

export const searchQuerySelector = state => {
    return state.filterText
}

export const pageNumberSelector = state => {
    return state.pageNumber.pageNumber
}

export const filterProducts = createSelector(
    [productsSelector, searchQuerySelector, pageNumberSelector],
    (productsList, searchQuery, pageNumber) => {
        if (!productsList) return [];

        let array = [...productsList]
            .filter(
                o =>
                    o.title.toLowerCase().indexOf(searchQuery.searchQuery.toLowerCase()) >= 0 ||
                    o.author.toLowerCase().indexOf(searchQuery.searchQuery.toLowerCase()) >= 0);

        switch (searchQuery.sortText) {
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