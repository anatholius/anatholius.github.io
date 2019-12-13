import React from 'react';
import { Page, Navbar, Link, Block, BlockTitle } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="About" backLink="Back"/>
    <BlockTitle>About My App</BlockTitle>
    <Block strong>
      <p>Here is About page!</p>
      <p>You can go <Link back>back</Link>.</p>
      <p>Mauris posuere sit amet med vens. Ut ante dolr, temr nec commdo rutrum, varus at sem. Nuam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
      <p>Fusce eros lectus, accmsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharra sagitis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
    </Block>
  </Page>
);
