import React from "react";
import {Layout} from "./Layout.jsx";

/**
 * Represents a container component with flex layout.
 *
 * @param {Object} props - The properties of the container.
 * @param {ReactNode} props.children - The child elements of the container.
 */
const LayoutContainer = ({children}) => (
    <div className="flex w-full h-full">
        {children}
    </div>
);

/**
 * Component that wraps its children within a LayoutContainer and Layout component.
 *
 * @param {Object} props - The properties of the component.
 * @param {ReactNode} props.children - The children to be wrapped within the LayoutContainer and Layout component.
 * @returns {ReactElement} - The rendered React element.
 */
export const RootWrapper = ({children}) => (
    <LayoutContainer>
        <Layout>
            {children}
        </Layout>
    </LayoutContainer>
);