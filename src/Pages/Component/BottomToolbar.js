import React from "react";
import {Link, Toolbar} from "framework7-react";


const BottomToolbar = () => (
    <Toolbar tabbar bottom labels>
        <Link href="/form/invoice" icon="fad fa-file-invoice">Faktura</Link>
        <Link href="/form/invoice" icon="fad fa-receipt">Dowód wewnętrzny</Link>
    </Toolbar>
);
export default BottomToolbar;