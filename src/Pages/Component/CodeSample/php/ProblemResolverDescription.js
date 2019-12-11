import React from "react";
import {Block} from "framework7-react";


const ProblemResolverDescription = () => (
    <Block>
        <p>Około pół roku temu studiując strukturę podstawowej implementacji prowadzenia Księgi Przychodów i Rozchodów
            opierając się ściśle na przepisach prawa oraz (bliżej programowania) lekturę najlepszych praktyk
            programistycznych ugrzęzłem w temacie rozwiązywania problemów w sposób programistyczny. Jak się okazuje
            rozwiązywanie problemów i to niekoniecznie programistycznych to obszerna sfera, w której najwięcej mieli by
            do powiedzenia psycholodzy. Natrafiłem na ciekawą stronę (skillsyouneed.com) na której poczytałem sobie na
            temat. Nie był pierwszy impuls do zaprojektowania takiej aplikacji, która pomogła by w odpowiednio
            ustrukturyzowany sposób podejść do każdego problemu z którym się spotykamy. Jednak po lekturze tekstów z tej
            strony ładnie wszystko mi się zaczęło układać w głowie i tak oto rozpisałem strukturę aplikacji w której, po
            jej zaprogramowaniu, można by było zamieścić cały przepływ procesu rozwiązywania problemów. Zgodnie z
            podstawową procedurą o której mowa na stronie about (front-end w kodzie) będzie można opisywać poszczególne
            aspekty procesu.</p>
        <p>W każdym miejscu takiego opisu może się pojawić temat który będziemy mogli oznaczyć jako zadania do
            realizacji. W każdym opisie możemy używać słów sentencji które będą wymagać dogłębniejszego wyjaśnienia.
            Wówczas taką frazę można by było oznaczyć jako element słownika. Każde takie pojęcie mogło by mieć zasięg w
            ramach danego problemu lub bardziej ogólne znaczenie. Odpowiednie oznaczenie zasięgu takiej frazy mogło by
            pozwolić na wykorzystanie już utworzonych fraz w innych miejscach. Z czasem budujemy własną encyklopedię
            pojęć, którą de facto potem można by wykorzystać do odrębnej aplikacji (taka własna wikipedia).</p>
        <p>Wiadomo istnieją aplikacje do kierowania przepływami pracy (w szczególności programistycznej) takie jak np
            JIRA. W samym JIRA można by się było pokusić o skomponowanie takiego przepływu pracy o którym piszę, jednak
            z moich doświadczeń zrobienie tego w niewłaściwy sposób może bardzo łatwo z nie-problemu zrobić
            katastrofę. I niestety w oprogramowaniu typu JIRA jest o to bardzo łatwo.</p>
        <p>Z tej aplikacji spróbuję utworzyć takie narzędzie które będzie pozwalało na zarządzanie każdego rodzaju
            problemem w myśl wspomnianych lektur oraz dodatkowo spróbuję zaimplementować rozwiązania typu kanban lecz o
            ściśle określonym flow postępowania. Zależności pomiędzy poszczególnymi elementami będą posiadać możliwie
            minimalną ilość rozgałęzień, aby maksymalnie ograniczyć prawdopodobieństwo zgubienia się w labiryncie
            milionów wspaniałych gotowych rozwiązań, które koniec końców do niczego się nie przydają.</p>
        <p>Temat jest gruby więc o ile wystartowałem sam o tyle zacząłem to robić w publicznym repozytorium, bo może z
            czasem dołączą się do niego pomocne dłonie, zktórymi będą mógł lepiej i szybciej rozwijać pomysły.</p>
        <br/>
        <p>Aplikacja została dopiero wystartowana. Nie ma jeszcze nic konkretnego poza jednym opisem zainspirowanym
            wspomnianą wcześniej lekturą. Na początek będzie to Api od strony serwerowej do zarządzania encjami i
            komunikacji endpointów, natomiast od strony przeglądarki aplikacja oparta o React, Workbox,
            Framework7 i kilka innych wygodnych narzędzi. Od Kolejnych edycji będą to 2 osobne repozytoria: serwerowe
            (Symfony, ApiPlatform, Messenger) i frontendowe (aplikacja PWA). Po ogarnięciu podstawowych funkcjonalności
            cache'owania i service workera nastąpi połączenie z backendem za pomocą dwóch Api (serwerowego i
            przeglądarkowego) do obsługi przepływów pomiędzy urządzeniami oraz pomiędzy użytkownikami.</p>
        <br/>
        <p>Do koów można zaglądnąć bezpośrednio w repozytorium GH link (w stopce)</p>
    </Block>
);
export default ProblemResolverDescription;