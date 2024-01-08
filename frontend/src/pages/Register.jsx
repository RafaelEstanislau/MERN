import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify"
import { FaUser } from "react-icons/fa"
import {useSelector, useDispatch} from "react-redux"
import {register, reset} from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        gender: "", 
        state: ""   
    })
    const { name, email, password, password2, gender, state } = formData

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
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            toast.error("Confirmação da senha e senha devem ser iguais")
        }else{
            const userData = {
                name,
                email,
                password,
                gender,
                state
            }
            dispatch(register(userData))
        }
    }
    const estadosBrasileiros = [
        { uf: 'AC', nome: 'Acre' },
        { uf: 'AL', nome: 'Alagoas' },
        { uf: 'AP', nome: 'Amapá' },
        { uf: 'AM', nome: 'Amazonas' },
        { uf: 'BA', nome: 'Bahia' },
        { uf: 'CE', nome: 'Ceará' },
        { uf: 'DF', nome: 'Distrito Federal' },
        { uf: 'ES', nome: 'Espírito Santo' },
        { uf: 'GO', nome: 'Goiás' },
        { uf: 'MA', nome: 'Maranhão' },
        { uf: 'MT', nome: 'Mato Grosso' },
        { uf: 'MS', nome: 'Mato Grosso do Sul' },
        { uf: 'MG', nome: 'Minas Gerais' },
        { uf: 'PA', nome: 'Pará' },
        { uf: 'PB', nome: 'Paraíba' },
        { uf: 'PR', nome: 'Paraná' },
        { uf: 'PE', nome: 'Pernambuco' },
        { uf: 'PI', nome: 'Piauí' },
        { uf: 'RJ', nome: 'Rio de Janeiro' },
        { uf: 'RN', nome: 'Rio Grande do Norte' },
        { uf: 'RS', nome: 'Rio Grande do Sul' },
        { uf: 'RO', nome: 'Rondônia' },
        { uf: 'RR', nome: 'Roraima' },
        { uf: 'SC', nome: 'Santa Catarina' },
        { uf: 'SP', nome: 'São Paulo' },
        { uf: 'SE', nome: 'Sergipe' },
        { uf: 'TO', nome: 'Tocantins' }
      ];
      

    if(isLoading){
        return <Spinner />
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
                        <select
                            className="form-control"
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecione o sexo</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select
                            className="form-control"
                            id="state"
                            name="state"
                            value={state}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecione o estado</option>
                            {estadosBrasileiros.map((estado, index) => (
                                <option key={index} value={estado.uf}>
                                    {estado.nome} - {estado.uf}
                                </option>
                            ))}
                        </select>
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
