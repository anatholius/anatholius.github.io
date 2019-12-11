import React from "react";
import {Block, BlockHeader, BlockTitle, Icon, List, ListItem} from "framework7-react";
import LoginScreenModal from "../../Pages/Component/LoginScreenModal";

export default class Invitation extends React.Component {
    displayName = this.__proto__.constructor.name;
    // static contextType = AppReactContext;
    event = {};

    _isMounted = false;

    constructor(props) {
        super(props);

        this.app = this.$f7;
    }

    render() {
        return (
            <Block noHairlines>
                <BlockHeader>
                    <BlockTitle medium>Welcome</BlockTitle>
                    <p>This page is about some of my projects. You can read about the motivations to create them and
                        delve into the codes</p>
                </BlockHeader>

                <p>GH Page itself was created with the help of Reactjs and Framework7. Therefore, it should as well
                    look on mobile devices.</p>

                <List mediaList className="media-center">
                    <ListItem chevronCenter title="Code Samples" //disabled={true}
                              subtitle="Descriptions and links to sample code repositories"
                              text="available without logging in"
                              link="/code-samples/" noLinkClass
                    >
                        <Icon slot="media" icon="fad fa-code fa-2x"/>
                    </ListItem>
                    <ListItem chevronCenter title="Problem Resolver Project"
                              subtitle="Application project supporting problem solving"
                              text="available without logging in"
                              link="/problem-resolver/" noLinkClass
                    >
                        <Icon slot="media" icon="fad fa-project-diagram fa-2x"/>
                    </ListItem>
                    <ListItem chevronCenter title="Sandbox" //disabled={true}
                              subtitle="A page to play with components"
                              text="available without logging in"
                              link="/sandbox/" noLinkClass
                    >
                        <Icon slot="media" icon="fad fa-presentation fa-2x"/>
                    </ListItem>
                </List>
                <LoginScreenModal/>
            </Block>
        )
    }
}