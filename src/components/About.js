import React from 'react';

import {AppBar, RaisedButton} from 'material-ui';
import {Link} from 'react-router-dom';

import Series from './Series';

const Home = () => (
  <div>
    <AppBar
      title="About"
      showMenuIconButton={false} />
    <Link to="/">
      <RaisedButton
        label="go to home"
        secondary={true}
        className="Button" />
    </Link>
    <Series/>
  </div>
)

export default Home;
