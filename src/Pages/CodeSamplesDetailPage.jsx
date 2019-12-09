import React from 'react';
import {Block, Navbar, Page} from 'framework7-react';
import Helper from "../Plugin/Helpers/Helper";
import CommandDescription from "./Component/CodeSample/CommandDescription";
import FacadeDescription from "./Component/CodeSample/FacadeDescription";
import PrototypeDescription from "./Component/CodeSample/PrototypeDescription";
import SingletonDescription from "./Component/CodeSample/SingletonDescription";
import StrategyDescription from "./Component/CodeSample/StrategyDescription";

const components = {
    command: CommandDescription,
    facade: FacadeDescription,
    prototype: PrototypeDescription,
    singleton: SingletonDescription,
    strategy: StrategyDescription,
};

export default class CodeSamplesDetailPage extends React.Component {
    displayName = this.__proto__.constructor.name;

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const DescriptionComponent = components[this.$f7route.params.pattern];

        return <Page>
            <Navbar title={`Pattern: ${Helper.ucfirst(this.$f7route.params.pattern)}`} backLink/>
            <Block strong>
                <p><b>Pattern: {Helper.ucfirst(this.$f7route.params.pattern)}</b></p>
                <DescriptionComponent/>
            </Block>
        </Page>;
    }
}
