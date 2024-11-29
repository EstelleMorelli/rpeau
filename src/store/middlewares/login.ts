import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

interface Props {
    email: string;
    password: string;
}

// Thunk pour gérer l'action de connexion
const login = createAsyncThunk(
    'user/LOGIN', // Nom de l'action
    async ({ email, password }: Props, { rejectWithValue }) => {
        try {
            // Effectuer la requête API pour le login
            const response = await axiosInstance.post('/login', { email, password });
            return response.data; // Retourner les données en cas de succès
        } catch (error) {
            // Gérer les erreurs en les rejetant avec une valeur
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export default login;