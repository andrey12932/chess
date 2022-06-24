import React from 'react';

const Auth = () => {
    return (
        <div className="auth">
            <form action="#">
                <input type="text" name="name" id="name" value={'Введите имя'}/>
                <input type="button" value="Регистрация" />
            </form>
        </div>
    );
}

export default Auth;