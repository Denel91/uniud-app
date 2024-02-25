import React from "react";
import {Layout} from "../../components/Layout.jsx";
import {posts} from "./posts.js"

const Header = () => {
    return (
        <>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Chest <span className="text-indigo-600">imaging</span></h2>
        </>
    );
};

const ImageCard = ({post}) => {
    return (
        <div className="relative aspect-square sm:aspect-square lg:aspect-square lg:w-80 lg:shrink-0 border-3 border-red-700">
            <img src={post.imageUrl} alt="chest imaging" className="absolute inset-0 h-full w-full rounded-2xl object-contain border-3 border-green-600"/>
        </div>
    );
};

const CategorySection = ({post}) => {
    return (
        <div className="flex items-center gap-x-4 text-xs">
            <a href={post.category.href}
               className="relative z-10 rounded-full bg-sky-100 px-4 py-1.5 text-base text-gray-600 hover:bg-sky-200">
                {post.category.title}
            </a>
        </div>
    );
};

const TitleDescription = ({post}) => {
    return (
        <div className="group relative max-w-xl">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={post.href}>
                    <span className="absolute inset-0"/>
                    {post.title}
                </a>
            </h3>
            <p className="mt-5 text-medium leading-6 text-gray-900">{post.description}</p>
        </div>
    );
};

const ImageFindings = () => {
    return (
        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                    <ImageCard post={post}/>
                    <div>
                        <CategorySection post={post}/>
                        <TitleDescription post={post}/>
                    </div>
                </article>
            ))}
        </div>
    );
};

export const Findings = () => {
    return (
        <Layout>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <Header/>
                        <ImageFindings/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};