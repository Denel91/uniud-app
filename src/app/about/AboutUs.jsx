import React from "react";
import {Layout} from "../../components/Layout.jsx";

const CARD_CLASS_1 = "w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end";
const CARD_CLASS_2 = "order-first flex w-64 flex-none justify-end self-end lg:w-auto";
const CARD_CLASS_3 = "flex w-96 flex-auto justify-end lg:w-auto lg:flex-none";
const CARD_CLASS_4 = "hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none";

const IMAGE_SRC_1 = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMAGE_SRC_2 = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMAGE_SRC_3 = "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMAGE_SRC_4 = "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const IMAGE_CLASS_NAME_1 = "aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover";
const IMAGE_CLASS_NAME_2 = "aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover";
const IMAGE_CLASS_NAME_3 = "aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover";
const IMAGE_CLASS_NAME_4 = "aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover";

/**
 * Represents the description of our work.
 *
 * @returns {JSX.Element} The JSX element containing the description.
 */
const Description = () => {
    return (
        <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Work</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
                The diagnostic tools play a critical role in the field of medicine and healthcare.
                They provide a way for healthcare professionals to identify and diagnose a wide range of medical
                conditions and diseases.
                This process is vital in ensuring effective treatment plans can be created and implemented for the
                patient.
            </p>
            <p className="mt-6 text-xl leading-7 text-gray-600">
                A diagnostic tool can help in early detection of diseases, resulting in timely intervention.
            </p>
        </div>
    );
};

/**
 * Component that renders an image element with preloading capabilities.
 *
 * @param {Object} props - The properties of the image.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternative text to be displayed if the image fails to load.
 * @param {string} props.className - The CSS class name to be applied to the image element.
 * @returns {JSX.Element} The rendered image element.
 */
const Img = ({src, alt, className}) => (
    <img rel="preload" src={src} alt={alt} className={className}/>
);

/**
 * Represents a card section component.
 *
 * @param {String} className - The class name of the card section parent div.
 * @param {String} src - The source URL of the image in the card section.
 * @param {String} alt - The alternate text for the image in the card section.
 * @param {String} imgClassName - The class name of the image in the card section.
 * @returns {JSX.Element} The card section component.
 */
const CardSection = ({className, src, alt, imgClassName}) => {
    return (
        <div className={className}>
            <Img src={src} alt={alt} className={imgClassName}/>
        </div>
    );
};

/**
 * Represents the About Us section.
 *
 * @returns {JSX.Element} The AboutUs component.
 */
export const AboutUs = () => {
    return (
        <Layout>
            <div className="mt-32 overflow-hidden sm:mt-40">
                <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16
                    lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                        <Description/>
                        <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                            <CardSection className={CARD_CLASS_1} src={IMAGE_SRC_1} alt="Foto con pc"
                                         imgClassName={IMAGE_CLASS_NAME_1}/>
                            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem]
                            lg:items-start lg:justify-end lg:gap-x-8">
                                <CardSection className={CARD_CLASS_2} src={IMAGE_SRC_2}
                                             alt="Foto con pc e fonendoscopio" imgClassName={IMAGE_CLASS_NAME_2}/>
                                <CardSection className={CARD_CLASS_3} src={IMAGE_SRC_3} alt="Fonendoscopio e farmaci"
                                             imgClassName={IMAGE_CLASS_NAME_3}/>
                                <CardSection className={CARD_CLASS_4} src={IMAGE_SRC_4} alt="Dottoressa con Ipad"
                                             imgClassName={IMAGE_CLASS_NAME_4}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};