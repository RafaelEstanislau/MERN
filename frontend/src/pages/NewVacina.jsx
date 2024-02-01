import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {toast} from "react-toastify"
import { createVacina, reset } from "../features/vacinas/vacinaSlice"
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"


function NewVacina() {
  const {isError, isSuccess, message} = useSelector((state) => state.vacinas)
  const [titulo, setTitulo] = useState("");
  const [doses, setDoses] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() =>{
    if(isError)
    toast.error(message)
    
    if(isSuccess){
      dispatch(reset())
      navigate("/")
    }

    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  const vacinaData = {
    titulo: titulo,
    doses: doses
  }
  const onSubmit = (e) =>{
    e.preventDefault()
    dispatch(createVacina({vacinaData}))
  }
  
  return (
    <>
      <BackButton url= "/" />
      <section className="heading">
        <h1>Cria uma nova vacina</h1>
        <p>Por favor preencha o formulário abaixo</p>
      </section>
      <section className="form">
       <form onSubmit={onSubmit}>
       <div className="form-group">
            <label htmlFor="name">Nome do vacina</label>
            <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
        </div>
        <div className="form-group">
            <label htmlFor="name">Doses da vacina</label>
            <input type="text" className="form-control" value={doses} onChange={(e) => setDoses(e.target.value)} ></input>
        </div>
        <div className="form-group">
            <button className="btn btn-block">Cadastrar</button>
        </div>
       </form>
      </section>
    </>
  )
}

export default NewVacina
