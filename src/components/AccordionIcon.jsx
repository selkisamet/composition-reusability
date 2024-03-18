import { React, useContext } from "react";
import { AccordionContext } from "./accordion";

// AccordionIcon adında bir fonksiyon bileşenini tanımlar.
// Varsayılan olarak opened ve closed parametreleri alır.
const AccordionIcon = ({ opened = "-", closed = "-" }) => {
    // AccordionContext'ten expanded adlı değişkeni alır.
    const { expanded } = useContext(AccordionContext);

    // Eğer expanded true ise opened değerini, değilse closed değerini döndürür.    return <span>{expanded ? opened : closed}</span>
}

export default AccordionIcon;