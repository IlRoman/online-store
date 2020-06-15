import React, { useState } from 'react';
import './cart.scss';
import { connect } from 'react-redux'
import { removeFromCart } from '../../actions/cart'
import uniqBy from 'lodash/uniqBy';
import { totalPriceSelector } from '../../selectors'

const Cart = ({ totalPrice, count, cart, removeFromCart }) => {

    const [cartIsVisible, showCart] = useState(false)

    return (
        <>
            <div className="header__elem">
                {`Всего: ${totalPrice} грн`}
            </div>
            <div className="cart-button" onClick={() => { showCart(!cartIsVisible) }}>
                <div>
                    <i className="fas fa-cart-arrow-down"></i>
                </div>
                <button className="cart-button__elem">
                    {`Корзина  (${count})`}
                </button>
            </div>
            {cartIsVisible &&
                <div className='cart-container'>
                    {cart.length === 0
                        ? <h2>Корзина пуста</h2>
                        : cart.map(elem =>
                            <div className="cart-container__elem" key={elem.id}>
                                <div className="cart-container__elem_title">{elem.title}</div>
                                <div className="cart-container__elem_count">{elem.count}</div>
                                <button
                                    className="cart-container__button"
                                    onClick={() => removeFromCart(elem.id)}
                                >Удалить</button>
                            </div>)}
                </div>}
        </>
    )
}

const mapState = state => ({
    totalPrice: totalPriceSelector(state),
    count: state.cart.items.length,
    cart: uniqBy(state.cart.items, o => o.id),
})

const mapDispatch = {
    removeFromCart,
}

export default connect(mapState, mapDispatch)(Cart);