import React from "react";
import {Layout} from "../../components/Layout.jsx";
import {paramsData} from "./params.js";
import {Button} from "@nextui-org/react";

/**
 * TitleSection is a functional component that displays a section with a title, span, description, and subtitle.
 *
 * @param {Object} props - The props object containing the title, span, description, and subtitle properties.
 * @param {string} props.title - The title of the section.
 * @param {string} props.span - The span text to be displayed with the title.
 * @param {string} props.description - The description text to be displayed with the title and span.
 * @param {string} props.subtitle - The subtitle text to be displayed in the section.
 *
 * @returns {JSX.Element} The rendered title section component.
 */
const TitleSection = ({title, span, description, subtitle}) => {
    return (
        <div className="bg-stone-50">
            <div className="py-24 lg:py-32">
                <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-5xl">
                        {title} <span className="text-indigo-600">{span}:</span> {description}
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl text-stone-500">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

/**
 * Represents a decorative element.
 * @returns {JSX.Element} The JSX element representing the decoration.
 */
const Decoration = () => {
    return (
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <svg
                className="absolute right-0 top-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true">
                <defs>
                    <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse">
                        <rect x={0} y={0} width={4} height={4} className="text-stone-200" fill="currentColor"/>
                    </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"/>
            </svg>
        </div>

    );
};

/**
 * Represents a fieldset component.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {Array} props.paramsData - The array of parameter data.
 * @returns {JSX.Element} The rendered fieldset component.
 */
const Controls = ({paramsData}) => {
    return (
        <fieldset>
            <legend className="text-base font-semibold leading-6 text-gray-900">Parametri
            </legend>
            <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                {paramsData.map((item, itemIdx) => (
                    <div key={itemIdx} className="relative flex items-start py-4">
                        <div className="min-w-0 flex-1 text-sm leading-6">
                            <label htmlFor={`person-${item.id}`}
                                   className="select-none font-medium text-gray-900">
                                {item.name}
                            </label>
                        </div>
                        <div className="ml-3 flex h-6 items-center">
                            <input
                                id={`person-${item.id}`}
                                name={`person-${item.id}`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mx-auto max-w-7xl mt-8 px-6 py-8 lg:px-8 flex justify-center">
                <Button color="primary" variant="flat" size="lg">Suggest diagnosis</Button>
            </div>
        </fieldset>
    );
};

/**
 * Represents the Diagnosis Section component.
 *
 * This component renders a section used for displaying diagnosis-related information.
 *
 * @returns {JSX.Element} The Diagnosis Section component.
 */
const DiagnosisSection = ({paramsData}) => {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative bg-white shadow-xl mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-indigo-500 "></div>
                    <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                        <Controls paramsData={paramsData}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * Represents the Diagnosis component.
 *
 * The Diagnosis component is responsible for rendering the Diagnosis and Evaluation section in the application.
 *
 * @returns {ReactElement} The rendered Diagnosis component.
 */
export const Diagnosis = () => {
    return (
        <Layout>
            <main className="overflow-hidden">
                <TitleSection title="Pulmonary" span="Hypertension" description="Diagnosis and Evaluation"
                              subtitle='Getting Started with the Diagnostic Tool.'/>
                <section className="relative bg-white">
                    <div className="absolute h-1/2 w-full bg-stone-50" aria-hidden="true"/>
                    <Decoration/>
                    <DiagnosisSection paramsData={paramsData}/>
                </section>
            </main>
        </Layout>
    );
}
