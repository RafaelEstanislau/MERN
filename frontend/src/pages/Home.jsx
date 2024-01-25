import {Link} from "react-router-dom"
import {FaQuestionCircle, FaTicketAlt} from "react-icons/fa"

function Home() {
  return (
    <>
      <section className="heading">
        <h1>Gerencie sua agenda de vacinação</h1>
        <p>Escolha uma das opções abaixo</p>
      </section>
      <Link to="/nova-agenda" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Cadastrar uma nova vacina
      </Link>
      <Link to="/vacinas" className="btn btn-block">
        <FaTicketAlt /> Ver minhas vacinas
      </Link>
    </>
  )
}

export default Home
