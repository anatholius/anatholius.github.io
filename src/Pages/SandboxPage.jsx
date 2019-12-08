import React, {Component} from 'react';
import {
    Block,
    BlockTitle,
    Button,
    Col,
    Link,
    List,
    ListItem,
    Navbar,
    NavLeft,
    NavRight,
    NavTitle,
    Page,
    Row,
    Toolbar,
} from 'framework7-react';


export default class SandboxPage extends Component {
    displayName = this.__proto__.constructor.name;

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <Page>
            <Navbar>
                <NavLeft>
                    <Link slot="title" icon="fad fa-chevron-left" panelOpen="left"/>
                </NavLeft>
                <NavTitle>
                    Sandbox
                    <span className="subtitle">Fun and checking components</span>
                </NavTitle>
                <NavRight>
                    <Link color="black" icon="fad fa-arrow-to-left" panelOpen="right"/>
                </NavRight>
            </Navbar>
            <Toolbar bottom>
                <Link>Left Link</Link>
                <Link>Right Link</Link>
            </Toolbar>
            <br/><br/>
            <BlockTitle>Navigation</BlockTitle>
            <List>
                <ListItem link="/about/" title="About"/>
                <ListItem link="/form/" title="Form"/>
            </List>
            <BlockTitle>Modals</BlockTitle>
            <Block strong>
                <Row>
                    <Col width="50">
                        <Button fill raised popupOpen="#popup">Popup</Button>
                    </Col>
                    <Col width="50">
                        <Button fill raised loginScreenOpen="#login-screen">Login Screen</Button>
                    </Col>
                </Row>
            </Block>
            <BlockTitle>Panels</BlockTitle>
            <Block strong>
                <Row>
                    <Col width="50">
                        <Button fill raised panelOpen="left">Left Panel</Button>
                    </Col>
                    <Col width="50">
                        <Button fill raised panelOpen="right">Right Panel</Button>
                    </Col>
                </Row>
            </Block>
            <List>
                <ListItem link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"/>
                <ListItem link="/load-something-that-doesnt-exist/" title="Default Route (404)"/>
            </List>
        </Page>;
    }
}
