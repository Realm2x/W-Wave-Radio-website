import React from 'react';
import { useChoices } from '../../hooks/useChoices';
import { transfersData, authors } from '../../data/transfersData';
import 'choices.js/public/assets/styles/choices.min.css';
import "./Transfers.css";

const TransferItem = React.memo(({ item }) => (
  <li className="transfers__item">
    <article className="transfers__article">
      <picture>
        <source srcSet={item.image320} media="(max-width: 500px)" />
        <img src={item.image} alt={`Обложка передачи "${item.title}"`} loading="lazy" />
      </picture>
      <div className="transfers__wrapper">
        <div className="transfers__descr">
          <h3 className="title-reset transfers__subtitle">{item.title}</h3>
          <p className="transfers__info">{item.info}</p>
        </div>
        <a 
          className="transfers__link" 
          href="/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Подробнее
        </a>
      </div>
    </article>
  </li>
));

const AuthorSelect = () => {
  const selectRef = useChoices();

  return (
    <div className="select-wrapper">
      <p className="transfers__author">Автор:</p>
      <select 
        ref={selectRef}
        name="select" 
        className="custom-select"
        aria-label="Выбор автора"
      >
        {authors.map((author, index) => (
          <option key={index} value={author}>{author}</option>
        ))}
      </select>
    </div>
  );
};

export default function Transfers() {
  return (
    <section className="transfers" id="transfers">
      <div className="container transfers__container section-shift">
        <div className="transfers__menu">
          <div className="transfers__menu-top">
            <h2 className="transfers__title title-reset title">Передачи</h2>
            <AuthorSelect />
          </div>
          <div className="transfers__menu-bottom">
            <a className="transfers__btn" href="/" target="_blank" rel="noopener noreferrer" aria-label="Архив">
              Архив
            </a>
            <p className="transfers__text">В архив попадают все передачи, которые вы пропустили! Enjoy:)</p>
          </div>
        </div>
        <ul className="transfers__list list-reset">
          {transfersData.map(item => (
            <TransferItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}