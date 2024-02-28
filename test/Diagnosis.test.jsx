import React from "react";
import {describe, it, expect} from "vitest";
import {TitleSection} from "../src/app/diagnosis/Diagnosis.jsx";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom'


describe('TitleSection component', () => {
    it('renders the TitleSection correctly', () => {
       const {getByText} = render(<TitleSection title="Pulmonary Hypertension" span="Tool" subtitle="Getting started with the educational tool."/>);

        expect(getByText("Pulmonary Hypertension")).toBeInTheDocument();
        expect(getByText("Tool")).toBeInTheDocument();
        expect(getByText("Getting started with the educational tool.")).toBeInTheDocument();
    });
});


