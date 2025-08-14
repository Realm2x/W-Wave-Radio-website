import ModalImgFc from "../assets/ModalImgFc";
import ModalImgVk from "../assets/ModalImgVk";
import ModalImgGg from "../assets/ModalImgGg";

export const navLinks = [
  { id: 1, href: "#podcasts", text: "Подкасты" },
  { id: 2, href: "#transfers", text: "Передачи" },
  { id: 3, href: "#guests", text: "Гости" },
  { id: 4, href: "#playlists", text: "Плейлисты" },
  { id: 5, href: "#about", text: "О нас" },
];

export const submenuLinks = [
  { id: 1, href: "/", text: "Новости" },
  { id: 2, href: "/", text: "Блоги" },
  { id: 3, href: "/", text: "Топы" },
  { id: 4, href: "/", text: "Опросы" },
  { id: 5, href: "/", text: "Рейтинги" },
  { id: 6, href: "/", text: "Реклама" },
];

export const socialLogins = [
  { id: 1, component: ModalImgFc, label: "Войти через Facebook" },
  { id: 2, component: ModalImgVk, label: "Войти через ВКонтакте" },
  { id: 3, component: ModalImgGg, label: "Войти через Google" },
];