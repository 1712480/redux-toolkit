import { createSlice } from '@reduxjs/toolkit';
import filterState from './filterState';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterState.ALL,
    reducers: {
        setFilter: (state, action) => {
            return action.payload
        }
    }
})

export const { setFilter } = filterSlice.actions;

export const selectState = state => state.filter;

export default filterSlice.reducer;