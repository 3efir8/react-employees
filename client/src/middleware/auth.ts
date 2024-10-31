import { createListenerMiddleware } from "@reduxjs/toolkit";
import { login } from "../app/services/auth";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
	matcher: login.matchFulfilled,
	effect: async (action, listenerApi) => {
		listenerApi.cancelActiveListeners();

		if (action.payload.token) {
			//localStorage.setItem('token', action.payload.token);
			document.cookie = `token=${action.payload.token}`
		}
	}
});