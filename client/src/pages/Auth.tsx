import React, { FormEvent } from 'react';
import '../scss/style.scss';
import { RequestInit } from 'node-fetch';

const Auth = () => {

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        /*let params: RequestInit = */
        let userName = document.forms[0].id1.value;
        let mail = document.forms[0].email.value;
        let pass = document.forms[0].password.value;
        const body = JSON.stringify({
            name: userName,
            email: mail,
            password: pass,
        });
        console.log(body)
        const data = await fetch(process.env.REACT_APP_DB_SERVER + '/api/user/reg?asd=123', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        const res = await data.json();

        console.log(await data);
        //const res = await fetch();
    }

    return (
        <div className="auth">
            <div className="auth-container">
                <h2 className="auth-title">Регистрация</h2>
                <form onSubmit={handleSubmit} className='auth-form' action="#">
                    <input type="text" name="id1" id="name" value={undefined} placeholder={'Введите имя'}/>
                    <input type="email" name="email" id="email" value={undefined} placeholder={'Введите почту'}/>
                    <input type="password" name="password" id="password" value={undefined} placeholder={'Введите пароль'}/>
                    <input type="submit" value="Регистрация" />
                </form>
            </div>
        </div>
    );
}

export default Auth;