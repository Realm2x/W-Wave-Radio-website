import GuestLinkInst from "../../assets/GuestLinkInst";
import GuestLinkFacebook from "../../assets/GuestLinkFacebook";
import GuestLinkTwitt from "../../assets/GuestLinkTwitt";

export default function GuestCard({ guest, isActive }) {
  if (!guest) return null;

  return (
    <li className={`tabs__item ${isActive ? 'tabs__item--active' : ''}`} id={guest.id}>
      <picture>
        <source srcSet={guest.images[320]} media="(max-width: 500px)" />
        <source srcSet={guest.images[768]} media="(max-width: 962px)" />
        <source srcSet={guest.images[1024]} media="(max-width: 1280px)" />
        <img className="tabs__photo" src={guest.images.default} alt={guest.name} />
      </picture>
      <article className="tabs__article">     
        <div className="tabs__block-link">
          <a className="tabs__link" href={guest.social.instagram} target="_blank" rel="noopener noreferrer">
            <GuestLinkInst />
          </a>
          <a className="tabs__link" href={guest.social.facebook} target="_blank" rel="noopener noreferrer">
            <GuestLinkFacebook />                
          </a>
          <a className="tabs__link" href={guest.social.twitter} target="_blank" rel="noopener noreferrer">
            <GuestLinkTwitt />
          </a>
        </div>
        <h3 className="tabs__title title-reset">{guest.name}</h3>
        <div className="tabs__descr">{guest.description}</div>
        <a className="tabs__btn btn-reset" href={guest.episodesLink}>Эфиры с гостем</a>
      </article>
    </li>
  );
}