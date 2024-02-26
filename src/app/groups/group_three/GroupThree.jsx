import React from "react";
import {Layout} from "../../../components/Layout.jsx";

const Heading = ({title, subtitle}) => (
    <div>
        <h2 className="text-xl font-semibold text-indigo-600">{title}</h2>
        <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">{subtitle}</h3>
    </div>
);

const Pattern = () => (
    <svg
        className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
        width={404}
        height={384}
        fill="none"
        viewBox="0 0 404 384"
        aria-hidden="true">
        <defs>
            <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
            </pattern>
        </defs>
        <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"/>
    </svg>
);

const GroupImage = ({src}) => (
    <figure>
        <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
            <img
                className="rounded-lg object-cover object-center shadow-lg"
                src={src}
                alt="Whitney leaning against a railing on a downtown street"
                width={1184}
                height={1376}
            />
        </div>
    </figure>
);

const Content = () => (
    <div className="mx-auto max-w-prose text-base lg:max-w-none">
        <p className="text-lg text-gray-900 leading-10">
            Pulmonary hypertension is a common finding in patients with chronic obstructive pulmonary disease (COPD), emphysema, interstitial lung disease (ILD), combined pulmonary fibrosis and emphysema (CPFE), and hypoventilation syndromes.
            However, it is relatively uncommon in individuals with obstructive sleep apnea, unless they have coexisting conditions like COPD or daytime hypoventilation.
            At high altitudes (above 2500 meters), it is believed that hypoxia-induced pulmonary hypertension affects approximately 5% of the population, with the development of PH being influenced by geographical and genetic factors.
            Critical aspects of evaluating suspected PH in the context of lung disease involve the comprehensive integration of various elements, including risk factors, clinical course (rapid deterioration vs. gradual progression), pulmonary function tests, cardiopulmonary exercise tests, and imaging tests, including ventilation/perfusion (V/Q) lung scans, chest contrast-enhanced CT, and cardiac magnetic resonance imaging.
            The therapeutic approach requires optimizing the management of the underlying lung disease, including supplementary oxygen administration, non-invasive ventilation, and pulmonary rehabilitation programs, when clinically indicated.
        </p>
    </div>
);

export const GroupThree = () => {
    return (
        <Layout>
            <div className="overflow-hidden bg-white">
                <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block"/>
                    <div className="mx-auto mt-12 max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8 lg:mt-20">
                        <Heading title="Group III" subtitle="Pulmonary hypertension associated with lung diseases and/or hypoxia"/>
                    </div>
                    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative lg:col-start-2 lg:row-start-1">
                            <Pattern/>
                            <div className="relative mx-auto max-w-prose text-base lg:max-w-none lg:mt-8">
                                <GroupImage src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-8">
                            <Content/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};