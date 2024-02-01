import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NewAgenda from "./pages/NewAgenda"
import PrivateRoute from "./components/PrivateRoute"
import Agendas from "./pages/Agendas"
import Agenda from "./pages/Agenda"
import NewVacina from "./pages/NewVacina"

function App() {
  return (
    <>
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/registrar" element={<Register />}/>
          <Route path="/nova-agenda" element={<PrivateRoute />}>
            <Route path="/nova-agenda" element={<NewAgenda/>}/>
          </Route>
          <Route path="/nova-vacina" element={<PrivateRoute />}>
            <Route path="/nova-vacina" element={<NewVacina/>}/>
          </Route>
          <Route path="/agendas" element={<PrivateRoute />}>
            <Route path="/agendas" element={<Agendas/>}/>
          </Route>
          <Route path="/agenda/:agendaId" element={<PrivateRoute />}>
            <Route path="/agenda/:agendaId" element={<Agenda/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
