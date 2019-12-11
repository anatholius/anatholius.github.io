import React from 'react';
import {Block, Link, Navbar, Page, Toolbar} from 'framework7-react';
import Helper from "../Plugin/Helpers/Helper";
import CommandDescription from "./Component/CodeSample/js/CommandDescription";
import FacadeDescription from "./Component/CodeSample/js/FacadeDescription";
import PrototypeDescription from "./Component/CodeSample/js/PrototypeDescription";
import SingletonDescription from "./Component/CodeSample/js/SingletonDescription";
import StrategyDescription from "./Component/CodeSample/js/StrategyDescription";
import FirstAdminCommandDescription from "./Component/CodeSample/php/FirstAdminCommandDescription";
import ProblemResolverDescription from "./Component/CodeSample/php/ProblemResolverDescription";

const components = {
    js: {
        command: {
            link: 'https://github.com/anatholius/sample-codes/tree/master/javascript/Patterns/Command',
            desc: CommandDescription,
        },
        facade: {
            link: 'https://github.com/anatholius/sample-codes/tree/master/javascript/Patterns/Facade',
            desc: FacadeDescription,
        },
        prototype: {
            link: 'https://github.com/anatholius/sample-codes/tree/master/javascript/Patterns/Prototype',
            desc: PrototypeDescription,
        },
        singleton: {
            link: 'https://github.com/anatholius/sample-codes/tree/master/javascript/Patterns/Singleton',
            desc: SingletonDescription,
        },
        strategy: {
            link: 'https://github.com/anatholius/sample-codes/tree/master/javascript/Patterns/Strategy',
            desc: StrategyDescription,
        },
    },
    php: {
        firstAdminCommand: {
            link: 'https://github.com/anatholius/sample-codes/blob/master/php/FirstAdminCommand.php',
            desc: FirstAdminCommandDescription,
        },
        problemResolver: {
            link: 'https://github.com/anatholius/problem-resolver',
            desc: ProblemResolverDescription,
        },
    },
};

export default class CodeSamplesDetailPage extends React.Component {
    displayName = this.__proto__.constructor.name;

    render() {
        const DescriptionComponent = components[this.$f7route.params.genus][this.$f7route.params.pattern].desc;

        return <Page>
            <Navbar
                title={`${this.$f7route.params.genus === 'js' ? 'Pattern: ' : ''}${Helper.ucfirst(this.$f7route.params.pattern)}`}
                backLink/>
            <Toolbar tabbar bottom labels>
                <Link href={components[this.$f7route.params.genus][this.$f7route.params.pattern].link} external
                      target="_blank" icon="fab fa-github">Look at source</Link>
            </Toolbar>
            <Block strong>
                <p><b>Pattern: {Helper.ucfirst(this.$f7route.params.pattern)}</b></p>
                <DescriptionComponent/>
            </Block>
        </Page>;
    }
}
