import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AccordionOpenSvg from "../assets/AcordionOpenSvg";

export default function Accordion({ items, onGuestClick }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleGuestClick = (e, guestId) => {
        e.preventDefault();
        onGuestClick?.(guestId);
    };

    return (
        <ul className="list-reset accordion__container">
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`accordion__block ac ${
                        activeIndex === index ? "is-active" : ""
                    }`}
                >
                    <h3 className="accordion__profession title-reset ac-header">
                        <button
                            className="btn-reset accordion__btn-slide ac-trigger"
                            type="button"
                            aria-label={item.profession}
                            onClick={() => toggleItem(index)}
                            >
                            {item.profession}
                            <AccordionOpenSvg 
                                className="accordion__btn-svg"
                                style={{
                                transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease'
                                }}
                            />
                            </button>
                    </h3>

                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                className="accordion__content ac-panel"
                                aria-hidden={activeIndex !== index}
                                aria-labelledby={`accordion-header-${index}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: "auto",
                                    opacity: 1,
                                    transition: {
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 100,
                                    },
                                }}
                                exit={{
                                    height: 0,
                                    opacity: 0,
                                    transition: {
                                        height: { duration: 0.3 },
                                        opacity: { duration: 0.1 },
                                    },
                                }}
                            >
                                <ul className="list-reset accordion__list">
                                    {item.guests.map((guest, guestIndex) => (
                                        <motion.li
                                            key={guestIndex}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: guestIndex * 0.05,
                                            }}
                                            className="accordion__item"
                                        >
                                            <button
                                                className="btn-reset accordion__btn"
                                                onClick={(e) =>
                                                    handleGuestClick(
                                                        e,
                                                        guest.id
                                                    )
                                                }
                                            >
                                                {guest.name}
                                            </button>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </li>
            ))}
        </ul>
    );
}
