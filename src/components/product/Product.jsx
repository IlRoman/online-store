import React from 'react';
import './product.scss'
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';

const Product = ({ product, addToCart, handleShowDetails }) => {

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
                    onClick={() => addToCart({ ...product, count: 1 })}>
                    Добавить в корзину
                </button>
            </div>
        </div >
    )
}

const mapState = state => ({
})


const mapDispatch = {
    addToCart,
}

export default connect(mapState, mapDispatch)(Product);