import { React, useState } from "react";
import useToggle from "../hooks/useToggle";

// Editable adında bir fonksiyon bileşeni tanımlar.
const Editable = () => {
    // useToggle hook'undan dönen durumu (editable) ve durumu değiştiren fonksiyonu (toggleEditable) alır.
    const { status: editable, toggleStatus: toggleEditable } = useToggle();

    // input değerini saklamak için state tanımlanır ve başlangıç değeri "Title" olarak belirlenir.
    const [inputValue, setInputValue] = useState("Title");

    // input değeri değiştiğinde çağrılan fonksiyon, input değerini günceller.
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            {
                // Eğer editable true ise, düzenlenebilir bir input alanı gösterilir.
                editable ? (
                    <label htmlFor="title">
                        Title: <input type="text" id="title" value={inputValue} onChange={handleInputChange} />
                    </label>
                ) : (
                    // Eğer editable false ise, sadece metin gösterilir
                    <>Title: {inputValue}</>
                )
            }

            {/* Düzenleme modunu açıp kapatan buton */}
            <button onClick={toggleEditable}>{editable ? "Cancel" : "Edit"}</button>
        </div>
    )
}

export default Editable;