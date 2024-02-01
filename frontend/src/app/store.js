import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice"
import agendaReducer from "../features/agendas/agendaSlice"
import vacinaReducer from "../features/vacinas/vacinaSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    agendas: agendaReducer,
    vacinas: vacinaReducer
  },
});
