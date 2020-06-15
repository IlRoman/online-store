import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy'

export const productsSelector = state => {
    return state.products.products;
}

export const cartSelector = state => {
    return state.cart.items
}

export const searchQuerySelector = state => {
    return state.filterText
}

export const pageNumberSelector = state => {
    return state.pageNumber.pageNumber
}

export const filterProducts = createSelector(
    [productsSelector, searchQuerySelector],
    (productsList, searchQuery) => {
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

export const totalPriceSelector = createSelector(
    [cartSelector],
    (productsList) => {
        if (!productsList || productsList.length === 0) return 0;
        return productsList.reduce((acc, item) => {
            return item.hasOwnProperty('count')
                ? acc + item.price * item.count
                : acc + item.price
        }, 0)
    }
)