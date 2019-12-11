import React from "react";
import {Block} from "framework7-react";
import Highlight from 'react-highlight';

const PrototypeDescription = () => (
    <Block>
        <p>Podczas tworzenia aplikacji z systemem formularzy samo tworzenie formularza z prostymi kontrolkami okazało
            się być nie wystarczające. Dlatego wymyśliłem, aby formularz był budowany na podstawie pól w nim zawartych,
            jednak traktujący ja jako twór abstrakcyjny, który może posiadać swoje niestandardowe podstruktury i
            funkcjonalności. W ten sposób postanowiłem utworzyć widżety pól które odzwierciedlą i obsłużą oczekiwania
            użytkownika w kontekście użycia formularza.</p>
        <p>Wymyśliłem kilka rodzajów pól, które w rezultacie odpowiadają rodzajom widżetów umieszczanych docelowo w
            komponencie formularza. Ponieważ każdy rodzaj pola może pojawić się w formularzu kilkukrotnie, lecz
            dotyczyć innych pól formularza a zatem i danych, do zaimplementowania tego pomysłu użyłem
            wzorca <b>Prototyp</b>.</p>
        <p>Jak wszyscy (z pewnością większość) wie, JavaScript jest językiem opartym o ten wzorzec projektowy. W
            zasadzie
            każdy obiekt w JS jest prototypem. Z tego też powodu podczas tworzenia tych widgetów robiłem wiele kroków w
            przód i w tył, aby osiągnąć efekt bez naruszania core'owych standardów języka.</p>
        <p>Finalnie cały ten taniec z kodem okazał się sukcesem. Podczas tworzenia nowego formularza wystarczy tylko
            napisać coś w stylu:</p>
        <Highlight language="javascript">{`<form>
    <FieldWidget fieldName={someFieldName} data={{some: 'JSON data'}}/>
    <CollectionWidget fieldName={collectionFieldName} data={{some: 'JSON data'}}/>
    <FieldWidget fieldName={differentFieldName} data={{some: 'JSON data'}}/>
</form>
`}</Highlight>

    </Block>
);
export default PrototypeDescription;