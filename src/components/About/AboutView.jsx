import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './About.css';

export default function AboutView({ staffMembers, handleSubmit, aboutText  }) {
  return (
    <section className="about" id="about">
      <div className="container about__container section-offset">
        <h2 className="title-reset about__title title">{aboutText.title}</h2>
        <div className="about__content">
          <p className="about__subtitle">{aboutText.subtitle}</p>
          <p className="about__descr">{aboutText.description}</p>
        </div>
        
        <div className="about__slider">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.s-button-prev',
              nextEl: '.s-button-next',
            }}
            loop={true}
            loopedslides={2}
            spaceBetween={20}
            slidesPerView={'auto'}
            centeredSlides={false}
            slideToClickedSlide={true}
            breakpoints={{
              320: {
                slidesPerView: 2.6,
                spaceBetween: 15
              },
              500: {
                slidesPerView: 2.5,
                spaceBetween: 15
              },
              640: {
                slidesPerView: 3.5,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 30
              },
              1480: {
                slidesPerView: 3.5,
                spaceBetween: 30
              }
            }}
          >
            {staffMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <article className="about__article">
                  <picture>
                    <source srcSet={require(`../../assets/${member.imagePrefix}-320.jpg`)} media="(max-width: 500px)" />
                    <source srcSet={require(`../../assets/${member.imagePrefix}-768.jpg`)} media="(max-width: 962px)" />
                    <source srcSet={require(`../../assets/${member.imagePrefix}-1024.jpg`)} media="(max-width: 1280px)" />
                    <img 
                      className="about__photo" 
                      src={require(`../../assets/${member.imagePrefix}.jpg`)} 
                      alt={member.name} 
                      loading="lazy"
                    />
                  </picture>
                  <h3 className="about__list-name title-reset">{member.name}</h3>
                  <p className="about__list-descr">{member.description}</p>
                </article>
              </SwiperSlide>
            ))}
            
            <div className="s-button-prev"></div>
            <div className="s-button-next"></div>
          </Swiper>
        </div>
        
        <div className="about__feedback">
          <form className="about__form" onSubmit={handleSubmit}>
            <div className="about__form-row">
              <div className="about__form-group">
                <label htmlFor="message">
                  <span className="visually-hidden">Введите ваше сообщение</span>
                </label>
                <div className="about__form-tooltip">
                  <textarea 
                    className="about__form-area" 
                    name="message" 
                    placeholder="Что скажете?" 
                    data-validate-field="text" 
                    id="message"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="about__form-row">
              <div className="about__form-group about__form-group--name">
                <label htmlFor="name">
                  <span className="visually-hidden">Введите ваше имя</span>
                </label>
                <div className="about__form-tooltip">
                  <input 
                    className="about__form-input form-input" 
                    type="text" 
                    placeholder="Имя" 
                    data-validate-field="name" 
                    name="name" 
                    id="name" 
                    required
                  />
                </div>
              </div>
              <div className="about__form-group about__form-group--email">
                <label htmlFor="email">
                  <span className="visually-hidden">Введите вашу почту</span>
                </label>
                <div className="about__form-tooltip">
                  <input 
                    className="about__form-input form-input" 
                    type="email" 
                    placeholder="Email" 
                    data-validate-field="email" 
                    name="email" 
                    id="email" 
                    required
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn-reset btn about__form-btn">Отправить</button>
            <div className="about__block-checkbox">
              <input 
                className="about__form-checkbox visually-hidden" 
                type="checkbox" 
                id="checkbox" 
                data-validate-field="checkbox" 
                required
              />
              <span className="about__form-check"></span>
              <label className="about__form-label" htmlFor="checkbox">
                Согласен на обработку персональных данных
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};