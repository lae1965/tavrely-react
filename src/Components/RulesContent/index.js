import { figures, gameRules, otherRules } from '../../Constants/gameRules';
import { MakeTextParagrath } from '../MakeTextParagraphs';
import jockeys from '../../img/jockeys.png'

export const RulesContext = () => {
    return (
        <section className="rules">
            <img src={jockeys} alt="jockeys" className="rules__img" />
            <div className="rules__content">
                <h3 className="rules__title">Правила игры</h3>
                <MakeTextParagrath paragraphsArray={gameRules} />
                <div className="rules__figures">
                    {figures.map((figure, i) => (
                        <div className="rules__figure" key={i}>
                            <img className="rules__img" src={figure.icon} alt={figure.alt} />
                            <div className="rules__description">
                                <MakeTextParagrath 
                                    render={j => (<>{!j && <span className="rules__name">{figure.name}</span>}</>)}
                                    paragraphsArray={figure.description}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="rules__others">
                    {otherRules.map((rule, i) => (
                        <div className="rules__block" key={i}>
                            <h3 className="rules__name">{rule.title}</h3>
                            <MakeTextParagrath paragraphsArray={rule.description} />
                        </div>
                    ))}
                </div>                    
            </div>
        </section>
    );
}