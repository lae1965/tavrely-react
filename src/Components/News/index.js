import { newsMenu } from "../../Constants/Menues";

export const News = () => {
    return (
        <section className="news">
            <div className="news__content">
                {newsMenu.map((item, i) => (
                    <div className="news__block" key={i}>
                        <div className="news__item">
                            <img className="news__img" src={item.img} alt={item.img} />
                            <h4 className="news__title">{item.title}</h4>
                            <p className="news__date">{item.date}</p>
                            <p className="news__text">{item.text}<span className="news__text-further">...Далее</span></p>
                        </div>
                    </div>
                ))}
            </div>
            <a href="#" className="news__more">Загрузить еще ↓</a>
        </section>
    );
}