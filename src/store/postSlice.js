import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: null,
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getAllPosts: (state, action) => {
            // console.log(action.payload)
            state.posts = action.payload.documents
        }
    }

})

export const {getAllPosts} = postsSlice.actions;

export default postsSlice.reducer;