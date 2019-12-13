import React from "react";
import {Block} from "framework7-react";


const FirstAdminCommandDescription = () => (
    <Block>
        <p>Starting a new application in Symfony is easy because great tools are written for it. It's easy to create a basic structure that you can immediately test in your browser. However, if the application contains an authorization system, but does not have the option of registration, there is a need to create the first superadmin user who will be able to manage subsequent users within the application.</p>
        <p>This script was created with the Symfony tool for creating command line commands and written by me to be able to create such a user from the command line so that when running the application in the browser you can log in immediately.</p>
    </Block>
);
export default FirstAdminCommandDescription;