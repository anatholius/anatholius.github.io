import React, {Component} from 'react';
import {
    Block,
    BlockFooter,
    BlockTitle,
    Button,
    Col,
    Link,
    List,
    ListButton,
    ListInput,
    ListItem,
    LoginScreen,
    LoginScreenTitle,
    Navbar,
    NavLeft,
    NavRight,
    NavTitle,
    Page,
    Popup,
    Row,
    Toolbar,
    View,
} from 'framework7-react';
import PanelLeft from "../Components/Shell/PanelLeft";
import PanelRight from "../Components/Shell/PanelRight";


export default class SandboxPage extends Component {
    displayName = this.__proto__.constructor.name;

    render() {
        console.log(this);

        return <Page>
            <Navbar>
                <NavLeft>
                    <Link slot="title" icon="fad fa-chevron-left" back/>
                </NavLeft>
                <NavTitle>
                    Sandbox
                    <span className="subtitle">Fun and checking components</span>
                </NavTitle>
                <NavRight>
                    <Link color="black" icon="fad fa-arrow-to-left" panelOpen="right"/>
                </NavRight>
            </Navbar>

            <PanelLeft/>

            <PanelRight display={this.$f7.displayable} data={this.$f7.api.resource.data} state={this.state}
                        config={this.context.config}
                        app={this.$f7}
            />

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


            {/* Popup */}
            <Popup id="popup">
                <View>
                    <Page>
                        <Navbar title="Popup">
                            <NavRight>
                                <Link popupClose>Close</Link>
                            </NavRight>
                        </Navbar>
                        <Block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate
                            laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam.
                            Omnis iusto nemo quos ullam obcaecati, quod.</Block>
                    </Page>
                </View>
            </Popup>

            {/* Login Screen */}
            <LoginScreen id="login-screen">
                <View>
                    <Page loginScreen>
                        <LoginScreenTitle>Login</LoginScreenTitle>
                        <List form>
                            <ListInput
                                label="Username"
                                name="username"
                                placeholder="Username"
                                type="text"
                            />
                            <ListInput
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </List>
                        <List>
                            <ListButton title="Sign In" loginScreenClose/>
                            <BlockFooter>
                                <p>Click Sign In to close Login Screen</p>
                            </BlockFooter>
                        </List>
                    </Page>
                </View>
            </LoginScreen>
        </Page>;
    }
}
