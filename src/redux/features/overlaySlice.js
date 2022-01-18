import { createSlice } from "@reduxjs/toolkit";

export const overlaySlice = createSlice({
    name: 'overlaySlice',
    initialState: { active: false },
    reducers: {
        toggleOverlay: (state, action) => {
            state.active = !state.active;
        },
        setOverlay: (state, action) => {
            state.active = action.payload.active;
        },
    }
});

export const { toggleOverlay, setOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;