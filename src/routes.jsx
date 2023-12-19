import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {ErrorPage} from "./components/Error-page.jsx";
import {Groups} from "./app/groups/Groups.jsx";
import {Diagnosis} from "./app/diagnosis/Diagnosis.jsx";
import {About} from "./app/about/About.jsx";
import {LogIn} from "./app/login/Login.jsx";
import {Home} from "./app/home/Root.jsx";

/**
 * Creates a browser router with the given routes.
 *
 * @param {Array} routes - An array of route objects.
 * @returns {Object} - The created browser router.
 */
export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/groups",
            element: <Groups/>,
        },
        {
            path: "/diagnosis",
            element: <Diagnosis/>,
        },
        {
            path: "/login",
            element: <LogIn/>,
        },
    ],
)