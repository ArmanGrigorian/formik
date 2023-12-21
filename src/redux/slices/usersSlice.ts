import { db } from "../../../db.ts";
import { I_initialState } from "../../types.ts";
import type { RootState } from "../store";

import { createSlice } from "@reduxjs/toolkit";

const initialState: I_initialState = {
	all: db,
};

const users = createSlice({
	name: "users",

	initialState,

	reducers: {
		addUser: (state, { payload }) => {
			state.all.push(payload);
		},
		removeUser: (state, { payload }) => {
			state.all = state.all.filter((user) => user.id !== payload);
		},
	},
});

export const selectAll = (state: RootState) => state.users.all;
export const { addUser, removeUser } = users.actions;
export default users.reducer;
