import { useState } from "react"
import {toast} from "react-toastify"
import { FaUser } from "react-icons/fa"

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    })
    const { name, email, password, password2 } = formData

    const handleChange = (e) => {
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password !== password2){
            toast.error("Confirmação da senha e senha devem ser iguais")
        }
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Registrar
                </h1>
                <p>Crie sua conta</p>
            </section>
            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        id="name" 
                        name="name"
                        value={name} 
                        onChange={handleChange}
                        placeholder="Insira seu nome"
                        required />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email" 
                        className="form-control"
                        id="email" 
                        name="email"
                        value={email} 
                        onChange={handleChange}
                        placeholder="Insira seu email"
                        required />
                    </div>
                    <div className="form-group">
                        <input 
                        type="password" 
                        className="form-control"
                        id="password" 
                        name="password"
                        value={password} 
                        onChange={handleChange}
                        placeholder="Insira sua senha"
                        required />
                    </div>
                    <div className="form-group">
                        <input 
                        type="password" 
                        className="form-control"
                        id="password2" 
                        name="password2"
                        value={password2} 
                        onChange={handleChange}
                        placeholder="Confirme sua senha"
                        required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">
                            Enviar
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register
