import { createSlice } from "@reduxjs/toolkit";

export const infoBarSlice = createSlice({
    name: 'infoBarSlice',
    initialState: { active: false },
    reducers: {
        toggleInfoBar: (state, action) => {
            state.active = !state.active;
        },
        setInfoBar: (state, action) => {
            state.active = action.payload.active;
        },
    }
});

export const { toggleInfoBar, setInfoBar } = infoBarSlice.actions;
export default infoBarSlice.reducer;