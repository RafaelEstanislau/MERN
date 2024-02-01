import axios from "axios";

const API_URL = "/api/vacinas/"

const createVacina = async (vacinaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, vacinaData, config)
    console.log(response.data);
    return response.data
}

const getVacinas = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    console.log(response);
    return response.data
}
const getVacina = async (vacinaId,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + vacinaId, config)
    return response.data
}


const vacinaService = {
    getVacina,
    getVacinas,
    createVacina,
}

export default vacinaService