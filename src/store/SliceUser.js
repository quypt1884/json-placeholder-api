import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Services from "../helpers/Services";

// fetch api
export const createUser = createAsyncThunk(
    'users/create',
    async(user) => {
        console.log(user);
        const newUser = {
            id: Date.now(),
              name:  user.name,
                address:
                {
                    city : user.city,
                    geo:{
                        lat: user.lat,
                        lng: user.lng
                    },
                    street: user.street,
                    suite: user.suite,
                    zipcode: user.zipcode
                },
                company:
                    {
                    bs: user.bs,
                    catchPhrase :user.catchPhrase,
                    companyName: user.companyName
                    },
                email: user.email,
                phone: user.phone,
                username: user.username,
                website: user.website,
        }
        const res = await Services.create(newUser);
        return res.data
    }
);

export const getListUser = createAsyncThunk(
    "users/retrieve",
    async () => {
      const res = await Services.getAll();
      return res.data;
    }
);

export const updateUser = createAsyncThunk(
    "users/update",
    async ({id, data}) => {
        const res = await Services.update(id,data);
        return res.data;
    }
);

export const deleteUser = createAsyncThunk(
    'users/delete',
    async(id)=> {
        await Services.remove(id);
        return id;
    }
);

const SliceUser = createSlice({
    name: 'users',
    initialState:
        {
            totalLenght: 0,
            users: []
        },
    extraReducers:  {
        [createUser.fulfilled] : (state, action) => {
            state.users.push(action.payload);
        },
        [getListUser.fulfilled] : (state, action) => {
            state.users = [...action.payload];
        },
        [updateUser.fulfilled] : (state, action) => {
            const id = state.users.findIndex(user => user.id === action.payload.id);
            state.users[id] = {
                ...state.users[id],
                ...action.payload,
            };
        },
        [deleteUser.fulfilled]: (state,action) => {
            const newUserList = state.users.filter(
                (user) => user.id !== action.payload
              );
            state.users = newUserList;
            state.totalLenght = newUserList.length
        }
    },
});
const { reducer } = SliceUser;
export default reducer;