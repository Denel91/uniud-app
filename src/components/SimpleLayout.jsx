import React from "react";

/**
 * Renders a simple layout component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered within the layout.
 *
 * @return {ReactElement} The rendered layout component.
 */
export const SimpleLayout = ({children}) => {
    return (
        <div className="relative bg-white">
            {children}
        </div>
    );
};