import { useState } from "react";
import PlayPlaylists from "../../assets/PlayPlaylists";
import PausePlaylists from "../../assets/PausePlaylists";
import { playlistsData, genres } from "../../data/playlistsData";
import { motion, AnimatePresence } from 'framer-motion';
import './Playlists.css';

export default function Playlists() {
  const [playingPlaylist, setPlayingPlaylist] = useState(null);

  const handlePlayClick = (id) => {
    setPlayingPlaylist(playingPlaylist === id ? null : id);
  };

  return (
    <section className="playlists" id="playlists">
      <div className="playlists__container container section-shift">
        <div className="playlists__menu">
          <h2 className="title-reset playlists__title title">Плейлисты</h2>
          <p className="playlists__subtitle">Жанр</p>
          <div className="playlists__choice">
            {genres.map((genre, index) => (
              <label key={index} className="playlists__radio">
                <input
                  className="playlists__radio-input visually-hidden"
                  type="radio"
                  name="genre"
                />
                <span className="playlists__radio-text" tabIndex="0">
                  {genre}
                </span>
              </label>
            ))}
          </div>
          <div className="playlists__about-descr">
            <p className="playlists__menu-text">
              Раздел «Плейлисты» может содержать информацию,
              не предназначенную для несовершеннолетних
            </p>
            <p className="playlists__menu-copy">© 2021 l W-Wave</p>
            <span className="playlists__menu-age"></span>
          </div>
        </div>
        <div className="playlists__content">
          <ul className="playlists__list list-reset">
            {playlistsData.map(playlist => (
              <li key={playlist.id} className="playlists__item">
                <article 
                  className={`playlists__article ${playingPlaylist === playlist.id ? 'is-playing' : ''}`}
                  tabIndex="0"
                >
                  <picture>
                    <source
                      srcSet={require(`../../assets/${playlist.image}-320.jpg`)}
                      media="(max-width: 700px)"
                    />
                    <source
                      srcSet={require(`../../assets/${playlist.image}-1024.jpg`)}
                      media="(max-width: 1280px)"
                    />
                    <img
                      className="playlists__article-perfomers"
                      src={require(`../../assets/${playlist.image}.jpg`)}
                      alt={playlist.name}
                    />
                  </picture>
                  <div className="playlists__descr-card">
                    <h3 className="title-reset playlists__subtitle-card">
                      {playlist.name}
                    </h3>
                    <p className="playlists__text-card">
                      {playlist.description}
                    </p>
                  </div>
                  <span className={`playlists__country playlists__country--${playlist.country}`}></span>
                  <button 
                    className="playlists__btn-play btn-reset play-animation"
                    onClick={() => handlePlayClick(playlist.id)}
                  >
                    <AnimatePresence mode="wait">
                    {playingPlaylist === playlist.id ? (
                     <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      transition={{ 
                        duration: 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      <PausePlaylists />
                    </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {playingPlaylist === playlist.id ? <PausePlaylists /> : <PlayPlaylists />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  </button>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}