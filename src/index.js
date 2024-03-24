import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout";

const Dashboard = React.lazy(() => import("./Pages/Dashboard"));
const SearchRecipes = React.lazy(() => import("./Pages/SearchRecipes"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/search-recipes",
        element: <SearchRecipes />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
