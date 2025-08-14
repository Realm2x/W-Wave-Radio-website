import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseImg from "../../assets/CloseImg";
import { socialLogins } from "../../data/headerData";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("stop-scroll");
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("stop-scroll");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("stop-scroll");
    };
  }, [isOpen]);

  return (
    <>
      <button 
        className="header__btn btn-reset"
        onClick={() => setIsOpen(true)}
        aria-label="Личный кабинет"
      >
        Вход
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              ref={modalRef}
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="modal__wrapper">
                <h2 className="modal__title title-reset">Вход</h2>
                <p className="modal__text">
                  Если у вас ещё нет аккаунта,{" "}
                  <button className="modal__link">
                    зарегистрируйтесь
                  </button>
                </p>
                <form className="modal__form form" action="#" method="post">
                  <div className="modal__form-group">
                    <label>
                      <span className="visually-hidden">Введите ваш логин</span>
                      <input
                        className="modal__input-login form-input form-control"
                        placeholder="Логин"
                        autoComplete="off"
                        data-validate-field="name"
                        name="name"
                      />
                    </label>
                  </div>
                  <div className="modal__form-group">
                    <label>
                      <span className="visually-hidden">Введите ваш пароль</span>
                      <input
                        className="modal__input-pass form-input form-control"
                        placeholder="Пароль"
                        autoComplete="off"
                        data-validate-field="password"
                        name="password"
                        id="password"
                        type="password"
                      />
                    </label>
                  </div>
                  <button
                    className="btn-reset modal__btn btn"
                    aria-label="Войти"
                    type="submit"
                  >
                    Войти
                  </button>
                </form>
              </div>
              <div className="modal__other">
                <p className="modal__text modal__text-other">
                  Войти с помощью:
                </p>
                <div className="modal__group-link">
                  {socialLogins.map(({ id, component: SocialIcon, label }) => (
                    <button
                      key={id}
                      className="modal__link-login"
                      aria-label={label}
                    >
                      <SocialIcon />
                    </button>
                  ))}
                </div>
              </div>
              <button
                className="modal__close-btn btn-reset"
                aria-label="Закрыть"
                onClick={() => setIsOpen(false)}
              >
                <CloseImg />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}