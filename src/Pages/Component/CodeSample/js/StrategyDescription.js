import React from "react";
import {Block} from "framework7-react";


const StrategyDescription = () => (
    <Block>
        <p>When writing from scratch Api for an application running in a browser without an internet connection as
            the form handling element requires validation. For this purpose, an ideal design pattern
            is <b> Strategy </b>.</p>
        <p>In my case, I divided the validation into three areas:
            <ul>
                <li>field validation in itself,</li>
                <li>field validation relative to the form,</li>
                <li>field validation relative to the collection it is in.</li>
            </ul>
        </p>
        <p>To this end, I developed a structure of dependencies and wrote classes in the strategy pattern that perform actions according to
            configuration of field, form and application restrictions.</p>
    </Block>
);
export default StrategyDescription;