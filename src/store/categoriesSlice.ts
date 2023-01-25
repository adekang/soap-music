import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { playlistCategories } from "@/utils";

export interface Category {
  name: string,
  enable: boolean,
  bigCat: string
}

export interface Categories {
  enabledPlaylistCategories: Category[];
  playlists: any;
}

const initialState: Categories = {
  enabledPlaylistCategories: playlistCategories.slice(0, 9),
  playlists: []
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    changeCategories: (state, action: PayloadAction<Category[]>) => {
      state.enabledPlaylistCategories = action.payload;
    },
    changePlaylists: (state, action: PayloadAction<any[]>) => {
      state.playlists = action.payload;
    }
  }
});


export const addDataToCategory = (data: Category) => (dispatch: any, getState: any) => {
  const oldCategories = getState().categories.enabledPlaylistCategories;
  const index = oldCategories.findIndex((c: Category) => c.name === data.name);
  if (index != -1) {
    const res = oldCategories.filter((c: Category) => c.name != data.name);
    dispatch(changeCategories(res));
  } else {
    const res = [...oldCategories, data];
    dispatch(changeCategories(res));
  }
};


// Action creators are generated for each case reducer function
export const { changeCategories, changePlaylists } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
