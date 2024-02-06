import React from "react";
import {Header} from "./Header.jsx";
import {Footer} from "./Footer.jsx";

/**
 * Creates a layout component that wraps the content with a header and a footer
 *
 * @param {Object} props - The properties passed to the Layout component
 * @param {ReactNode} props.children - The content to be wrapped by the layout
 *
 * @returns {React.JSX.Element} The layout component
 */
export const Layout = ({children}) => {
    return (
        <div className="relative flex w-full h-full flex-col">
            <Header/>
            <main className="flex-auto">{children}</main>
            <Footer/>
        </div>
    );
};