import React from 'react';
import './product.scss'
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';

const Product = ({ product, addToCart, addedCount, handleShowDetails }) => {

    return (
        <div className="product">
            <div className="product__image-container">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product__image-container_image"
                    onClick={() => handleShowDetails(product)}
                />
            </div>
            <div className="product__description">
                <div className="product__description_title">
                    {product.title}
                </div>
                <div className="product__description_title">
                    {product.author}
                </div>
                <div className="price-and-rating">
                    <div className="product__description_price">{`Цена: ${product.price}`}</div>
                    <div className="product__description_rating">{`Рейтинг: ${product.rating}`}</div>
                </div>
                <button
                    className="product__description_button"
                    onClick={addToCart.bind(this, product)}>
                    Добавить в корзину {addedCount > 0 && `(${addedCount})`}
                </button>
            </div>
        </div >
    )
}

const mapState = (state, { product }) => ({
    addedCount: state.cart.items.reduce((count, book) => count + (book.id === product.id ? 1 : 0), 0)
})


const mapDispatch = {
    addToCart,
}

export default connect(mapState, mapDispatch)(Product);