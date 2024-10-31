import { User } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { current, login, register } from "../../app/services/auth";

interface IInitialState {
	user: User & { token: string } | null;
	isAuthenticated: boolean;
}

const initialState: IInitialState = {
	user: null,
	isAuthenticated: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(login.matchFulfilled, (state, action) => {
				state.user = action.payload;
				state.isAuthenticated = true;
			})
			.addMatcher(register.matchFulfilled, (state, action) => {
				state.user = action.payload;
				state.isAuthenticated = true;
			})
			.addMatcher(current.matchFulfilled, (state, action) => {
				state.user = action.payload;
				state.isAuthenticated = true;
			})
	}
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const selectUser = (state: RootState) => state.auth.user;