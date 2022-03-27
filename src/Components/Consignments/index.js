import { useEffect } from "react"

import { ConsignmentsContent } from "../ConsignmentsContent";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Header2 } from "../Header2";

export const Consignments = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Header2 />
            <ConsignmentsContent />
            <Footer />
        </>
    );
}