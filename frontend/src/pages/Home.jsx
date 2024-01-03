import {Link} from "react-router-dom"

function Home() {
  return (
    <>
      <section className="heading">
        <h1>Gerencie sua agenda de vacinação</h1>
        <p>Escolha uma das opções abaixo</p>
      </section>
      <Link to="/nova-vacina"
    </>
  )
}

export default Home
