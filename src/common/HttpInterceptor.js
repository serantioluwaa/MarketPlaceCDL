import store from "common/Store";
import { logoutAction } from "common/StoreActions";
import { baseHttp } from "./Http";

baseHttp.interceptors.request.use((config) => {
  const { Token } = store.getState().global.authUser || {};

  if (Token) {
    config.headers.Authorization = `Bearer ${Token}`;
  }

  return config;
});

baseHttp.interceptors.response.use(undefined, (error) => {
  if (error?.response?.status === 401) {
    store.dispatch(logoutAction());
  }
  return Promise.reject(error);
});
