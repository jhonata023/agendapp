import { Link } from "react-router-dom"
import { useState } from "react";

const sendLogin = (email: string, password: string) => {
    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    })
        .then(response => response.json())
        .then(res => {
            if (res.redirectTo) {
                window.localStorage.setItem('token', 'asd')
                window.location.href = res.redirectTo;
            }
            console.log(res);
        })
}

export const Login = () => {
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    return (
        <>
            <div className="min-vh-100 min-vw-100 d-flex justify-content-center align-items-center" style={{backgroundColor: '#c1e0ffff'}}>
                <div className="p-5 border rounded shadow d-flex flex-column m-3 bg-light" style={{width: '400px'}}>
                    <h2 className="text-primary text-center mb-5">Faça Login</h2>
                    <form action="" className="mb-5 p-2">
                        <input value={emailLogin} onChange={e => setEmailLogin(e.target.value)} 
                            type="email" name="email" id="emailLogin" className="form-control" 
                            placeholder="Email" required/>
                        <input value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} 
                            type="password" name="password" id="passwordLogin" className="form-control mt-4" 
                            placeholder="Senha" required/>
                    </form>

                    <button className="btn btn-primary" onClick={() => sendLogin(emailLogin, passwordLogin)}>Entrar</button>
                    <Link to={'/auth/register'} className="text-center mt-2">Fazer Cadastro</Link>
                </div>
            </div>
        </>
    )
}