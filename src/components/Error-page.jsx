import React from "react";
import {Link, useRouteError} from "react-router-dom";

/**
 * The URL for the image to be displayed when the requested image is not found.
 *
 * @type {string}
 */
const NOT_FOUND_IMAGE_URL = "https://images.unsplash.com/photo-1700403322387-08013097df29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

/**
 * Represents the CSS class name for an image element.
 *
 * @type {string}
 * @constant
 */
const CLASS_IMAGE = "absolute inset-0 -z-10 h-full w-full object-cover object-top";

/**
 * Represents a class name for a wrapper element.
 *
 * @type {string}
 */
const CLASS_WRAPPER = "mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8";

/**
 * Represents the CSS class for the "Back Home" element.
 *
 * @type {string}
 */
const CLASS_BACK_HOME = "text-sm font-semibold leading-7 text-white";

/**
 * The text displayed for the "Back to home" button.
 *
 * @type {string}
 */
const BACK_HOME_TEXT = "Back to home";

/**
 * Error page component.
 *
 * @function ErrorPage
 * @returns {JSX.Element} - The error page component.
 */
export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <main className="relative isolate min-h-screen">
                <img src={NOT_FOUND_IMAGE_URL} alt="page not found" className={CLASS_IMAGE}/>
                <div className={CLASS_WRAPPER}>
                    <p className="text-2xl font-semibold leading-8 text-white">{error.status}</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page {error.statusText}</h1>
                    <p className="mt-4 text-base text-white/70 sm:mt-6"><i>Sorry, we couldn’t find the page you’re looking for.</i></p>
                    <div className="mt-10 flex justify-center">
                        <Link to="/" className={CLASS_BACK_HOME}>
                            <span aria-hidden="true">&larr;</span> {BACK_HOME_TEXT}
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};