import { Header2 } from "../Header2";
import { ConsignmentsContent } from "../ConsignmentsContent";
import { Outlet } from "react-router";

export const Consignments = () => {
    return (
        <>
            <Header2 />
            <section className="consignments">
                <ConsignmentsContent />
                <Outlet />
            </section>    
        </>
    );
}