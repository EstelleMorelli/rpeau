import { createReducer, createAction } from '@reduxjs/toolkit';
import login from '../middlewares/login';

interface IAppState {
    isLoading: boolean,
    connectedUser: string,
    loginError:string | undefined, 
}

const initialState: IAppState = {
    isLoading: false,
    connectedUser: '',
    loginError: '',
}

export const actionToggleLoader = createAction('app/TOGGLE_LOADER');


const appReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(actionToggleLoader, (state) => {
      state.isLoading = !state.isLoading;
    })
    .addCase(login.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.connectedUser = action.payload.user.name;
      state.isLoading = false;
    })
    .addCase(login.rejected, (state) => {
      state.loginError = "Problème de connexion : identifiants incorrects";
      state.isLoading = false;
    })
  });
  
  export default appReducer;
  
  