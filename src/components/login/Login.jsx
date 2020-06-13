import React, { useState } from 'react';
import './login.scss'

const Login = ({ verify }) => {
    const [loginText, handleLoginText] = useState('')
    const [passwordText, handlePasswordText] = useState('')

    const handleChangeLoginInput = (e) => {
        handleLoginText(e.target.value)
    }

    const handleChangePasswordInput = (e) => {
        handlePasswordText(e.target.value)
    }

    return (
        <div className="form">
            <div className="form__container">
                <p>Логин</p>
                <input
                    type="text"
                    className="form__container_input"
                    placeholder="Ведите email"
                    onChange={handleChangeLoginInput}
                    value={loginText}
                />
                <p>Пароль</p>
                <input
                    type="text"
                    className="form__container_input"
                    placeholder="Ведите пароль"
                    onChange={handleChangePasswordInput}
                    value={passwordText}
                />
                <button
                    className="form__container_button"
                    onClick={() => {
                        verify(loginText, passwordText);
                    }}
                >
                    Войти
                </button>
            </div>
        </div>
    )
}

export default Login;