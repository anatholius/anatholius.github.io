import React from "react";
import {Block} from "framework7-react";


const SingletonDescription = () => (
    <Block>
        <p>This is probably the most famous and most disliked pattern in the world :)</p>
        <p>If we have a simple structure of properties that we want to use in many places without duplicating the code,
            and at the same time, we want these properties to be "one of a kind" each time we close them in
            object according to the <b>Singleton</b> pattern. That's how I would describe it in my own words :)</p>
        <p>In my applications I usually use it for exception classes that I want to display in a unified way. No
            in this great philosophy, and greatly facilitates the debugging of applications in the development
            process.</p>
    </Block>
);
export default SingletonDescription;