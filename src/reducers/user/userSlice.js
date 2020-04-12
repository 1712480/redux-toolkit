import { createSlice } from '@reduxjs/toolkit';

var initialUser = [
    {
        id: 1,
        name: 'Hung',
        email: 'hung@pyco.com',
        active: true
    },
    {
        id: 2,
        name: 'Long',
        email: 'long@pyco.com',
        active: false
    },
    {
        id: 3,
        name: 'Binh',
        email: 'binh@pyco.com',
        active: false
    },
    {
        id: 4,
        name: 'Chau',
        email: 'chau@pyco.com',
        active: true
    }
] 

var nextID = initialUser.length + 1;

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        addUser: (state, action) => {
            return [...state, {
                id: nextID++,
                ...action.payload                
            }]
        },
        deleteUser: (state, action) => {
            return state.filter( user => user.id !== action.payload )
        }
    }
});

export const { addUser, deleteUser } = userSlice.actions;

export const selectUser = state => state.user

export default userSlice.reducer;