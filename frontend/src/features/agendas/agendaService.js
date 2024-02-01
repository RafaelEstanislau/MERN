import axios from "axios";

const API_URL = "/api/agendas/"

const createAgenda = async (agendaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, agendaData, config)
    console.log(response);
    return response.data
}

const getAgendas = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    console.log(response);
    return response.data
}
const getAgenda = async (agendaId,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + agendaId, config)
    console.log(response);
    return response.data
}

const closeAgenda = async (agendaId,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + agendaId,{situacao: "Cancelado"}, config)
    console.log(response);
    return response.data
}

const completeAgenda = async (agendaId,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + agendaId,{situacao: "Realizado"}, config)
    console.log(response);
    return response.data
}


const agendaService = {
    createAgenda,
    getAgendas,
    getAgenda,
    closeAgenda,
    completeAgenda
}

export default agendaService