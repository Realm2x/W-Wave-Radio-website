import { motion } from "framer-motion";
import { cardAnimation } from "./animations";
import CardPlayIcon from "../../assets/CardPlayIcon";
import CardPauseIcon from "../../assets/CardPauseIcon";

export const PodcastCard = ({ podcast, isPlaying, onPlayToggle }) => {
    return (
        <motion.li
            className={`podcasts__item card card--${podcast.id % 8 || 8}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={cardAnimation}
            layout
        >
            <article className="card__article">
                <picture>
                    <source srcSet={podcast.image320} media="(max-width: 500px)" />
                    <img src={podcast.image} alt="cover" />
                </picture>
                <div className="card__block-descr">
                    <p className="card__time">{podcast.time}</p>
                    <h3 className="card__title title-reset">{podcast.title}</h3>
                    <p className="card__author">{podcast.author}</p>
                    <button
                        className={`card__play btn-reset ${isPlaying ? 'is-playing' : ''}`}
                        aria-label={isPlaying ? "Остановить проигрыватель" : "Включить проигрыватель"}
                        onClick={onPlayToggle}
                    >
                        <CardPlayIcon />
                        <CardPauseIcon />
                    </button>
                    <div className="card__block">
                        <p className="card__popularity">
                          <span className="popularity popularity--views"></span>
                          {podcast.stats.views}
                        </p>
                        <p className="card__popularity">
                          <span className="popularity popularity--like"></span>
                          {podcast.stats.likes}
                        </p>
                        <p className="card__popularity">
                          <span className="popularity popularity--repost"></span>
                          {podcast.stats.reposts}
                        </p>
                    </div>
                </div>
                <span className="card__date">{podcast.date}</span>
            </article>
        </motion.li>
    );
};