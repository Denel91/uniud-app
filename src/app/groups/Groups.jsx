import React from "react";
import {Layout} from "../../components/Layout.jsx";
import {Link} from "react-router-dom";

const posts = [
    {
        id: 1,
        title: 'GROUP I - Pulmonary arterial hypertension',
        href: 'one',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://github.com/Denel91/uniud-app/blob/master/public/AdobeStock_628159488.jpeg?raw=true',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'GROUP II - Pulmonary hypertension associated with left heart disease',
        href: 'two',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://github.com/Denel91/uniud-app/blob/master/public/AdobeStock_568113469.jpeg?raw=true',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'GROUP III - Pulmonary hypertension associated with lung diseases and/or hypoxia',
        href: 'three',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://github.com/Denel91/uniud-app/blob/master/public/AdobeStock_596157071.jpeg?raw=true',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

const postsUnder = [
    {
        id: 4,
        title: 'GROUP IV - Pulmonary hypertension associated with pulmonary artery obstructions',
        href: 'four',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://github.com/Denel91/uniud-app/blob/master/public/AdobeStock_607285922.jpeg?raw=true',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 5,
        title: 'GROUP V - Pulmonary hypertension with unclear and/or multifactorial mechanisms',
        href: 'five',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://github.com/Denel91/uniud-app/blob/master/public/AdobeStock_575211552.jpeg?raw=true',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

export const Groups = () => {
    return (
        <Layout>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pulmonary <span className="text-indigo-600">Hypertension</span> classification</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Pulmonary hypertension classification encompasses five groups.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {
                        posts.map((post) => (
                            <article key={post.id} className="relative isolate flex flex-col justify-center overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                                <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover"/>
                                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"/>
                                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                    <Link to={`${post.href}`}>
                                        <span className="absolute inset-0"/>
                                        {post.title}
                                    </Link>
                                </h3>
                            </article>
                        ))}
                </div>
                <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {
                        postsUnder.map((post) => (
                            <article key={post.id} className="relative isolate flex flex-col justify-center overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                                <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover"/>
                                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"/>
                                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                    <Link to={`${post.href}`}>
                                        <span className="absolute inset-0"/>
                                        {post.title}
                                    </Link>
                                </h3>
                            </article>
                        ))}
                </div>
            </div>
        </div>
        </Layout>
    );
};