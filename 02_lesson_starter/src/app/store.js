import { configureStore } from "@reduxjs/toolkit";
// you need to import any reducer you make
import postsReducer from '../features/posts/postSlice'

export const store = configureStore({
    reducer: {
        posts:postsReducer,
    }
})