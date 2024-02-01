import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import vacinaService from "./vacinaService"

const initialState = {
    vacinas: [],
    vacina: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
export const createVacina = createAsyncThunk(
    "vacinas/create", 
    async (vacinaData, thunkApi) =>{
    try {
        const token = thunkApi.getState().auth.user.token
        return await vacinaService.createVacina(vacinaData, token)
    } catch (error) {
        const message = (error.response && 
                        error.response.data &&
                        error.response.data.message)||
                        error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const getVacinas = createAsyncThunk(
    "vacinas/getAll", 
    async (_, thunkApi) =>{
    try {
        const token = thunkApi.getState().auth.user.token
        return await vacinaService.getVacinas(token)
    } catch (error) {
        const message = (error.response && 
                        error.response.data &&
                        error.response.data.message)||
                        error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const getVacina = createAsyncThunk(
    "vacinas/get", 
    async (vacinaId, thunkApi) =>{
    try {
        const token = thunkApi.getState().auth.user.token
        return await vacinaService.getVacina(vacinaId,token)
    } catch (error) {
        const message = (error.response && 
                        error.response.data &&
                        error.response.data.message)||
                        error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const vacinaSlice = createSlice({
    name: "vacina",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder 
            .addCase(createVacina.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createVacina.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createVacina.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getVacinas.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getVacinas.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.vacinas = action.payload
            })
            .addCase(getVacinas.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getVacina.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getVacina.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.vacina = action.payload
            })
            .addCase(getVacina.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})
export const {reset} = vacinaSlice.actions
export default vacinaSlice.reducer