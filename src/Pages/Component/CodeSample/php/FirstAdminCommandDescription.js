import React from "react";
import {Block} from "framework7-react";


const FirstAdminCommandDescription = () => (
    <Block>
        <p>Postawienie aplikacji w Symfony jest łatwe gdyż są do tego napisane świetne narzędzie które wyręczają
            programistę z monotonnych czynności przygotowawczych automatyzując je. Również na dalszych etapach istnieje
            wiele narzędzi, które generują nawet gotowe do modyfikacji klasy, a utworzone w konwencji stosowania się do
            dobrych praktyk programistycznych.</p>
        <p>Przychodzi jednak moment, w którym wszystkie podstawowe funkcjonalności już utworzyliśmy, encje zorganizowane
            dzięki Doctrine, całe MVC oraz system logowania. I nagle okazuje się że no dobra, można się zalogować (testy
            to sprawdziły) odpalamy aplikację otwieramy stronę i co? Trzeba utworzyć użytkownika. Jeśli aplikacja nie
            przewiduje systemu rejestracji, a nowych użytkowników może dodać na początku jedynie sam najwyższy admin, to
            jak mamy się zalogować jak i ten nie został jeszcze utworzony. I tu przychodzi z pomocą terminal. Oczywiście
            nie ma gotowców aby tworzyć pierwszych użytkowników, więc trzeba taki gotowiec napisać samemu.</p>
        <p>Ten Skrypt został utworzony narzędziem Symfony do tworzenia komend dla wiersza poleceń i napisany przeze przy
            okazji napotkania problemu o którym pisałem wcześniej. Nie jest skomplikowany po odpaleniu należy podać
            email, hasło, imię i nazwisko. Akurat takich danych wymagałem dla głównego administratora. Nie
            rozbudowywałem go o specjalne klasy oraz nie ubierałem go w żadne wzorce projektowe. Idea jest prosta jak
            wypełnienie formularza i wysłanie go do serwera.</p>
        <p>Gdyby ktoś chciał się nim pobawić - proszę bardzo, jednak gdyby ktoś chciał go użyć w swoim projekcie
            uprzejmie proszę o umieszczenia w phpDoc informacji o mnie jako autorze i najlepiej link do repozytorium,
            czyli mniej więcej tak jak na licencji MIT</p>
    </Block>
);
export default FirstAdminCommandDescription;