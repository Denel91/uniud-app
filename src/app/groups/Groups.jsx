import React from "react";
import {Layout} from "../../components/Layout.jsx";
import {Link} from "react-router-dom";

const CLASS_NAME_UP = "mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3";
const CLASS_NAME_DOWN = "mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-2";

const posts = [
    {
        id: 1,
        title: 'GROUP I - Pulmonary arterial hypertension',
        href: 'one',
        description: 'Image of group one',
        imageUrl: '/card1-min.jpeg',
    },
    {
        id: 2,
        title: 'GROUP II - Pulmonary hypertension associated with left heart disease',
        href: 'two',
        description: 'Image of group two',
        imageUrl: '/card2-min.jpeg',
    },
    {
        id: 3,
        title: 'GROUP III - Pulmonary hypertension associated with lung diseases and/or hypoxia',
        href: 'three',
        description: 'Image of group three',
        imageUrl: '/card3-min.jpeg',
    },
];

const postsUnder = [
    {
        id: 4,
        title: 'GROUP IV - Pulmonary hypertension associated with pulmonary artery obstructions',
        href: 'four',
        description: 'Image of group four',
        imageUrl: '/card4-min.jpeg',
    },
    {
        id: 5,
        title: 'GROUP V - Pulmonary hypertension with unclear and/or multifactorial mechanisms',
        href: 'five',
        description: 'Image of group five',
        imageUrl: '/card5-min.jpeg',
    },
];

const Header = () => {
    return (
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pulmonary <span
                className="text-indigo-600">Hypertension</span> classification</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
                Pulmonary hypertension classification encompasses five groups.
            </p>
        </div>
    );
};

const renderPost = (post) => (
    <article key={post.id} className="relative isolate flex flex-col justify-center overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <img rel="preload" loading="lazy" src={post.imageUrl} alt={post.description}
             className="absolute inset-0 -z-10 h-full w-full object-cover"/>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"/>
        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
            <Link to={`${post.href}`}>
                <span className="absolute inset-0"/>
                {post.title}
            </Link>
        </h3>
    </article>
);

const CardSection = ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export const Groups = () => {
    return (
        <Layout>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Header/>
                    <CardSection className={CLASS_NAME_UP}>
                        {posts.map(renderPost)}
                    </CardSection>
                    <CardSection className={CLASS_NAME_DOWN}>
                        {postsUnder.map(renderPost)}
                    </CardSection>
                </div>
            </div>
        </Layout>
    );
};