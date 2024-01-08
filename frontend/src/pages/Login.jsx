import { useState, useEffect } from "react"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"
import { FaSignInAlt } from "react-icons/fa"
import {useSelector, useDispatch} from "react-redux"
import {login, reset} from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const { email, password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user, isLoading, isError, isSuccess, message} =
     useSelector(state => state.auth)

     useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate("/")
        }
        dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])
    
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

    if(isLoading){
        return <Spinner/>
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
