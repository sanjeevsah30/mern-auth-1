import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import { Provider } from "react-redux/es/exports.js";
import store from "./store.js";
import Profile from "./screens/Profile.jsx";
import PrivateRoute from "./screens/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<HomeScreen />} />
      <Route path="/signin" index={true} element={<LoginScreen />} />
      <Route path="/register" index={true} element={<RegisterScreen />} />
      <Route path="/register" index={true} element={<RegisterScreen />} />
      <Route path="/register" index={true} element={<RegisterScreen />} />

      //private route
      <Route path=""  element={<PrivateRoute />}>
        <Route path="/profile" index={true} element={<Profile />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
