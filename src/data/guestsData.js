import GuestNot from "../assets/guests-not.jpg";
import GuestNot1024 from "../assets/guests-not-1024.jpg";
import GuestNot768 from "../assets/guests-not-768.jpg";
import GuestNot320 from "../assets/guests-not-320.jpg";
import OlgaPhoto from "../assets/guests-olga-martynova.jpg";
import OlgaPhoto1024 from "../assets/guests-olga-martynova-1024.jpg";
import OlgaPhoto768 from "../assets/guests-olga-martynova-768.jpg";
import OlgaPhoto320 from "../assets/guests-olga-martynova-320.jpg";

export const accordionItemsData = [
  {
    profession: "Блогеры",
    guests: [
      { id: "sergey-denisov", name: "Сергей Денисов" },
      { id: "evgeny-voynovsky", name: "Евгений Войновский" },
      { id: "oleg-sviridovsky", name: "Олег Свиридовский" },
      { id: "denis-telman", name: "Денис Тельман" },
      { id: "matvey-mechnikov", name: "Матвей Мечников" },
      { id: "olga-martynova", name: "Ольга Мартынова" },
      { id: "vladislav-cowpers", name: "Владислав Кауперс" },
      { id: "yuri-gorin", name: "Юрий Горин" },
      { id: "konstantin-prusino", name: "Константин Прусино" },
      { id: "dmitry-mikhalok", name: "Дмитрий Михалок" },
      { id: "mikhail-pozhitnikov", name: "Михаил Пожитников" },
      { id: "maxim-sergeev", name: "Максим Сергеев" },
      { id: "ivan-kalitnikov", name: "Иван Калитников" },
      { id: "peter-piotrovsky", name: "Пётр Пиотровский" },
      { id: "georgy-poluyan", name: "Георгий Полуян" }
    ]
  },
  {
    profession: "Арт-критики",
    guests: [
      { id: "sergey-denisov", name: "Сергей Денисов" },
      { id: "evgeny-voynovsky", name: "Евгений Войновский" },
      { id: "oleg-sviridovsky", name: "Олег Свиридовский" },
      { id: "denis-telman", name: "Денис Тельман" },
      { id: "matvey-mechnikov", name: "Матвей Мечников" },
      { id: "olga-martynova", name: "Ольга Мартынова" },
      { id: "vladislav-cowpers", name: "Владислав Кауперс" }
    ]
  },
  {
    profession: "Художники",
    guests: [
      { id: "sergey-denisov", name: "Сергей Денисов" },
      { id: "evgeny-voynovsky", name: "Евгений Войновский" },
      { id: "oleg-sviridovsky", name: "Олег Свиридовский" },
      { id: "denis-telman", name: "Денис Тельман" },
      { id: "matvey-mechnikov", name: "Матвей Мечников" },
      { id: "olga-martynova", name: "Ольга Мартынова" },
      { id: "georgy-poluyan", name: "Георгий Полуян" }
    ]
  },
  {
    profession: "Люди науки",
    guests: [
      { id: "vladislav-cowpers", name: "Владислав Кауперс" },
      { id: "yuri-gorin", name: "Юрий Горин" },
      { id: "konstantin-prusino", name: "Константин Прусино" },
      { id: "dmitry-mikhalok", name: "Дмитрий Михалок" },
      { id: "mikhail-pozhitnikov", name: "Михаил Пожитников" },
      { id: "maxim-sergeev", name: "Максим Сергеев" },
      { id: "ivan-kalitnikov", name: "Иван Калитников" },
      { id: "peter-piotrovsky", name: "Пётр Пиотровский" },
      { id: "georgy-poluyan", name: "Георгий Полуян" }
    ]
  },
  {
    profession: "Историки",
    guests: [
      { id: "dmitry-mikhalok", name: "Дмитрий Михалок" },
      { id: "mikhail-pozhitnikov", name: "Михаил Пожитников" },
      { id: "maxim-sergeev", name: "Максим Сергеев" },
      { id: "ivan-kalitnikov", name: "Иван Калитников" },
      { id: "peter-piotrovsky", name: "Пётр Пиотровский" },
      { id: "georgy-poluyan", name: "Георгий Полуян" }
    ]
  },
  {
    profession: "Филологи",
    guests: [
      { id: "sergey-denisov", name: "Сергей Денисов" },
      { id: "matvey-mechnikov", name: "Матвей Мечников" },
      { id: "olga-martynova", name: "Ольга Мартынова" },
      { id: "vladislav-cowpers", name: "Владислав Кауперс" },
      { id: "mikhail-pozhitnikov", name: "Михаил Пожитников" }
    ]
  }
];

export const guestsData = {
  "olga-martynova": {
    id: "olga-martynova",
    name: "Ольга Мартынова",
    images: {
      default: OlgaPhoto,
      1024: OlgaPhoto1024,
      768: OlgaPhoto768,
      320: OlgaPhoto320
    },
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#"
    },
    description: "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты «Коммерсантъ». Ведёт активную блогерскую деятельность как куратор музея «Гараж», коим является с 2016 года.",
    episodesLink: "#"
  }
};

export const defaultGuestData = {
  images: {
    default: GuestNot,
    1024: GuestNot1024,
    768: GuestNot768,
    320: GuestNot320
  },
  name: "Информация о госте",
  description: "Подробная информация о данном госте появится в ближайшее время.",
  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#"
  },
  episodesLink: "#"
};