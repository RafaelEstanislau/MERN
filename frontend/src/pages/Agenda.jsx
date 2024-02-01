import { useSelector, useDispatch } from "react-redux"
import { getAgenda, reset, closeAgenda, completeAgenda} from "../features/agendas/agendaSlice"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import {toast} from "react-toastify"

function Agenda() {

  const {agenda, isLoading, isSuccess, isError, message} = useSelector((state) => state.agendas)
  const params = useParams()
  const dispatch = useDispatch()
  const {agendaId} = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if(isError){
        toast.error(message)
    }
    dispatch(getAgenda(agendaId))
  }, [isError, message, agendaId])

  const onAgendaClose = () =>{
    dispatch(closeAgenda(agendaId))
    toast.success("Agenda cancelada com sucesso")
    navigate("/agendas")
  }

  
  const onAgendaComplete = () =>{
    dispatch(completeAgenda(agendaId))
    toast.success("Agenda realizada com sucesso")
    navigate("/agendas")
  }

  if(isLoading)
  return <Spinner/>

  if(isError)
  return<h3>Algo deu errado, tente novamente</h3>

  return <div className="ticket-page">
    <header className="ticket-header">
        <BackButton url="/agendas"/>
        <h2>Agenda ID: {agenda._id}
        </h2>
        <h2>Vacina ID: {agenda.vacinaId}
        <span className={`status status-${agenda.situacao}`}>
            {agenda.situacao}
        </span>
        </h2>
        <h3>Data da criação: {new Date(agenda.createdAt).toLocaleString("pt-BR")}</h3>
        <hr />
    </header>
    {agenda.situacao !== "Cancelado" &&(
        <button onClick={onAgendaClose} className="btn btn-block btn-danger">Cancelar agenda</button>
    )}
    {agenda.situacao !== "Realizado" && (
        <button onClick={onAgendaComplete} className="btn btn-block btn-success">Marcar como realizado</button>
    )}
  </div>
}

export default Agenda
