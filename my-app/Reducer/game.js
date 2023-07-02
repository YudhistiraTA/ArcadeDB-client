import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGame = createAsyncThunk("games/fetchGame", async () => {
  try {
    const response = await axios.get(
      "https://db14-111-68-121-186.ngrok-free.app/games"
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
export const fetchArcadeDetail = createAsyncThunk(
  "games/fetchGameDetail",
  async (id) => {
    try {
      const response = await axios.get(
        `https://db14-111-68-121-186.ngrok-free.app/detail/${id}`
      );
      console.log(response.data, "asdasdasd");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const fetchArcade = createAsyncThunk("games/fetchArcade", async () => {
  try {
    const response = await axios.get(
      "https://db14-111-68-121-186.ngrok-free.app/main?lat=-6.3053252&lng=106.6435346"
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
export const fetchBrand = createAsyncThunk("games/fetchBrand", async () => {
  try {
    const response = await axios.get(
      "https://db14-111-68-121-186.ngrok-free.app/brands"
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const gameSlice = createSlice({
  name: "games",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGame.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

const arcadeDetailSlice = createSlice({
  name: "arcadesDetail",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArcadeDetail.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

const arcadeSlice = createSlice({
  name: "arcades",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArcade.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

const brandSlice = createSlice({
  name: "brands",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBrand.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

const gameReducer = gameSlice.reducer;
const arcadeReducer = arcadeSlice.reducer;
const brandReducer = brandSlice.reducer;
const arcadeDetailReducer = arcadeDetailSlice.reducer;

export { gameReducer, arcadeReducer, brandReducer, arcadeDetailReducer };
export default {
  gameReducer,
  arcadeReducer,
  brandReducer,
  arcadeDetailReducer,
};
