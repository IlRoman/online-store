import React from 'react';
import './header.scss';
import Cart from '../../components/cart/Cart'

const Header = ({ isLoggedIn, login }) => {
    return (
        <header className="header">
            <div className="header__container">
                {isLoggedIn
                    ? <button
                        className="header__elem"
                        onClick={login}>
                        Выйти из Аккаунта
                    </button>
                    : <button
                        className="header__elem"
                        onClick={login}>
                        Войти в аккаунт
                            </button>}
                <Cart />
            </div>
        </header>
    )
}

export default Header;