import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Play {
  playing: boolean;
  currentTrack: {
    id: number;
  };
}

const initialState: Play = {
  playing: false,
  currentTrack: {
    id: 0
  }
};


export const PlaySlice = createSlice({
  name: "play",
  initialState,
  reducers: {
    changePlaying: (state, action: PayloadAction<boolean>) => {
      state.playing = action.payload;
    },
    changeCurrentTrack: (state, action: PayloadAction<any>) => {
      state.currentTrack = action.payload;
    }
  }
});


export const { changePlaying, changeCurrentTrack } =
  PlaySlice.actions;

export default PlaySlice.reducer;
