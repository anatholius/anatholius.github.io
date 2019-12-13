import React from 'react';
import {Block, Link, List, ListItem, Navbar, Page, Toolbar, View, Views} from 'framework7-react';


export default class CodeSamplesPage extends React.Component {
    displayName = this.__proto__.constructor.name;

    render() {
        console.log(this.displayName, this.$f7route);

        return <Page>
            <Navbar title="Code Samples" backLink/>
            {this.showViews()}
        </Page>
    }

    showViews = () => {
        return <Views tabs>
            <Toolbar tabbar>
                <Link tabLink="#view-php" tabLinkActive>PHP</Link>
                <Link tabLink="#view-js">JavaScript</Link>
            </Toolbar>
            <View id="view-php" className="view-php" tab tabActive master masterDetailBreakpoint={800}>
                <Page noNavbar className="page-master-detail">
                    <p>In this section I present descriptions of code fragments or ways to solve various problems
                        programming while working with PHP. The basic tool I use is Symfony 4+ and
                        derivative applications useful for programming server behavior in the context of applications
                        online.</p>
                </Page>
                <Page noNavbar className="page-master">
                    <Block className="visible-">
                        In this section I present descriptions of code fragments or ways to solve various problems
                        programming while working with PHP. The basic tool I use is Symfony 4+ and
                        derivative applications useful for programming server behavior in the context of applications
                        online.
                    </Block>
                    <Block>
                        <h2>Navigation</h2>
                    </Block>
                    <List>
                        <ListItem reloadDetail={true} link="/code-samples/php/firstAdminCommand/" view=".view-php">
                            Command <small className="margin-left">the first super admin in the Symfony
                            application</small>
                        </ListItem>
                        <ListItem reloadDetail={true} link="/code-samples/php/problemResolver/" view=".view-php">
                            Problem Resolver
                        </ListItem>
                    </List>
                </Page>
            </View>
            <View id="view-js" className="view-js" tab masterDetailBreakpoint={800}>
                <Page noNavbar withToolbar className="page-master-detail">
                    <p>In this section I present motivation descriptions and some ways to solve individual problems
                        programming with the help of design patterns in JavaScript. This is a summary
                        several sample codes almost alive drawn from live projects.</p>
                    <p>By looking into the source in the repository you can find references to other patterns that in
                        I did not put this sample repository. This shows that the overall picture
                        the application is usually much more complex.</p>
                    <p>Also in the programming process I often use various types of loggers (from console.logs to
                        their own classes that perform more complex operations for this purpose). So they can happen
                        commented excerpts with such references</p>
                </Page>
                <Page noNavbar className="page-master">
                    <Block>
                        <h2>Navigation</h2>
                    </Block>
                    <List>
                        <ListItem reloadDetail={true} link="/code-samples/js/command/" view=".view-js">
                            Command Pattern
                        </ListItem>
                        <ListItem reloadDetail={true} link="/code-samples/js/facade/" view=".view-js">
                            Facade Pattern
                        </ListItem>
                        <ListItem reloadDetail={true} link="/code-samples/js/prototype/" view=".view-js">
                            Prototype Pattern
                        </ListItem>
                        <ListItem reloadDetail={true} link="/code-samples/js/singleton/" view=".view-js">
                            Singleton Pattern
                        </ListItem>
                        <ListItem reloadDetail={true} link="/code-samples/js/strategy/" view=".view-js">
                            Strategy Pattern
                        </ListItem>
                    </List>
                </Page>
            </View>
        </Views>
    }

}
