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
                    <p>W tej sekcji prezentuję opisy fragmentów kodów lub sposobów rozwiązania różnych problemów
                        programistycznych podczas pracy z PHP. Podstawowym narzędziem którym używam jest Symfony 4+ oraz
                        pochodne aplikacje przydatne do programowania zachowań serwerów w kontekście aplikacji
                        internetowych.</p>
                </Page>
                <Page noNavbar className="page-master">
                    <Block>
                        <h2>Nawigacja</h2>
                    </Block>
                    <List>
                        <ListItem reloadDetail={true} link="/code-samples/php/firstAdminCommand/" view=".view-php">
                            Komenda <small className="margin-left">pierwszy super admin w aplikacji Symfony</small>
                        </ListItem>
                        <ListItem reloadDetail={true} link="/code-samples/php/problemResolver/" view=".view-php">
                            Problem Resolver
                        </ListItem>
                    </List>
                </Page>
            </View>
            <View id="view-js" className="view-js" tab masterDetailBreakpoint={800}>
                <Page noNavbar withToolbar className="page-master-detail">
                    <p>W tej sekcji prezentuję opisy motywacji i trochę sposobów rozwiązania poszczególnych problemów
                        programistycznych przy pomocy wzorców projektowych w języku JavaScript. Jest to zestawienie
                        kilku przykładowych kodów niemal żywcem wyciągniętych z żywych projektów.</p>
                    <p>Zaglądając do źródła w repozytorium można znaleźć odniesienia do innych wzorców, których w
                        tym przykładowym repozytorium nie umieściłem. Pokazuje to, że całościowe ujęcie
                        danej aplikacji jest zwykle dużo bardziej złożone.</p>
                    <p>Również w procesie programowania często używam różnego rodzaju loggerów (od console.logów do
                        własnych klas wykonujących w tym celu bardziej złożone operacje). Mogą sie więc zdarzyć
                        zakomentowane fragmenty z takimi odwołaniami</p>
                </Page>
                <Page noNavbar className="page-master">
                    <Block>
                        <h2>Nawigacja</h2>
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
