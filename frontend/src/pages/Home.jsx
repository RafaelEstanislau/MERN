import {Link} from "react-router-dom"
import {FaQuestionCircle, FaTicketAlt, FaClinicMedical} from "react-icons/fa"

function Home() {
  return (
    <>
      <section className="heading">
        <h1>Gerencie sua agenda de vacinação</h1>
        <p>Escolha uma das opções abaixo</p>
      </section>
      <Link to="/nova-agenda" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Cadastrar uma nova agenda
      </Link>
      <Link to="/agendas" className="btn btn-block">
        <FaTicketAlt /> Ver minhas agendas
      </Link>
      <Link to="/nova-vacina" className="btn btn-reverse btn-block">
        <FaClinicMedical /> Cadastrar uma nova vacina
      </Link>
    </>
  )
}

export default Home
