import { createSlice } from "@reduxjs/toolkit";
import { logoutAction } from "./StoreActions";
import { baseApi } from "./StoreQuerySlice";

export const globalInitialState = {
  isSideMenu: false,
  authUser: null,
};

const slice = createSlice({
  name: "global",
  initialState: globalInitialState,
  reducers: {
    toggleSideMenuAction: (state, { payload }) => {
      state.isSideMenu = payload !== undefined ? !!payload : !state.isSideMenu;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(logoutAction, () => ({ ...globalInitialState })),
});

export const { toggleSideMenuAction } = slice.actions;

export default slice;

export function getGlobalSliceStorageState({ authUser }) {
  return { authUser };
}
