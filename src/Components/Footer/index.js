import { Link } from 'react-router-dom';

import { headerMenu, networkMenu } from '../../Constants/Menues';
import tower from '../../img/tower.png' 

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <nav className="footer__menu">
                    {headerMenu.map((item, i) => 
                        <Link to={item.href} className="footer__menu-item" key={i}>{i < headerMenu.length - 1 ? item.name : 'Документы'}</Link>
                    )}
                </nav>
                <div className="footer__requisites">
                    <h4 className="footer__requisites-title">Межрегиональная общественная организация<br />«Федерация по русским
                        шахматам»</h4>
                    <p className="footer__address">Адрес: 119034, г. Москва, ул. Пречистенка, д. 10</p>
                    <p className="footer__phone">Тел. (499) 390-82-95</p>
                    <p className="footer__mail">е-почта: info@rus-chess.ru</p>
                    <a href="#" className="footer__sections">Другие отделения и секции</a>
                    <nav className="footer__network">
                        {networkMenu.map((item, i) => 
                            <a href={item.href} key={i}>
                                <img src={item.img} alt={item.alt} />
                            </a>
                        )}
                    </nav>
                    <div className="footer__other">
                        <a href="#" className="footer__policy">Политика конфиденциальности</a>
                        <p href="#">Разработано в <a className="footer__developed" href="#">Start Studio.</a></p>
                    </div>
                </div>
            </div>
            <img src={tower} alt="tower" className="footer__image" />
        </footer>
    );
}