import { Link } from "react-router-dom"
function AgendaItem({agenda}) {
  return (
    <div className="ticket">
      <div>{new Date(agenda.createdAt).toLocaleString("pt-BR")}</div>
      <div className={`status status-${agenda.status}`}>
        {agenda.status}
      </div>
      <Link to={`/agenda/${agenda._id}`} className="btn btn-reverse btn-sm">
        Abrir
      </Link>
    </div>
  )
}

export default AgendaItem
