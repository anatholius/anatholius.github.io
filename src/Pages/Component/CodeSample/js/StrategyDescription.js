import React from "react";
import {Block} from "framework7-react";


const StrategyDescription = () => (
    <Block>
        <p>Podczas pisania od podstaw Api dla aplikacji działającej w przeglądarce bez połączenia z internetem jako
            element obsługi formularzy niezbędna jest walidacja. Do tego celu idealnym wzorcem projektowym
            jest <b>Strategia</b>.</p>
        <p>W moim przypadku walidację podzieliłem na trzy sfery:
            <ul>
                <li>walidacja pola samego w sobie,</li>
                <li>walidacja pola względem formularza,</li>
                <li>walidacja pola względem kolekcji w której się znajduje.</li>
            </ul>
        </p>
        <p>W tym celu opracowałem strukturę zależności oraz napisałem klasy we wzorcu strategia wykonujące działania wg
            konfiguracji ograniczeń pól, formularzy i aplikacji.</p>

    </Block>
);
export default StrategyDescription;