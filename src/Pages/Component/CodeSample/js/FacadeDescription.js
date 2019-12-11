import React from "react";
import {Block} from "framework7-react";


const FacadeDescription = () => (
    <React.Fragment>
        <Block>
            <p>Podczas pracy nad aplikacją, w której istotą działania jest skomplikowana struktura encji, chciałem w jak
                najprostszy sposób narysować<sup><b>1</b></sup> zależności w kodzie. Do tego celu użyłem
                wzorca <b>Fasada</b>.
            </p>
            <p>Jest nic innego jak zamknięta w obiekcie JSON konfiguracja właściwości poszczególnych formularzy. Ta
                konfiguracja jednak pomaga w późniejszym etapie tworzenia formularza wykorzystanie tych informacji do
                tworzenia specyficznych dla danej sytuacji komponentów w myśl konwencji wyświetlania formularzy
                przyjętej w danej aplikacji.</p>
        </Block>
        <small><b>1</b> - w trakcie projektowania aplikacji rysowałem również wiele map myśli z tym związanych</small>
    </React.Fragment>
);
export default FacadeDescription;