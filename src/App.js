import React from "react";
import { Routes, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";

const Dashboard = React.lazy(() => import("./Pages/Dashboard"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
