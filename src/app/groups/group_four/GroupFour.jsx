import React from "react";
import {Layout} from "../../../components/Layout.jsx";

const Header = ({title, subtitle}) => (
    <div>
        <h2 className="text-xl font-semibold text-indigo-600">{title}</h2>
        <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">{subtitle}</h3>
    </div>
);

const SVGPattern = () => (
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
            The term chronic thromboembolic pulmonary hypertension (CTEPH) refers to PH complicating chronic thromboembolic pulmonary disease, which is a condition presenting with post-thrombo-embolic fibrotic obstructions within the pulmonary arteries.
            In this scenario, PH does not solely result from the obstruction of the pulmonary artery by organized fibrotic clots but can also be associated with microvasculopathy.
            Established risk factors include permanent intravascular devices (e.g., pacemakers, long-term central lines, ventriculo-atrial shunts), inflammatory bowel diseases, essential thrombocythemia, polycythemia vera, splenectomy, antiphospholipid syndrome, high-dose thyroid hormone replacement therapy, and malignancies.
            Since CTEPH necessitates a distinct therapeutic approach, it is imperative to thoroughly consider the potential presence of such a condition in all PH patients. Ventilation/perfusion scintigraphyvis the most effective method for excluding CTEPH.
            Alternative perfusion imaging modalities, including dual-energy computed tomography (DECT), and magnetic resonance imaging (MRI) perfusion, while presenting numerous theoretical advantages over ventilation/perfusion scintigraphy, are technically demanding, costly, less widely accessible, and currently lack multicenter validation. CT pulmonary angiography (CTPA) is crucial for CTEPH diagnosis and operability assessment.
            The treatment algorithm for CTEPH employs a multimodal approach, involving combinations of pulmonary endarterectomy (PEA), balloon pulmonary angioplasty (BPA), and medical therapies, including lifelong therapeutic anticoagulation.
            Other group 4 conditions include pulmonary artery sarcoma, other malignant tumors (e.g., renal carcinoma, uterine carcinoma, and germ-cell tumors of the testis), non-malignant growths (e.g., uterine leiomyomas), arteritis unrelated to connective tissue diseases, congenital or acquired PA stenoses, parasitic infections (e.g., hydatid cyst), and foreign-body embolism.
        </p>
    </div>
);

export const GroupFour = () => {
    return (
        <Layout>
            <div className="overflow-hidden bg-white">
                <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block"/>
                    <div className="mx-auto mt-12 max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8 lg:mt-20">
                        <Header title="Group IV" subtitle="Pulmonary hypertension associated with pulmonary artery obstructions"/>
                    </div>
                    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative lg:col-start-2 lg:row-start-1">
                            <SVGPattern/>
                            <div className="relative mx-auto max-w-prose text-base lg:max-w-none lg:mt-8">
                                <GroupImage src="https://images.unsplash.com/photo-1639772823907-a716be4bdecc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
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