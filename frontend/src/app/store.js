import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice"
import agendaReducer from "../features/agendas/agendaSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    agenda: agendaReducer
  },
});
