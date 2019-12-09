import React from 'react';
import {List, ListItem, Navbar, Page} from 'framework7-react';


export default class CodeSamplesPage extends React.Component {
    displayName = this.__proto__.constructor.name;

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return <Page>
            <Navbar title="Master Detail" backLink/>
            <List>
                <ListItem reloadDetail={true} link="/code-samples/command/">Command</ListItem>
                <ListItem reloadDetail={true} link="/code-samples/facade/">Facade</ListItem>
                <ListItem reloadDetail={true} link="/code-samples/prototype/">Prototype</ListItem>
                <ListItem reloadDetail={true} link="/code-samples/singleton/">Singleton</ListItem>
                <ListItem reloadDetail={true} link="/code-samples/strategy/">Strategy</ListItem>
            </List>
        </Page>;
    }
}
