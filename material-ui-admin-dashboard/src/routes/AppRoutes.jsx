
import { createBrowserRouter } from "react-router-dom";
import * as React from "react";
import Layout from "../layout/Layout";
import Dashboard from "../features/dashboard/DashboardPage";
import PageNotFound from "../404-Error/PageNotFound"
import Profile from "../features/profile/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "/profile", element: <Profile /> },
            { path: "*", element: <PageNotFound /> },
        ]
    }
]);