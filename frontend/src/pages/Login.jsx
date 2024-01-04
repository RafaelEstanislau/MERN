import { useState } from "react"
import {toast} from "react-toastify"
import { FaSignInAlt } from "react-icons/fa"
import {useSelector, useDispatch} from "react-redux"
import {login} from "../features/auth/authSlice"

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const { email, password } = formData

    const dispatch = useDispatch()
    const {user, isLoading, isSuccess, message} = useSelector(state => state.auth)

    const handleChange = (e) => {
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password,
        }
        dispatch(login(userData))
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Entrar
                </h1>
            </section>
            <section className="form">
                <form onSubmit={handleSubmit}>
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
                        <button className="btn btn-block">
                            Enviar
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login
