import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAgendas, reset } from "../features/agendas/agendaSlice"
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"
import AgendaItem from "../components/AgendaItem"

const Agendas = () => {

    const {agendas, isLoading, isSuccess} = useSelector((state) => state.agendas)
    const dispatch = useDispatch()
    console.log(agendas);
    useEffect(() =>{
        return () =>{
            if(isSuccess)
            dispatch(reset())
        }
    }, [dispatch, isSuccess])

    useEffect(() =>{
        dispatch(getAgendas())
    }, [getAgendas])

    if(isLoading)
    return <Spinner/>

  return (
    <>
      <BackButton url="/"/>
      <h1>Agendas</h1>
      <div className="tickets">
        <div className="ticket-headings">
            <div>Data</div>
            <div>Situacao</div>
            <div></div>
        </div>
            <div>
              {agendas.map((agenda) => (
                <AgendaItem key={agenda._id} agenda={agenda}/>
            ))}
            </div>
        
      </div>
    </>
  )
}

export default Agendas
