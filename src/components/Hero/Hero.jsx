import './Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero__container section-offset">
                <div className="hero__content">
                <h1 className="hero__title title-reset">
                    <strong>Радио</strong> <em>W-Wave</em>
                </h1>
                <p className="hero__descr">
                    Привет, на связи W-Wave! Раньше мы были <a className="hero__descr-link" href="/">изданием</a>, а теперь пробуем себя в разговорном жанре. Говорим о музыке, политике, истории, науке и культуре. Здесь, помимо прямого эфира — архив передач и многое другое:)
                </p>
                <a className="hero__btn btn btn-reset" href="/" aria-label="Слушать эфир">Слушать эфир</a>
                </div>
            </div>
        </section>
    )
}