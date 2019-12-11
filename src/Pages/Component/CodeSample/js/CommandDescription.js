import React from "react";
import {Block} from "framework7-react";


const CommandDescription = () => (
    <Block>
        <p>Kiedy tworzyłem tą aplikację chciałem użyć systemu routingu oferowanego przez Framework7. Router Api
            udostępnia możliwość tworzenia tras asynchronicznych, co z kolei chciałem wykorzystać przy okazji tworzenia
            niestandardowych komponentów w trakcie wczytywania trasy. Przykładem takich komponentów są dynamiczne
            formularze wynikające ze struktury i konfiguracji innych części aplikacji</p>
        <p>Postanowiłem ubrać tą funkcjonalność we wzorce projektowe. I tak na samym początku, podczas konfiguracji
            routingu definiuję funkcję asynchroniczną, w której wykorzystuję wzorzec <b>Command</b> do utworzenia takiej
            konfiguracji trasy, aby podczas jej wczytywania został utworzony odpowiedni formularz przy pomocy
            wzorca <b>Builder</b>. Finalnie do aplikacji jest zwracany reactowy component formularza, co ściśle
            odpowiada flow routingu Framework7.</p>
    </Block>
);
export default CommandDescription;