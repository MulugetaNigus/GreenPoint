// to auth the admins
import { createSlice } from '@reduxjs/toolkit'

const AuthUserSlice = createSlice({
    name: "auth",
    initialState: {
        value: false
    },
    reducers: {
        AuthenticateUser: (state , action) => {
            state.value = action.payload;
        }
    }
});

export const { AuthenticateUser } = AuthUserSlice.actions;
export default AuthUserSlice.reducer;