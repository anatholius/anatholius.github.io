import React from 'react';

import {BlockHeader, BlockTitle, Page, PageContent} from 'framework7-react';
import PanelLeft from "../Components/Shell/PanelLeft";
import PanelRight from "../Components/Shell/PanelRight";
import Invitation from "../Components/Shell/Invitation";
import ShellNavbar from "../Components/Shell/ShellNavbar";
import CompanyConfig from "../Patterns/Facade/FormConfig/CompanyConfig";

export default class HomePage extends React.Component {
    displayName = this.__proto__.constructor.name;

    constructor(props, context) {
        super(props, context);

        this.app = this.$f7;

        this.state = {};
    }

    render() {
        const ProjectsCollectionWidget = this.app.widget
            .SwipeableCollection('card')
            .withConfig(new CompanyConfig())
            .withEvents(this.app.event)
            .withHandlers(this.app.handle)
            .buildWidget()
        ;
        return <Page>
            <ShellNavbar data={this.context.data} state={this.state} app={this.app}/>
            {this.app.displayable('panelLeft') && (
                <PanelLeft/>
            )}

            {this.app.displayable('resourceData') && (
                <PanelRight display={this.app.displayable} data={this.app.api.resource.data} state={this.state}
                            config={this.context.config}
                            app={this.app}
                />
            )}

            {!this.app.displayable('user') ? (
                <Invitation event={this.event} state={this.state}/>
            ) : (
                <PageContent>
                    <BlockHeader>
                        <BlockTitle medium>
                            Hello{this.app.displayable('user') ? ' ' + this.app.api.resource.data.config.user['firstName'] : ''}
                        </BlockTitle>
                    </BlockHeader>

                    {!this.app.displayable('company') && this.app.displayable('companyCollection') && (
                        <ProjectsCollectionWidget mediaList field="company" data={{
                            items: this.app.api.resource.data.collection.company,
                            current: this.app.api.resource.data.current,
                        }}/>
                    )}

                </PageContent>
            )}

        </Page>;
    }
}
HomePage.contextType = React.createContext({});
