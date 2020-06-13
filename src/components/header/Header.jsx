import React from 'react';
import './header.scss';

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
                        className="header__elem">
                        Войти в аккаунт
                            </button>}
            </div>
        </header>
    )
}

export default Header;