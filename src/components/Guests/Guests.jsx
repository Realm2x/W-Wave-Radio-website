import { useState } from "react";
import Accordion from "../../hooks/Accordion";
import GuestCard from "./GuestCard";
import {
    accordionItemsData,
    guestsData,
    defaultGuestData,
} from "../../data/guestsData";
import "./Guests.css";

export default function Guests() {
    const [activeGuest, setActiveGuest] = useState(null);

    const handleGuestClick = (guestId) => {
        setActiveGuest(guestId);
    };

    const getGuestData = (guestId) => {
        if (!guestId) return defaultGuestData;
        return (
            guestsData[guestId] || {
                ...defaultGuestData,
                name: `Гость: ${
                    accordionItemsData
                        .flatMap((item) => item.guests)
                        .find((guest) => guest.id === guestId)?.name || guestId
                }`,
            }
        );
    };

    const currentGuest = getGuestData(activeGuest);

    return (
        <section className="guests" id="guests">
            <div className="container guests__conteiner section-offset">
                <h2 className="guests__title title-reset title">Гости</h2>
                <p className="guests__subtitle">У нас бывают:</p>
                <p className="guests__descr">
                    Блогеры, арт-критики и деятели искусства, музыканты, молодые
                    учёные и люди науки, историки, филологи и много других
                    интересных гостей!
                </p>

                <div className="guests__content accordion">
                    <Accordion
                        items={accordionItemsData}
                        onGuestClick={handleGuestClick}
                    />

                    <ul className="guests__card tabs list-reset">
                        <GuestCard
                            guest={currentGuest}
                            isActive={!!activeGuest}
                        />
                    </ul>
                </div>
            </div>
        </section>
    );
}
