import { description, excerpt, sign } from "../../Constants/history";

export const HistoryContent = () => {
    return (
        <section className="history">
            <div className="excerpt">
                <div className="excerpt__content">
                    <>
                        {excerpt.map((paragrath, i) => 
                            <div className="excerpt__paragrath" key={i}>
                                {paragrath.map((str, j) => 
                                    <p className="excerpt__string" key={j}>{str}</p>
                                )}
                            </div>
                        )}
                        {sign.map((str, i) => 
                            <p 
                                className={`excerpt__string excerpt__string_right ${i === sign.length - 1 ? 'excerpt__string_bold' : ''}`}
                                key={i}
                            >
                                {str}
                            </p>
                        )}
                    </>
                </div>
            </div>
            <div className="description">
                <>
                    <h4 className="description__heading description__heading-bold">История игры</h4>
                    <h4 className="description__heading">Русские шахматы игра  из глубины веков, игра XXI века.</h4>
                    {description.map((paragrath, i) =>
                        <div className="description__paragrath" key={i}>
                            {paragrath.map((str, j) => 
                                <p className="description__string" key={j}>{str}</p>
                            )}
                        </div>
                    )}
                </>
            </div>

        </section>
    );
}