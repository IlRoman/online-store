import React from 'react';
import './details.scss';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';


const Details = ({ product, addToCart, addedCount, handleShowDetails }) => {
    return (
        <div className="details">
            <button
                className="details__close"
                onClick={handleShowDetails}>
                <i className="far fa-times-circle"></i>
            </button>
            <div className="details__container">
                <div className="details__container_image">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="details__container_image-elem"
                    />
                </div>
                <div className="details__container_description">
                    <div className="details__container_description-title">
                        {product.title}
                    </div>
                    <div className="details__container_description-author">
                        {product.author}
                    </div>
                </div>
            </div>
            <div className="details__container_price-and-rating">
                <div className="details__container_description-price">{`Цена: ${product.price}`}</div>
                <div className="details__container_description-rating">{`Рейтинг: ${product.rating}`}</div>
            </div>
            <div className="details__container_description-button">
                <button
                    className="details__container_description-button-elem"
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

export default connect(mapState, mapDispatch)(Details);