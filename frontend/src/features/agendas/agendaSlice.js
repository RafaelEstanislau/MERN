import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import agendaService from "./agendaService"

const initialState = {
    agendas: [],
    agenda: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
export const createAgenda = createAsyncThunk(
    "agendas/create", 
    async (agendaData, thunkApi) =>{
    try {
        const token = thunkApi.getState().auth.user.token
        return await agendaService.createAgenda(agendaData, token)
    } catch (error) {
        const message = (error.response && 
                        error.response.data &&
                        error.response.data.message)||
                        error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const getAgendas = createAsyncThunk(
    "agendas/getAll", 
    async (_, thunkApi) =>{
    try {
        const token = thunkApi.getState().auth.user.token
        return await agendaService.getAgendas(token)
    } catch (error) {
        const message = (error.response && 
                        error.response.data &&
                        error.response.data.message)||
                        error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const getAgenda = createAsyncThunk(
    "agendas/get", 
    async (agendaId, thunkApi) =>{
    try {
        const token = thunkApi.getState().auth.user.token
        return await agendaService.getAgenda(agendaId,token)
    } catch (error) {
        const message = (error.response && 
                        error.response.data &&
                        error.response.data.message)||
                        error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const closeAgenda = createAsyncThunk(
    "agendas/close", 
    async (agendaId, thunkApi) =>{
    try {
        const token = thunkApi.getState().auth.user.token
        return await agendaService.closeAgenda(agendaId,token)
    } catch (error) {
        const message = (error.response && 
                        error.response.data &&
                        error.response.data.message)||
                        error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const completeAgenda = createAsyncThunk(
    "agendas/complete", 
    async (agendaId, thunkApi) =>{
    try {
        const token = thunkApi.getState().auth.user.token
        return await agendaService.completeAgenda(agendaId,token)
    } catch (error) {
        const message = (error.response && 
                        error.response.data &&
                        error.response.data.message)||
                        error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const agendaSlice = createSlice({
    name: "agenda",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder 
            .addCase(createAgenda.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createAgenda.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createAgenda.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAgendas.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAgendas.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.agendas = action.payload
            })
            .addCase(getAgendas.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAgenda.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAgenda.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.agenda = action.payload
            })
            .addCase(getAgenda.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(closeAgenda.fulfilled, (state, action) => {
                state.isLoading = false
                state.agendas.map((agenda) => agenda._id === action.payload._id ? (agenda.situacao = "Cancelado") : agenda)
            })
            .addCase(completeAgenda.fulfilled, (state, action) => {
                state.isLoading = false
                state.agendas.map((agenda) => agenda._id === action.payload._id ? (agenda.situacao = "Realizado") : agenda)
            })
    }
})
export const {reset} = agendaSlice.actions
export default agendaSlice.reducer