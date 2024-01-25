import axios from "axios";

const API_URL = "/api/agendas/"

const createAgenda = async (agendaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, agendaData, config)
    return response.data
}
const agendaService = {
    createAgenda
}

export default agendaService