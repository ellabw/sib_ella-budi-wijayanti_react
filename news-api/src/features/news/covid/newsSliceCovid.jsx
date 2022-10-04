import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const news_API_Covid =
  "https://newsapi.org/v2/everything?" +
  "q=covid&" +
  "from=2022-09-30&" +
  "sortBy=popularity&" +
  "apiKey=9ddab756845e4422a9d321f36b9b351a";

const initialState = {
  entities: [],
};

export const fetchNews = createAsyncThunk("articles/fetchNews", async () => {
  const response = await axios.get(news_API_Covid);
  return response.data;
});

const newsSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.entities = action.payload.articles;
    });
  },
});

export default newsSlice.reducer;