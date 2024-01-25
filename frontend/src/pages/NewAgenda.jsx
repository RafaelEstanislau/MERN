import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {toast} from "react-toastify"
import { createAgenda, reset } from "../features/agendas/agendaSlice"
import Spinner from "../components/Spinner"


function NewAgenda() {
  const {user} = useSelector((state) => state.auth)
  const {isLoading, isError, isSuccess, message} = useSelector((state) => state.agenda)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [data, setData] = useState(new Date())

  const onSubmit = (e) =>{

  }
  return (
    <>
      <section className="heading">
        <h1>Cria uma nova agenda</h1>
        <p>Por favor preencha o formulário abaixo</p>
      </section>
      <section className="form">
        <div className="form-group">
            <label htmlFor="name">Nome do usuário</label>
            <input type="text" className="form-control" value={name} disabled></input>
        </div>
        <div className="form-group">
            <label htmlFor="name">Email do usuário</label>
            <input type="email" className="form-control" value={email} disabled></input>
        </div>
       <form onSubmit={onSubmit}>
        <div className="form-group">
        <label htmlFor="data">Data do agendamento</label>
       <input
              type="date"
              className="form-control"
              value={data.toISOString().split("T")[0]}
              onChange={(e) => setData(new Date(e.target.value))}
            />
        </div>
        <div className="form-group">
            <button className="btn btn-block">Cadastrar</button>
        </div>
       </form>
      </section>
    </>
  )
}

export default NewAgenda
