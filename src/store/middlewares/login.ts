import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";
import { AxiosError } from "axios"; // Importer AxiosError

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
            // Vérification si l'erreur est une instance d'AxiosError
            if (error instanceof AxiosError) {
                // Gérer les erreurs d'API avec la réponse ou message
                return rejectWithValue(error.response?.data || error.message);
            }
            // Gérer les erreurs génériques qui ne sont pas des AxiosError
            return rejectWithValue("An unexpected error occurred.");
        }
    }
);

export default login;
