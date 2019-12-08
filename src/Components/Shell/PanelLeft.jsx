import React from "react";
import {BlockTitle, Icon, List, ListItem, Page, Panel, View} from "framework7-react";
import * as PropTypes from "prop-types";

export default class PanelLeft extends React.Component {
    displayName = 'PanelLeft';
    static propTypes = {
        display: PropTypes.func,
        // event:   PropTypes.object,
    };
    
    display = this.props.display(this.displayName);
    
    render() {
        this.display = this.props.display(this.displayName);
        
        return (
            <React.Fragment>
                {this.display && <Panel left cover themeDark>
                    <View>
                        <Page>
                            <BlockTitle>Navigacja OFF-LINE</BlockTitle>
                            <List>
                                <ListItem link="#" title="Jakiś link1">
                                    <Icon slot="media" icon="fad fa-sign-out"></Icon>
                                </ListItem>
                                <ListItem link="#" title="Jakiś link2">
                                    <Icon slot="media" icon="fad fa-sign-out"></Icon>
                                </ListItem>
                                <ListItem link="#" title="Jakiś lin2k">
                                    <Icon slot="media" icon="fad fa-sign-out"></Icon>
                                </ListItem>
                                
                                <ListItem divider title="Divider Here"></ListItem>
                                
                                <ListItem link="#" title="Jakiś link">
                                    <Icon slot="media" icon="fad fa-sign-out"></Icon>
                                </ListItem>
                            </List>
                        </Page>
                    </View>
                </Panel>}
            </React.Fragment>
        );
    }
}