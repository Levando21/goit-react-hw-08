/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
	"auth/register",
	async (credetials, thunkAPI) => {
		try {
			const { data } = await axios.post("users/signup", credetials);
			setAuthHeader(data.token);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const logIn = createAsyncThunk(
	"auth/login",
	async (credetials, thunkAPI) => {
		try {
			const { data } = await axios.post("users/login", credetials);
			setAuthHeader(data.token);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
	try {
		await axios.post("user/logout");
		clearAuthHeader();
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const refreshUser = createAsyncThunk(
	"auth/refresh",
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();

		const persistedToken = state.auth.token;

		if (persistedToken === null) {
			return thunkAPI.rejectWithValue("Unable to fetch user");
		}

		try {
			setAuthHeader(persistedToken);

			const { data } = await axios.get("users/current");
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
