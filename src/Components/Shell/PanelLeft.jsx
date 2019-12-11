import React from "react";
import {BlockTitle, Icon, List, ListItem, Page, Panel, View} from "framework7-react";

export default class PanelLeft extends React.Component {
    displayName = 'PanelLeft';
    // static propTypes = {
    //     display: PropTypes.func,
    //     // event:   PropTypes.object,
    // };

    render() {
        return (
            <React.Fragment>
                <Panel left cover themeDark>
                    <View>
                        <Page>
                            <BlockTitle>Navigacja OFF-LINE</BlockTitle>
                            <List>
                                <ListItem link="#" title="Some link1">
                                    <Icon slot="media" icon="fad fa-sign-out"/>
                                </ListItem>
                                <ListItem link="#" title="Some link2">
                                    <Icon slot="media" icon="fad fa-sign-out"/>
                                </ListItem>
                                <ListItem link="#" title="Some lin2k">
                                    <Icon slot="media" icon="fad fa-sign-out"/>
                                </ListItem>

                                <ListItem divider title="Divider Here"/>

                                <ListItem link="#" title="Some link">
                                    <Icon slot="media" icon="fad fa-sign-out"/>
                                </ListItem>
                            </List>
                        </Page>
                    </View>
                </Panel>
            </React.Fragment>
        );
    }
}