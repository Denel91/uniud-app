import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {ErrorPage} from "./app/PageNotFound/Error-page.jsx";
import {Groups} from "./app/groups/Groups.jsx";
import {Diagnosis} from "./app/diagnosis/Diagnosis.jsx";
import {LogIn} from "./app/login/Login.jsx";
import {Home} from "./app/home/Root.jsx";
import {AboutUs} from "./app/about/AboutUs.jsx";

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
            element: <AboutUs/>,
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