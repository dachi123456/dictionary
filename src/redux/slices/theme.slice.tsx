import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ThemeState {
    darkMode: boolean;
}

const initialState: ThemeState = {
    darkMode: false
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const selectDarkMode = (state: RootState) => state.theme.darkMode;
