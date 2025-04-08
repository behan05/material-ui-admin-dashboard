import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import settingReducer from "./settingSlice";


export const store = configureStore({
    reducer: {
        ui: uiReducer,
        setting: settingReducer,
    }
})