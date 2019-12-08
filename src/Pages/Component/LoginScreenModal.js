import React from "react";
import * as PropTypes from "prop-types";
import {
    BlockFooter,
    Card,
    List,
    ListButton,
    ListInput,
    ListItem,
    LoginScreen,
    LoginScreenTitle,
    Page,
} from "framework7-react";
// import {AppReactContext} from "../../Context/Contexts";

export default class LoginScreenModal extends React.Component {
    displayName = this.__proto__.constructor.name;
    static propTypes = {
        app: PropTypes.func,
        api: PropTypes.object,
        errorMessage: PropTypes.string,
    };
    static contextType = React.createContext(this.$f7);
    event = {
        _request: (url, data, dataType) => {
            return this.app.request.promise.postJSON(url, data, dataType).then(response => {
                console.log('response', response);
            }).catch(xhrError => {
                console.log('_request.xhrError', xhrError);
                console.log('_request.xhrError.response', xhrError.response);
            })
        },
        loadingDone: async () => {
            await this.app.dialog.close();
        },
        close: () => {

            this.setState({
                error: null,
            });
            this.$f7.loginScreen.close();
        },
        login: () => {
            this.app.logger.startProcess('Logowanie...');
            this.app.dialog.preloader('Loading...');

            return this.app.request.promise.postJSON('https://localhost:8000/api/login', {
                email: this.state.email,
                password: this.state.password,
            },'json').then(response => {
                console.log('response',response);

                // const headers = response.xhr.getAllResponseHeaders();
                // const arrHeaders = headers.trim().split(/[\r\n]+/);

                const locationHeader = response.xhr.getResponseHeader('location');

                this.app.logger.info({locationHeader:locationHeader});
                // this.app.logger.log(arrHeaders);
                let result;
                if (response) {
                    if (response.data) {
                        this.app.api.resource.fillData(response.data).then(async dbData => {
                            console.log('this.app.api.resource.data',this.app.api.resource.data);
                            // await this.setState(this.state);
                            await this.$f7.views.main.router.back({reloadPrevious: true, ignoreCache: true });
                            await this.$f7.loginScreen.close();
                        });
                    }
                    if (locationHeader) {
                        result = response.data;
                    }
                } else {
                    this.setState({
                        error: {
                            type: 'Internal Error',
                            message: `Wstąpił problem z przetworzeniem zapytania`,
                        },
                    });
                    result = 'Zły response';
                }
                return result;
            }).catch(xhrError => {
                if (xhrError.status >= 400 && xhrError.status < 500) {
                    const response = xhrError.xhr.response;
                    console.log('xhrError', xhrError);
                    console.log('response', response);
                    console.log('_request.xhrError.response', JSON.parse(response));
                } else {
                    this.app.logger.error(xhrError);
                }
                console.log('_request.xhrError', xhrError);
                console.log('_request.xhrError.response', xhrError.response);
                return xhrError.xhr;
            }).catch(error => {
                console.log('error', error);
                if (error.message) {
                    this.setState({
                        error: {
                            type: error.name,
                            message: error.message,
                        },
                    });
                    this.app.logger.error(error);
                } else {
                    new Error(error);
                }
                return new Error(error);
            }).finally(resultAfterAll => {
                console.log('resultAfterAll', resultAfterAll);
                this.app.logger.endProcess();
                this.app.dialog.close();
            });
            //*/
        },
    };
    buttons = {
        'signIn': {
            fill: true,
            bgColor: 'green',
            title: 'Zaloguj',
        },
        'close': {
            fill: true,
            bgColor: 'orange',
            title: 'Zamknij',
        },
    };

    constructor(props, context) {
        super(props);
        this.app = this.$f7;

        this.state = {
            email: '',
            password: '',
            error: null,
            isLoading: false,
        };

        if (this.state.error) {
            this.$f7.toast.create({
                text: this.state.error,
                position: 'top',
                closeButton: true,
            }).open();
        }
    }

    render() {
        // this.app.logger.info({
        //     this: this,
        // });

        return (
            <LoginScreen className="main-login-screen" back>
                <Page name="login" noToolbar noNavbar noSwipeback loginScreen>
                    <LoginScreenTitle>Logowanie</LoginScreenTitle>
                    <List form>
                        {this.state.error && (
                            <ListItem>
                                <Card className="width-100 bg-color-red"
                                      title={this.state.error.type}
                                      content={this.state.error.message}/>
                            </ListItem>
                        )}
                        <ListInput
                            label="Email"
                            type="text"
                            placeholder="Your email"
                            value={this.state.email}
                            onInput={(e) => {
                                this.setState({email: e.target.value});
                            }}
                        />
                        <ListInput
                            label="Password"
                            type="password"
                            placeholder="Your password"
                            value={this.state.password}
                            onInput={(e) => {
                                this.setState({password: e.target.value});
                            }}
                        />
                    </List>
                    <List>
                        <ListButton {...this.buttons['signIn']} onClick={this.event.login}/>
                        <ListButton {...this.buttons['close']} onClick={this.event.close}/>
                        <BlockFooter>
                            Aby korzystać z aplikacji musisz się zalogować<br/>
                            Po poprawnym zalogowaniu będzie możliwa instalacja aplikacji w twoim urządzeniu
                        </BlockFooter>
                    </List>
                </Page>
            </LoginScreen>
        )
    }
}