import React, {useContext} from "react";
import {AppContext} from "./../../Context/Contexts";
import {
    Block,
    BlockTitle,
    Icon,
    Link,Button,
    List,
    ListItem,
    Navbar,
    NavLeft,
    NavRight,
    NavTitle,
    Sheet,
} from "framework7-react";


const Navigation = ({setState}) => {
    const app = useContext(AppContext);
    console.log('Navigation.props',props);
    return (
        <React.Fragment>
            <Navbar title="Kpir" subtitle="Księga Przychodów i Rozchodów">
                <NavLeft slot="nav-left">
                    <Link href="/form/company/">
                        <Icon icon="fad fa-sunrise"></Icon>
                    </Link>
                </NavLeft>
        
                <NavRight slot="nav-right">
                    <a className="sheet-open link icon-only"
                       data-sheet=".company-sheet-swipe-to-step">
                        <Icon icon="fad fa-briefcase"></Icon>
                    </a>
                    <a className="link icon-only" onClick={() => {
                        setState({loginScreenOpened: true})
                    }}>
                        <Icon icon="fad fa-sign-in"></Icon>
                    </a>
                </NavRight>
            </Navbar>
            <Sheet
                className="company-sheet-swipe-to-step"
                style={{height: 'auto', '--f7-sheet-bg-color': '#fff'}}
                swipeToClose
                swipeToStep
                closeOnEscape
                backdrop
                top
            >
                <Block className="sheet-modal-swipe-step margin-bottom">
                    Additional info
                </Block>
                
                <BlockTitle><Icon icon="fad fa-chevron-up"></Icon></BlockTitle>
                
                <List>
                    {app.entity.companies && app.entity.companies.length > 0 ? (
                        <ListItem key={-1} radio name="company"
                                  title="Wybierz"
                                  onClick={app.handleCompanyChange}
                                  className="sheet-close"
                        />
                    ) : (
                         <ListItem key={-1} radio name="company"
                                   title="Brak opcji"
                                   onClick={app.handleCompanyChange}
                                   className="sheet-close"
                         />
                     )}
                    {app.entity.companies && app.entity.companies.length > 0 &&
                    app.entity.companies.map((company, index) => (
                        <ListItem key={company.id} radio name="company"
                                  title={company.companyName}
                                  value={company.id}
                                  checked={app.entity.company && company.id === app.entity.company.id}
                                  onClick={app.handleCompanyChange}
                                  className="sheet-close"
                        />
                    ))}
                </List>
            </Sheet>
        
        </React.Fragment>
    )
};
export default Navigation;