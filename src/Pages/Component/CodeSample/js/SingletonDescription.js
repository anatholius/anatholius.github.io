import React from "react";
import {Block} from "framework7-react";


const SingletonDescription = () => (
    <Block>
        <p>To chyba najbardziej słynny i najbardziej nielubiany wzorzec na świecie :)</p>
        <p>Jeśli mamy prostą strukturę właściwości które chcemy wykorzystać w wielu miejscach bez powielania kodu, a
            jednocześnie chcemy aby te właściwości przy każdym użyciu były „jedyne w swoim rodzaju” zamykamy je w
            obiekcie wg wzorca <b>Singleton</b>. Tak bym to określił własnymi słowami :)</p>
        <p>W swoich aplikacjach najczęściej używam go do klas wyjątków które chcę wyświetlać w ujednolicony sposób. Nie
            w tym wielkiej filozofii, a znacznie ułatwia debugowanie aplikacji w procesie tworzenia.</p>
    </Block>
);
export default SingletonDescription;