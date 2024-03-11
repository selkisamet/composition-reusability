import { React, useContext } from "react";
import { AccordionContext } from "./accordion";

// AccordionContent adında bir fonksiyon bileşeni oluşturur ve bu bileşen, children adında bir prop alır
const AccordionContent = ({ children }) => {
    // AccordionContext'ten expanded adlı değişkeni alır.
    const { expanded } = useContext(AccordionContext);

    // JSX içinde, eğer expanded true ise children'ı gösteren bir div döndürür.
    return (
        <div className="accordion">{expanded && children}</div>
    )
}

export default AccordionContent;