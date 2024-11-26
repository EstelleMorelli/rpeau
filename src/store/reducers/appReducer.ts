import { createReducer, createAction } from '@reduxjs/toolkit';

interface IAppState {
    isLoading: boolean,
}

const initialState: IAppState = {
    isLoading: false,
}

export const actionToggleLoader = createAction('app/TOGGLE_LOADER');


const appReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(actionToggleLoader, (state) => {
      state.isLoading = !state.isLoading;
    })
  });
  
  export default appReducer;
  
  