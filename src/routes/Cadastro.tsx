import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <>
            <div className="min-vh-100 min-vw-100 d-flex justify-content-center align-items-center" style={{backgroundColor: '#cbffc1ff'}}>
                <div className="p-5 border rounded shadow d-flex flex-column m-3 bg-light" style={{width: '400px'}}>
                    <h2 className="text-success text-center mb-5">Faça seu Cadastro</h2>
                    <form action="" className="mb-5 p-2">
                        <input type="email" name="email" id="emailRegister" className="form-control" placeholder="Email" required/>
                        <input type="password" name="password" id="passwordRegister" className="form-control mt-4" placeholder="Senha" required/>
                        <input type="text" name="name" id="nameRegister" className="form-control mt-4" placeholder="Nome Completo" required/>
                        <input type="text" name="address" id="addressRegister" className="form-control mt-4" placeholder="Endereço" required/>
                        <input type="text" name="city" id="cityRegister" className="form-control mt-4" placeholder="Cidade" required/>
                        <input type="text" name="state" id="stateRegister" className="form-control mt-4" placeholder="Estado" required/>
                    </form>

                    <button className="btn btn-success">Entrar</button>
                    <Link to={'/auth/login'} className="text-center mt-2">Fazer Login</Link>
                </div>
            </div>
        </>
    )
}