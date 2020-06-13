import React from 'react';
import './product.scss'

const Product = ({ elem }) => {
    return (
        <div className="product">
            <div className="product__image-container">
                <img
                    src={elem.image}
                    alt={elem.title}
                    className="product__image-container_image"
                />
            </div>
            <p className="product__title">{elem.title}</p>
            <p className="product__author">{elem.author}</p>
            <p className="product__price">{elem.price}</p>
        </div >
    )
}

export default Product;