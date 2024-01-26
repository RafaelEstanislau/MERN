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

const agendaService = {
    createAgenda,
    getAgendas
}

export default agendaService