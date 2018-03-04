import React from 'react';

import {AppBar, RaisedButton} from 'material-ui';
import {Link} from 'react-router-dom';

const Home = () => (
  <div>
    <AppBar
      title="Home"
      showMenuIconButton={false} />
    <Link to="/about">
      <RaisedButton
        label="go to about"
        secondary={true}
        className="Button"/>
    </Link>
  </div>
)

export default Home;
