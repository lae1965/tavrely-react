import { useParams } from "react-router";

export const ConsignmentsContent = () => {
    const params = useParams();

    console.log(params);

    return (
        <section className="consignments">

        </section>
    );
} 