import React from "react";
import {Block} from "framework7-react";


const CommandDescription = () => (
    <Block>
        <p>When I created this application I wanted to use the routing system offered by Framework7. Api router
            provides the ability to create asynchronous routes, which in turn I wanted to use when creating
            custom components while the route is loading. An example of such components are dynamic
            forms resulting from the structure and configuration of other parts of the application.</p>
        <p>I decided to dress this functionality in design patterns. And so at the very beginning, during configuration
            routing I define an asynchronous function in which I use the <b> Command </b> pattern to create one
            configuration of the route, so that when it is loaded, the appropriate form will be created using
            the <b>Builder</b> pattern. Finally, the reactowy component of the form is returned to the application,
            strictly corresponds to Framework7 flow routing.</p>
    </Block>
);
export default CommandDescription;