import React from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes.jsx";

/**
 * Represents the main application component.
 *
 * @returns {JSX.Element} The JSX element representing the application component.
 */
export default function App() {
    return <RouterProvider router={router}/>;
}

