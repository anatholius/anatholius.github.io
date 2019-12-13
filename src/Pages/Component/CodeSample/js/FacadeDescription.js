import React from "react";
import {Block} from "framework7-react";


const FacadeDescription = () => (
    <React.Fragment>
        <Block>
            <p>While working on an application where the essence of the action is a complicated entity structure, I wanted in how
                the easiest way to draw <sup> <b> 1 </b> </sup> dependencies in the code. I used it for this purpose
                the <b>Facade</b> pattern.
            </p>
            <p>There is nothing else but the configuration of the properties of individual forms enclosed in the JSON object. this
                configuration, however, helps you later use this information to create the form
                creating situation-specific components according to the form display conventions
                adopted in the given application.</p>
        </Block>
        <small><b>1</b> - when I was designing the application I also drew many mind maps related to it</small>
    </React.Fragment>
);
export default FacadeDescription;