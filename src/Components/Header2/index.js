import { header2Menu } from "../../Constants/Menues";

export const Header2 = () => {
    return (
        <section className="header2">
            <div className="header2__fon">
                <div className="header2__content">
                    {header2Menu.map((item, i) => (
                        <a className="header2__item" href={item.href} key={i}>
                            <img className="header2__img" src={item.img} alt="icon" />
                            <p className="header2__text">{item.title}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}