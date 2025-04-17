
import { createBrowserRouter } from "react-router-dom";
import * as React from "react";
import Layout from "../layout/Layout";
import Dashboard from "../features/dashboard/DashboardPage";
import PageNotFound from "../404-Error/PageNotFound"
import Profile from "../features/profile/Profile";
import Tables from "../features/table/Tables";
import Analytics from "../features/analytics/Analytics";
import Notifications from "../features/notification/Notifications";
import Logs from "../features/usersLog/Logs";
import Login from "../features/login/Login.jsx";
import Signup from "../features/signup/Signup.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "/profile", element: <Profile /> },
            { path: "/tables", element: <Tables /> },
            { path: "/analytics", element: <Analytics /> },
            { path: "/notifications", element: <Notifications /> },
            { path: "/logs", element: <Logs /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            { path: "*", element: <PageNotFound /> },
        ]
    }
]);