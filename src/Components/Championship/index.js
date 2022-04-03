import { useParams } from "react-router"

import { games } from "../../Constants/games";
import { Game } from "../Game";

export const Championship = () => {
    const { gameId } = useParams();

    return (
        <div className="games">
            {games[gameId].map((game, i) => 
                <Game game={game} key={i} />
            )}
        </div>
    );
}