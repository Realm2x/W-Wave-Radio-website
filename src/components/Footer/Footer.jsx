import SocialOk from "../../assets/SocialOk";
import SocialVk from "../../assets/SocialVk";
import SocialYou from "../../assets/SocialYou";
import LogoFooter from "../../assets/LogoFooter";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container section-offset">
                <div className="footer__left">
                    <a className="footer__logo" href="/" alt="logo">
                        <LogoFooter />
                    </a>
                    <div className="footer__block">
                        <a
                            className="footer__social"
                            href="/"
                            target="_blank"
                            aria-label="youtube"
                        >
                            <SocialYou />
                        </a>
                        <a
                            className="footer__social"
                            href="/"
                            target="_blank"
                            aria-label="odnoclassniki"
                        >
                            <SocialOk />
                        </a>
                        <a
                            className="footer__social"
                            href="/"
                            target="_blank"
                            aria-label="vkontakte"
                        >
                            <SocialVk />
                        </a>
                    </div>
                </div>
                <nav className="footer__nav">
                    <ul className="footer__list list-reset">
                        <li className="footer__item">
                            <a className="footer__link" href="#podcasts">
                                Подкасты
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#transfers">
                                Передачи
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#guests">
                                Гости
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#playlists">
                                Плейлисты
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="/">
                                Сетка
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#about">
                                О нас
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="/">
                                Новости
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="/">
                                Блоги
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="/">
                                Топы
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer__copy">W-WAVE ® 2021</div>
        </footer>
    );
}
