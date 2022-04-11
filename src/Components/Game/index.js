import { useEffect, useRef, useState } from "react";

export const Game = ({ game, gameId }) => {
    const refFon = useRef();
    const refMoves = useRef();
    const [imgStyle, setImgStyle] = useState({ backgroundSize: '556px' });
    const [movesStyle, setMovesStyle] = useState({ height: '85%' });

    const increaseMovesHeight = (i) => {
        const children = refMoves.current.children;
        const childrenCount = refMoves.current.childElementCount;
        const margin = children[1].offsetTop - (children[0].offsetTop + children[0].offsetHeight);
        let oddHeight, evenHeight;
        let increaseToHeight = 0;
        
        for (; i < childrenCount; i++) {
            if (!(i % 2)) {
                oddHeight = children[i].offsetHeight;
                if (i + 1 === childrenCount) increaseToHeight += oddHeight + margin;
            } else {
                evenHeight = children[i].offsetHeight;
                increaseToHeight += Math.max(oddHeight, evenHeight) + margin;
            }
        }
        return increaseToHeight;
    }
    
    useEffect(() => {
        let prevTop = 0;
        let wasOneWrap = false;
        for (let i = 0; i < refMoves.current.childElementCount; i++) {
            const childOffsetTop = refMoves.current.children[i].offsetTop;
            if (childOffsetTop < prevTop) {
                if (wasOneWrap) {
                    const increaseToHeight = increaseMovesHeight(i);
                    const imgHeight = refFon.current.offsetHeight + increaseToHeight;
                    setMovesStyle({ height: `${refMoves.current.offsetHeight + increaseToHeight}px` });
                    setImgStyle({ 
                        height: `${imgHeight}px`, 
                        backgroundSize: `${imgHeight}px` 
                    });
                    break;
                }
                wasOneWrap = true;
            }
            prevTop = childOffsetTop;
        }
    }, [imgStyle]);

    return (
        <div ref={refFon} className="games__fon" style={imgStyle}>
            <h4 className="games__heading">{`${game.whiteGamer} - ${game.blackGamer}  ${game.score}`}</h4>
            <div ref={refMoves} className="moves" style={movesStyle}>
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