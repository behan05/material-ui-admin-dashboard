
import { createBrowserRouter } from "react-router-dom";
import * as React from "react";
import Layout from "../layout/Layout";
import Dashboard from "../features/dashboard/DashboardPage";
import PageNotFound from "../404-Error/PageNotFound"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "*", element: <PageNotFound /> },
        ]
    }
]);