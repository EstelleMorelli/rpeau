import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appReducer';

const store = configureStore({
  reducer: {
    appReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;