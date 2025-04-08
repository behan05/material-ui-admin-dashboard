import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    defaultSidebarButtonBgColor: "#1a8e88",
    defaultSidebarBgColor: "linear-gradient(135deg, #111519, #D8D8E9)",
    defaultNavPosition: "fixed",
    themeMode: "dark",
}

const settingSlice = createSlice({
    name: "setting",
    initialState,

    reducers: {
        updateSidebarButtonBgColor: (state, action) => {
            state.defaultSidebarButtonBgColor = action.payload;
        },

        updateSidebarBgColor: (state, action) => {
            state.defaultSidebarBgColor = action.payload;
        },

        updateSNavPosition: (state, action) => {
            state.defaultNavPosition = action.payload;
        },

        toggleThemeMode: (state) => {
            state.themeMode = state.themeMode === "light" ? "dark" : "light";
        }
    }
})

// Export the action and reducer
export const {
    updateSidebarButtonBgColor,
    updateSidebarBgColor,
    updateSNavPosition,
    toggleThemeMode
} = settingSlice.actions;
export default settingSlice.reducer;