import { createSlice } from "@reduxjs/toolkit";
import { PostSliceProps } from "./type";

const initialState: PostSliceProps = {
  data: [],
  loading: true,
}
const slice = createSlice({
  name: "coba",
  initialState,
  reducers: {
    storeDataPosts: (state, action) => {
      state.data = action.payload;
    }
  },
  selectors: {
    getPostsStore: state => state,
    getPosts: state => state.data
  }
});

export const { storeDataPosts } = slice.actions;
export const { getPosts, getPostsStore } = slice.selectors;

export default slice.reducer;