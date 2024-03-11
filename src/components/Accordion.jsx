import { React, createContext } from "react";
import useToggle from "../hooks/useToggle";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

// Accordion bileşeninin içinde kullanılacak olan context'i oluşturur ve dışa aktarır.
export const AccordionContext = createContext();

// createContext ile oluşturulan context'in Provider özelliğini alır.
const { Provider } = AccordionContext;

// Accordion bileşenini oluşturan fonksiyon bileşenini tanımlar. Bu bileşen children ve header props'larını alır.
const Accordion = ({ children, header }) => {

    // useToggle hook'unu kullanarak, expanded ve toggleExpanded adında iki state ve bu state'i değiştiren fonksiyonu tanımlar.
    const { status: expanded, toggleStatus: toggleExpanded } = useToggle();

    // expanded ve toggleExpanded değerlerini içeren bir obje oluşturur.
    const value = {
        expanded,
        toggleExpanded,
    };

    return (
        // AccordionContext.Provider bileşenini kullanarak, Accordion bileşeninde kullanılacak context'i sağlar.
        <Provider value={value}>
            <div>
                <AccordionHeader expanded={expanded} toggleExpanded={toggleExpanded}>
                    {header}
                </AccordionHeader>

                {/* AccordionContent bileşenini kullanarak, expanded durumuna göre children parametresi ile gelenb içeriği gösterir. */}
                <AccordionContent expanded={expanded}>{children}</AccordionContent>
            </div>
        </Provider>
    );
};

export default Accordion;
