import React from "react";
import ReactDOM from "react-dom";
import { IconButton, Icon } from "@mui/material";
import "./index.css";
import "common/HttpInterceptor";
import { notistackRef } from "common/Constants";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "common/Store";
import { SnackbarProvider } from "notistack";
import AppThemeProvider from "AppThemeProvider";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AsyncUIProvider from "common/AsyncUIProvider";

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <SnackbarProvider
            ref={notistackRef}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
            preventDuplicate
            action={(key) => (
              <IconButton
                onClick={() => {
                  notistackRef.current.closeSnackbar(key);
                }}
                color="inherit"
                size="small"
              >
                <Icon>close</Icon>
              </IconButton>
            )}
          >
            <AppThemeProvider>
              <AsyncUIProvider>
                <App />
              </AsyncUIProvider>
            </AppThemeProvider>
          </SnackbarProvider>
        </ReduxProvider>
      </BrowserRouter>
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
