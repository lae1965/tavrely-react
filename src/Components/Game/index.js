import { useEffect, useRef } from "react";

export const Game = ({ game }) => {
    const ref = useRef();
    let imgStyle = {
        backgroundSize: '556px'
    };

    useEffect(() => {
        const gameBlockHeight = ref.current.clientHeight;
        if (gameBlockHeight > 556) imgStyle = {backgroungSize: `${gameBlockHeight}px`}; 
    }, []);

    return (
        <div ref={ref} className="games__fon" style={imgStyle}>
            <h4 className="games__heading">{`${game.whiteGamer} - ${game.blackGamer}  ${game.score}`}</h4>
            <div className="moves">
                {game.moves.map((move, j) =>
                    <div key={j}> 
                        <p className="move">{`${j + 1}. ${move.white}  ${!!move.black ? move.black : ''}`}</p>
                        {!!move.comment && <p className="move__comment">{move.comment}</p>}
                    </div> 
                )}
            </div>
            <div className="games__result">
                <p>{game.result}</p>
            </div>        
        </div>
    );
}