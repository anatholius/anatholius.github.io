import React from "react";
import {Block} from "framework7-react";


const ShopwareSampleDescription = () => (
    <Block>
        <p>
            Recently, I have spent a lot of time working with the Shopware 6 application. It is an e-commerce
            application that is a modern alternative to the popular Magento. This version of the Shopware was created
            with Symfony 4+.
        </p>
        <p>
            The Shopware application is designed in such a way that it leaves an open way to expand it in any way with
            the so-called plugins that are actually known as Symfony "bundles". While working with this application
            I&nbsp;came up with and created many improvements added to it with plugins.
        </p>
        <p>
            I was wondering for a long time what code could be presented from the solutions created here.
            I came to the conclusion that to someone unfamiliar with the specifics of this application, the code
            fragments might seem completely incomprehensible. So I will tell you about a small excerpt, things like:
            where did the idea come from, why this way, and what benefits the described passage can bring.
        </p>
        <h3>Migrations</h3>
        <p>
            At the outset, I would like to point out that this is a topic invisible to end users. But it can make
            life easier for developers who create extensions for Shopware.
        </p>
        <p>
            Migrations are executed during the plug-in installation process or directly from Terminal
            using commands executed by the developer.
        </p>
        <p>
            The migration mechanism implemented in Shopware has two basic life cycle functions:
            <ul>
                <li><b>update</b> - executes the migration installation instructions</li>
                <li><b>updateDestructive</b> - executes the rollback instructions</li>
            </ul>
        </p>
        <p>
            The content of both of these functions is created by the developer.
        </p>
        <h4>True story</h4>
        <p>
            It happened to me that I was working on many plugins simultaneously in one application. Each of them had
            some own migrations.
        </p>
        <p>
            Everything was fine until I had to uninstall the plugin and undo its migrations.
        </p>
        <p>
            It turns out that the <i> updateDestructive </i> function executes the instructions from the currently
            uninstalled migration, but the migration mechanism itself goes on and uninstalls all other migrations
            (here: from other plugins) that were installed after this one. You can imagine the result :/
        </p>
        <p>
            This behavior is not due to the Shopware implementation, but is a consequence of the Symfony
            bundle design. This issue has long been discussed by the Symfony community.
            In general, there is a rule not to implement system-impacting changes in the bundle.
        </p>
        <p>
            However, I wanted to be able to uninstall the migration together with the plugin.
        </p>
        <p>
            In this way, we got to know the reasons for creating an extension that allows you to use the migration
            lifecycle functions and the plug-in lifecycle functions to allow the developer (or the plug-in uninstalling
            function) to withdraw the migration of this plugin only.
        </p>
        <h4>Conclusions</h4>
        <p>
            This small service class can give you the ability to use any stage of the plug-in lifecycle and perform
            any function you define in the migration class.
        </p>
        <p>
            This will be done independently of any other migrations on the system, and without compromising data
            from other migrations.
        </p>
        <p>
            All you need to do is write the appropriate migration functions (usually MySQL queries), but you can
            also use the repository system from Shopware. Just use in the migration function the third parameter to
            include container to get to the autowirable classes.
        </p>
    </Block>
);
export default ShopwareSampleDescription;
