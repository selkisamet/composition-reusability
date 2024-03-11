import { useMemo, useCallback, useState } from "react";

// useToggle adında bir özel bir React hook fonksiyonu tanımlar.
const useToggle = () => {
    // status adında bir state oluşturuluyor, başlangıç değeri false.
    const [status, setStatus] = useState(false);

    // toggleStatus adında bir fonksiyon tanımlar.
    const toggleStatus = useCallback(() => {
        // setStatus ile status state'inin değeri tersine çevrilir.
        setStatus((prevStatus) => !prevStatus);
    }, []);

    // values adında bir değer oluşturulur.
    const values = useMemo(() => ({
        // status state değeri.
        status,
        // toggleStatus fonksiyonu.
        toggleStatus
        // useMemo kullanılarak values değerinin sadece status ve toggleStatus değiştiğinde güncellenmesi sağlanır.
    }), [status, toggleStatus]);

    // values değeri hook'un dışına döndürülür.
    return values;
}

export default useToggle;