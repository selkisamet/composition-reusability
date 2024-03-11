import { React, useContext } from "react";
import { AccordionContext } from "./accordion";
import AccordionIcon from "./AccordionIcon";

// AccordionHeader adında bir fonksiyonel bileşen oluştur.
const AccordionHeader = ({ children }) => {
    const { expanded, toggleExpanded } = useContext(AccordionContext);

    // Buton içeriğindeki elemanları render eder.
    return (
        <button onClick={toggleExpanded}>
            {/* Accordion context nesnesinden açılır/kapanır durumu ve bu durumu değiştiren fonksiyonu alır. */}
            {children} <AccordionIcon opened="-" closed="+" />
        </button>
    )
}

export default AccordionHeader;