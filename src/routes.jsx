import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {ErrorPage} from "./app/PageNotFound/Error-page.jsx";
import {Groups} from "./app/groups/Groups.jsx";
import {Diagnosis} from "./app/diagnosis/Diagnosis.jsx";
import {LogIn} from "./app/login/Login.jsx";
import {Home} from "./app/home/Root.jsx";
import {AboutUs} from "./app/about/AboutUs.jsx";
import {GroupOne} from "./app/groups/group_one/GroupOne.jsx";
import {GroupTwo} from "./app/groups/group_two/GroupTwo.jsx";
import {GroupThree} from "./app/groups/group_three/GroupThree.jsx";
import {GroupFour} from "./app/groups/group_four/GroupFour.jsx";
import {GroupFive} from "./app/groups/group_five/GroupFive.jsx";
import {Findings} from "./app/ findings/ Findings.jsx";

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
            path: "groups/GroupOne",
            element: <GroupOne/>
        },
        {
            path: "groups/GroupTwo",
            element: <GroupTwo/>
        },
        {
            path: "groups/GroupThree",
            element: <GroupThree/>
        },
        {
            path: "groups/GroupFour",
            element: <GroupFour/>
        },
        {
            path: "groups/GroupFive",
            element: <GroupFive/>
        },
        {
            path: "/findings",
            element: <Findings/>,
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