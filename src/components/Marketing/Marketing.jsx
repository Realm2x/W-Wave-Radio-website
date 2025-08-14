import { useMemo } from 'react';
import receiver from '../../assets/receiver.png';
import receiver320 from '../../assets/receiver-320.png';
import receiver768 from '../../assets/receiver-768.png';
import receiver1024 from '../../assets/receiver-1024.png';
import './Marketing.css';

export default function Marketing() {
  const productDescription = useMemo(() => [
    "Друзья, рады представить вам продукт нашего производства! Да-да, несмотря на то, что мы только начали свой путь радиовещателей, нам хочется, чтобы вы могли как следует нас расслышать:)",
    "Итак, встречайте! Портативный радиоприёмник-колонка W-Wave 1.0 xm. Тщательный подбор всех делатей, ручная сборка, качественный звук. Пока доступно только 60 штук в 3 цветах, но мы активно трудимся над новыми партиями и дизайном. Спешите приобрести!"
  ], []);

  return (
    <section className="marketing">
      <div className="container marketing__container">
        <div className="marketing__product">
          <picture>
            <source srcSet={receiver320} media="(max-width: 500px)" />
            <source srcSet={receiver768} media="(max-width: 962px)" />
            <source srcSet={receiver1024} media="(max-width: 1280px)" />
            <img 
              src={receiver} 
              alt="radio receiver" 
              loading="lazy"
            />
          </picture>
          <span className="marketing__product-new"></span>
        </div>
        <div className="marketing__content">
          <h2 className="title-reset marketing__title title">Будь с нами на одной волне!</h2>
          <span className="marketing__img-wave"></span>
          {productDescription.map((text, index) => (
            <p 
              key={index}
              className={`marketing__descr${index === 0 ? ' marketing__descr--1' : ''}`}
            >
              {text}
            </p>
          ))}
          <p className="marketing__price">2 800 ₽</p>
          <a className="btn-reset marketing__btn" href="/">
            Купить на Яндекс.Маркет
          </a>
        </div>
      </div>
    </section>
  );
}