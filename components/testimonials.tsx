"use client";

import LargeTestimonial from "@/components/large-testimonial";
import LogoHicss from "@/public/images/logo-hicss.jpeg";

export default function Testimonials() {
    return (
        <div
            className="flex flex-col items-center md:flex-row md:justify-center space-y-6 md:space-y-0 md:space-x-6">
            <LargeTestimonial
                text="I appreciate the paper's clear identification of ESG issues, its viable use of blockchain, methodical approach, well-structured organization, adherence to requirements, and professional writing. Interest 4/5. Relevance 4/5."
                name="Reviewer №1"
                organisation="HICSS"
                link="https://hicss.hawaii.edu/"
                image={LogoHicss}
            />
            <LargeTestimonial
                text="I appreciate the paper’s strong foundation in extensive ESG literature and commend its focus on addressing the significant variance in reporting methods that add to score ambiguity. Interest 3/5. Relevance 4/5."
                name="Reviewer №2"
                organisation="HICSS"
                link="https://hicss.hawaii.edu/"
                image={LogoHicss}
            />
        </div>
    );
}
