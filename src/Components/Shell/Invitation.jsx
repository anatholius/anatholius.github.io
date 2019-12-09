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
                    <BlockTitle medium>Strona startowa</BlockTitle>
                    <p>Welcome to Anatholius GitHub Page.</p>
                    <p>Here is a list of projects that you can read more closely by reading the descriptions,
                        as well as look at their codes</p>
                </BlockHeader>

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
                    <ListItem chevronCenter title="KPiR Project" disabled={true}
                              subtitle="The page with projects descriptions"
                              text="available after logging in"
                              link="/kpir/" noLinkClass
                    >
                        <Icon slot="media" icon="fad fa-file-invoice-dollar fa-3x"/>
                    </ListItem>
                    <ListItem chevronCenter title="Sandbox" //disabled={true}
                              subtitle="The page with projects descriptions"
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