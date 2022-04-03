import { NavLink } from "react-router-dom";

import './consignment.scss'
import { championship } from "../../Constants/games";

export const ConsignmentsContent = () => {
    return (
        <div className="championships">
            {championship.map((item) => 
                <NavLink to={`/consignments/${item.id}`} key={item.id} className="championship">{`${item.name}, ${item.town} ${item.year}г. ►`}</NavLink>
            )}
        </div>
    );
} 