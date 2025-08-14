import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo";
import Search from "../../assets/Search";
import OpenSearch from "../../assets/OpenSearch";
import BroadcastOpenImg from "../../assets/BroadcastOpenImg";
import PlayerImg from "../../assets/PlayerImg";
import PlayerPauseImg from "../../assets/PlayerPauseImg";
import LoginModal from "./LoginModal";
import { navLinks, submenuLinks } from "../../data/headerData";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isPlayingFirst, setIsPlayingFirst] = useState(false);
  const [isPlayingSecond, setIsPlayingSecond] = useState(false);
  const searchFormRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchFormRef.current && !searchFormRef.current.contains(event.target)) {
        const isSearchButton = event.target.closest('.header__search');
        if (!isSearchButton) {
          setIsSearchOpen(false);
        }
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.classList.add('stop-scroll');
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('stop-scroll');
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('stop-scroll');
    };
  }, [isSearchOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('stop-scroll');
    } else {
      document.body.classList.remove('stop-scroll');
    }
    
    return () => {
      document.body.classList.remove('stop-scroll');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePlayer = () => {
    setIsPlayerOpen(!isPlayerOpen);
  };

  const toggleFirstPlayer = () => {
    setIsPlayingFirst(!isPlayingFirst);
    if (!isPlayingFirst && isPlayingSecond) {
      setIsPlayingSecond(false);
    }
  };

  const toggleSecondPlayer = () => {
    setIsPlayingSecond(!isPlayingSecond);
    if (!isPlayingSecond && isPlayingFirst) {
      setIsPlayingFirst(false);
    }
  };

  return (
    <header className="header">
      <div className="container header__top">
        <div className="header__wrapper">
          <a className="logo" href="/">
            <Logo />
          </a>
        </div>
        <div className="header__block">
          <nav className={`header__nav nav ${isMenuOpen ? 'header__nav--active' : ''}`}>
            <ul className="nav__list list-reset">
              {navLinks.map((link) => (
                <li key={link.id} className="nav__item">
                  <a className="nav__link" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className={`burger btn-reset ${isMenuOpen ? 'burger--active' : ''}`}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={toggleMenu}
          >
            <span className="burger-line"></span>
          </button>
          <div className="header__block-btn">
          <button
          className="header__search btn-reset"
          type="button"
          aria-label={isSearchOpen ? "Закрыть поиск" : "Открыть поиск"}
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
          <OpenSearch />
          </button>
          
          <AnimatePresence>
          {isSearchOpen && (
              <motion.div
              className="search-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              >
              <motion.form
                  ref={searchFormRef}
                  className="header__search-form"
                  initial={{ width: 0 }}
                  animate={{ width: 308 }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.3 }}
              >
                  <input
                  className="header__search-input"
                  type="text"
                  placeholder="Поиск по сайту"
                  autoFocus
                  />
                  <button
                  className="header__search header__search--submit btn-reset"
                  type="submit"
                  aria-label="Поиск"
                  >
                  <Search />
                  </button>
              </motion.form>
              </motion.div>
          )}
          </AnimatePresence>
          <LoginModal />
      </div>
        </div>
      </div>
      <div className="container header__bottom">
        <nav className={`submenu ${isMenuOpen ? 'submenu--active' : ''}`}>
          <ul className="submenu__list list-reset">
            {submenuLinks.map((link) => (
              <li key={link.id} className="submenu__item">
                <a className="submenu__link" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`player ${isPlayerOpen ? 'player--active' : ''}`}>
          <div className="player__block">
            <button
              className="btn-reset player__btn-play"
              aria-label="Включить музыку"
              onClick={toggleFirstPlayer}
              >
                {isPlayingFirst ? <PlayerPauseImg className='player__img-pause-default' /> : <PlayerImg />}
            </button>
            <button 
              className="player__open-btn btn-reset"
              onClick={togglePlayer}
              aria-expanded={isPlayerOpen}
              aria-label={isPlayerOpen ? "Скрыть эфир" : "Показать эфир"}
            >
              <BroadcastOpenImg className={`player__open-img ${isPlayerOpen ? "player__open-img--active" : ""}`} />
              Что в эфире?
            </button>
          </div>
          <AnimatePresence>
            <motion.div
              className={`player__wrapper ${isPlayerOpen ? "player__wrapper--active" : ""}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="player__btn player__btn--1 btn-reset play-animation"
                aria-label="Ранее в эфире"
                onClick={toggleFirstPlayer}
              >
                {isPlayingFirst ? <PlayerPauseImg /> : <PlayerImg />}
                <span className="player__descr">
                  <span className="player__text">Ранее в эфире</span>
                  <span className="player__text-name">«Музыка»</span>
                </span>
              </button>
              <button
                className="player__btn player__btn--2 btn-reset play-animation"
                aria-label="Сейчас в эфире"
                onClick={toggleSecondPlayer}
              >
                {isPlayingSecond ? <PlayerPauseImg /> : <PlayerImg />}
                <span className="player__descr">
                  <span className="player__text">Сейчас в эфире</span>
                  <span className="player__text-name">«Как так?»</span>
                </span>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="header__age">
          <span className="header__age-text">12+</span>
        </div>
      </div>
    </header>
  );
}