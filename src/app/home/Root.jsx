import React from 'react';
import {Image} from "@nextui-org/react";
import {Layout} from "../../components/Layout.jsx";

const Polygon = () => (
    <svg className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
            <pattern
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse">
                <path d="M100 200V.5M.5 .5H200" fill="none"/>
            </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0}/>
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>
    </svg>
);

const Headline = ({className, children}) => (
    <h1 className={`${className}`}>
        {children}
    </h1>
);

const Paragraph = ({className, children}) => (
    <p className={`${className}`}>
        {children}
    </p>
);

const LinkBlock = ({href, className, children}) => (
    <a href={href} className={className}>
        {children} <span aria-hidden="true">→</span>
    </a>
);

const Scenario = () => (
    <section aria-labelledby="cause-heading">
        <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div className="absolute inset-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1666214280429-d3985e2ef0b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI0fHxjbGluaWNhbCUyMHN0dWRpZXN8ZW58MHwwfDB8fHww" alt="" className="h-full w-full object-cover object-center"/>
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50"/>
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="cause-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Definition and clinical scenario
                </h2>
                <p className="mt-3 text-xl text-white">
                    Example
                </p>
                <a href="#" className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">
                    Read our story
                </a>
            </div>
        </div>
    </section>
);

export const Home = () => {
    return (
        <Layout>
            <div className="bg-white">
                <div className="relative isolate px-6 pt-20 lg:px-8">
                    <Polygon/>
                    <div className="mx-auto max-w-7xl px-6 py-4 sm:py-28 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                            <Headline
                                className="mt-10 py-3 max-w-xl text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                                Take <span className="text-red-600">control</span> of your health
                            </Headline>
                            <Paragraph className="mt-6 text-lg leading-8 text-gray-600">
                                Esse id magna consectetur fugiat non dolor in ad laboris magna laborum ea consequat.
                            </Paragraph>
                            <div className="mt-10 flex items-center gap-x-6">
                                <LinkBlock href="" className="text-sm font-semibold leading-6 text-gray-900">
                                    Learn more
                                </LinkBlock>
                            </div>
                        </div>
                        <div className="mt-16 sm:mt-16 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                            <Image alt="" width={720} src="/src/assets/pulmonologist.svg"/>
                        </div>
                    </div>
            </div>
        </div>
            <Scenario/>
        </Layout>
    );
};