import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NewAgenda from "./pages/NewAgenda"
import PrivateRoute from "./components/PrivateRoute"
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
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
