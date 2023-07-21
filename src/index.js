import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Logout from "./Components/Pages/Logout";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import SearchResult from "./Components/Pages/SearchResult";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/search",
        element: <SearchResult />,
      },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
