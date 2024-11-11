import Testimonials from "@/components/testimonials";

export const metadata = {
    title: "FieldFlow",
    description: "A web3 platform enabling seamless certification across sectors & stakeholders",
    icons: {
        icon: "/favicon.svg",
    },
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import Cta from "@/components/cta";

export default function Home() {
    return (
        <>
            <Hero/>
            <BusinessCategories/>
            <FeaturesPlanet/>
            <Testimonials/>
            <Cta/>
        </>
    );
}
