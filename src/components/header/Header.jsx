import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <button className="header__elem login">Войти в аккаунт</button>
                {
                    <div className="header__exit">
                        <button className="header__exit_button" >
                            Выйти из Аккаунта
                    </button>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header;